import pandas as pd
import numpy as np
import pickle
from flask import Flask, render_template, request, jsonify
from gensim.models import Word2Vec
import numpy as np
import pandas as pd
from gensim.models import Word2Vec
from sklearn.preprocessing import LabelEncoder
from prometheus_flask_exporter import PrometheusMetrics
from werkzeug.middleware.dispatcher import DispatcherMiddleware
from prometheus_client import make_wsgi_app,generate_latest
import prometheus_client
#from prometheus_client.core import CollectorRegistry
#from prometheus_client import Summary, Counter, Histogram, Gauge

app = Flask(__name__)

metrics = PrometheusMetrics(app)
metrics.info('app_info', 'Anime Flask App', version='1.0.3')
# Define counters
REQUESTS_COUNTER = metrics.counter('requests_total', 'Total number of requests',labels={'endpoint': lambda: request.endpoint, 'path': lambda: request.path, 'method':lambda:request.method})
EXCEPTIONS_COUNTER = metrics.counter('exceptions_total', 'Total number of exceptions',labels={'endpoint': lambda: request.endpoint, 'path': lambda: request.path, 'method':lambda:request.method})
# Define gauges
ACTIVE_REQUESTS_GAUGE = metrics.gauge('active_requests', 'Number of active requests',labels={'endpoint': lambda: request.endpoint, 'path': lambda: request.path, 'method':lambda:request.method})
MEMORY_USAGE_GAUGE = metrics.gauge('memory_usage', 'Memory usage of the application in bytes',labels={'endpoint': lambda: request.endpoint, 'path': lambda: request.path, 'method':lambda:request.method})
# Define histograms
REQUEST_DURATION_HISTOGRAM = metrics.histogram('request_duration_seconds', 'Duration of HTTP requests',labels={'endpoint': lambda: request.endpoint, 'path': lambda: request.path, 'method':lambda:request.method})
# Define summaries
REQUEST_SIZE_SUMMARY = metrics.summary('request_size_bytes', 'Size of HTTP requests',    labels={'endpoint': lambda: request.endpoint, 'path': lambda: request.path, 'method':lambda:request.method})

# Load the trained machine learning model
with open('modelRDF.pkl', 'rb') as f:
    model = pickle.load(f)

@app.route('/')
def index():
    return render_template('home.html')

@app.route("/metrics")
def metrics():
    return generate_latest()

# Add prometheus wsgi middleware to route /metrics requests
app.wsgi_app = DispatcherMiddleware(app.wsgi_app, {
    '/metrics': make_wsgi_app()
})

@app.route('/predict', methods=['POST'])
def predict():
    # Get the data from the form
    data = request.get_json()
    title = data.get('title')
    genre = data.get('genre')
    synopsis = data.get('synopsis')
    anime_type = data.get('anime_type')
    studio = data.get('studio')
    producer = data.get('producer')

    # Preprocess the data
    data = pd.DataFrame({
        'Title': [title],
        'Genre': [genre],
        'Synopsis': [synopsis],
        'Type': [anime_type],
        'Producer': [producer],
        'Studio': [studio]
    })
    data = data.applymap(lambda x: x.lower() if isinstance(x, str) else x)
    # Convert categorical columns to numerical using label encoding
    data["Synopsis"].fillna("", inplace=True)
    le = LabelEncoder()
    data["Type"] = le.fit_transform(data["Type"])
    data["Producer"] = le.fit_transform(data["Producer"])
    data["Studio"] = le.fit_transform(data["Studio"])
    data["Genre"] = le.fit_transform(data["Genre"])
    # Combine numerical and categorical features
    X_text = data[["Title", "Synopsis"]]
    X_num = data[["Type", "Producer", "Studio","Genre"]].fillna(data.median())
    # Train Word2Vec model
    sentences = [text.split() for text in data["Title"] + data["Synopsis"]]
    w2v_model = Word2Vec(sentences, vector_size=100, window=5, min_count=1, workers=4)

    X_text1 = []
    for index, row in X_text.iterrows():
        title_vector = np.mean([w2v_model.wv[word] for word in row["Title"] if word in w2v_model.wv], axis=0)
        if np.isnan(title_vector).any():
            title_vector = np.zeros(w2v_model.vector_size)
        synopsis_vector = np.mean([w2v_model.wv[word] for word in row["Synopsis"] if word in w2v_model.wv], axis=0)
        if np.isnan(synopsis_vector).any():
            synopsis_vector = np.zeros(w2v_model.vector_size)
        X_text1.append(np.concatenate((title_vector, synopsis_vector)))

    X_text1 = np.array(X_text1)

    # Combine numerical and textual data
    X = np.concatenate((X_text1, X_num), axis=1)
    X = np.nan_to_num(X, nan=np.nan)
    X = np.nan_to_num(X, nan=np.nanmean(X, axis=0), posinf=np.nan, neginf=np.nan)

    # Prediction
    prediction = model.predict(X)

    print(prediction.tolist())

    # Render the prediction result in the HTML template
    return jsonify(prediction.tolist())


if __name__ == '__main__':
    app.run(debug=True)
