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
                        bat 'npx webpack'
                        bat 'npm run build'
                
            }
        }
        // stage('Test') {
        //     steps {
                
        //                 bat 'start gradlew test'
                  
        //     }
        // }
        // stage('Deploy') {
        //     steps {                
        //                 powershell 'java -jar build/libs/hello-world-java-V1.jar'
        //          }           
        // }
    
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


