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
        /*
        stage('Create Conda environment') {
            steps {
                sh 'conda env create --file environment.yml'
            }
        }
        stage('Activate Conda environment') {
            steps {
                sh 'conda activate mon_environnement'
            }
        }
        */
        stage('Install dependencies') {
            steps {
                sh 'pip3 install -r requirements.txt'
            }
        }
        stage('Testing Stage') {
            steps {
                sh "python3 test_main.py"
                }
        }
        /*stage('Docker Compose building Stage') {
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
            }*/
        stage('Merge Stage') {
            steps{
                sh "git checkout main"
                sh "merge staging --allow-unrelated-histories
                sh "git pull origin main"
                sh "git push origin main"
                sh "git branch -D staging"
                }
        }
        
    }
} 
