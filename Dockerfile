# Dockerfile to build a flask app
# python  
FROM python:3.9
WORKDIR /user/app/
COPY requirements.txt .
RUN pip install -r requirements.txt --user
COPY . .
EXPOSE 5000
CMD ["python", "app.py"]

