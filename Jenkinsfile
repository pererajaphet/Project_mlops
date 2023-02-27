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
        stage('Docker Compose building Stage') {
            steps {
                sh "docker-compose up --build"
            }
        }
        stage('Docker Compose Run Stage') {
            steps {
                sh "docker-compose up"
                }
            }
        stage('Docker Compose Push Stage') {
            steps{
                sh "docker login --username=japhetperera --password=JaphetDockerhub"
                //sh "docker tag finalmlops japhetperera/lab-jenkins"
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
