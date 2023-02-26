from flask import Flask, render_template, request
import pandas as pd
import numpy as np
import pickle
from flask import Flask, render_template, request
from gensim.models import Word2Vec
import numpy as np
import pandas as pd
import re
import nltk
from nltk.corpus import stopwords
from nltk.tokenize import word_tokenize
from nltk.stem import WordNetLemmatizer
from sklearn.feature_extraction.text import TfidfVectorizer
from gensim.models import Word2Vec
from sklearn.preprocessing import OneHotEncoder, LabelEncoder

app = Flask(__name__)
# Load the trained machine learning model
with open('modelRDF.pkl', 'rb') as f:
    model = pickle.load(f)

@app.route('/')
def index():
    return render_template('home.html')

@app.route('/')
def home():
    return render_template('home.html')

@app.route('/predict', methods=['POST'])
def predict():
    # Get the data from the form
    title = request.form.get('title')
    genre = request.form.get('genre')
    synopsis = request.form.get('description')
    anime_type = request.form.get('type')
    producer = request.form.get('producer')
    studio = request.form.get('studio')

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
    data["Title"] = data["Title"].apply(lambda x: re.sub(r"[^a-zA-Z\s]", "", x))
    data["Title"] = data["Title"].apply(lambda x: re.sub(r"\d+", "", x))
    data["Synopsis"] = data["Synopsis"].apply(lambda x: re.sub(r"[^a-zA-Z\s]", "", x))
    data["Synopsis"] = data["Synopsis"].apply(lambda x: re.sub(r"\d+", "", x))
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

    # Render the prediction result in the HTML template
    return render_template('results.html', prediction=prediction)


if __name__ == '__main__':
    app.run(debug=True)