pipeline {
    agent any

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
        stage('Deploy') {
            steps {                
                        bat 'docker build -t todolist-app .'
                        withCredentials([usernamePassword(credentialsId: 'dockerhub', passwordVariable: 'dockerhubPassword', usernameVariable: 'dockerhubUser')]) {
                            bat 'docker login -u ${env.dockerhubUser} -p ${env.dockerhubPassword}'
                            bat 'docker push cyuangoh/todolist:latest'
                        }
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
    }
    }


