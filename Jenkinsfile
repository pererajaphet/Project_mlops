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
        stage('Create Conda environment') {
            steps {
                sh 'conda env create --file environment.yml'
            }
        }
        stage('Create Conda Environment') { 
            steps { 
                sh 'conda create --name myenv python=3.10' 
                sh 'conda activate myenv' 
                sh 'conda install --file requirements.txt' 
                } 
        }
        /*
        stage('Activate Conda environment') {
            steps {
                sh 'conda activate myenv'
            }
        }
        stage('Install dependencies') {
            steps {
                sh 'conda install --yes --file requirements.txt'
            }
        }
        */
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
