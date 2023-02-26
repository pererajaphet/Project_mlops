pipeline {
    agent any
    stages {
        stage('Staging branch') {
            steps {
                sh "git branch -D staging"
                sh "git branch staging"
                sh "git checkout staging"
                sh "git pull origin dev"
                sh "git push origin staging"
                }
            }
        stage('Building Stage') {
            steps {
                sh "pip3 install -r requirements.txt --user"
                }
            }
        stage('Testing Stage') {
            steps {
                sh "python3 app.py"
                }
        }
        stage('Docker building Stage') {
            steps {
                sh "docker build -t finalimage ."
            }
        }
        stage('Docker Run Stage') {
            steps {
                sh "docker run -p 5000:5000 -d finalimage"
                }
            }
        stage('Docker Push Stage') {
            steps{
                sh "docker login --username=japhetperera --password=JaphetDockerhub"
                sh "docker tag finalimage japhetperera/lab-jenkins"
                sh "docker push japhetperera/lab-jenkins"
                }
            }
        stage('Merge Stage') {
            steps{
                sh "git branch"
                sh "git checkout main"
                sh "git pull -f origin HEAD:main"
                sh "git push -f origin staging:main"
                }
        }
    }
} 
