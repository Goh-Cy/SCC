pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
            git branch: 'master', url: 'https://github.com/nawaf83/hello-worldjava1.git'
            }
        }
    stage('Build') {
        steps { powershell 'npm run build'}
}
    post {
        always {
        echo 'Cleaning up workspace'
        deleteDir() // Clean up the workspace after the build
        }
        success {
        echo 'Build succeeded!!!'
        // You could add notification steps here
        }
        failure {
        echo 'Build failed!'
        // You could add notification steps here
        }
    }
}
