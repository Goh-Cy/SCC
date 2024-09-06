pipeline {
    agent any
    environment{
        registry = 'cyuangoh/todolist'
        registryCredential = 'dockerhub'
        dockerImage = ''
    }
    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/Goh-Cy/SCC.git'
            }
        }

        
        stage('Build') {
            steps {
                        bat 'npm init -y '
                        bat 'npm install webpack webpack-cli --save-dev '
                        bat 'npm install style-loader --save-dev'
                        bat 'npm install css-loader --save-dev '
                        bat 'npx webpack --config webpack.config.js'
                        bat 'npm run build'
                
            }
        }
        stage('Test') {
            steps {
                
                        bat 'npm test'
                  
            }
        }
        stage('Build Docker Image') {
            steps {  
                script{
                    dockerImage = docker.build registry + ':$BUILD_NUMBER'
                }     
            }
        }
        stage('Deploy Image'){
            steps{
                script{
                    docker.withRegistry('', registryCredential) {
                        dockerImage.push()
                    }
                }
            }
        }
        stage('Clean up'){
            steps{
                bat "docker rmi $registry:$BUILD_NUMBER"
            }
        }
    }

    post {
        success {
            echo 'Build succeeded!!'
            // You could add notification steps here, e.g., send an email
        }
        failure {
            echo 'Build failed!!!'
            // You could add notification steps here, e.g., send an email or Slack message
        }
        always{
            sh 'docker logout'
        }
    }
}


