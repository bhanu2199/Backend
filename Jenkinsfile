pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                // Checkout the latest code from the GitHub repository
                git branch: 'feature', url: 'https://github.com/bhanu2199/Case-Study.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                // Load nvm and set the correct PATH
                script {
                    sh '''#!/bin/bash
                    source ~/.nvm/nvm.sh
                    nvm install 16  # Or any specific Node.js version you want to use
                    nvm use 16
                    npm install
                    '''
                }
            }
        }

        stage('Build') {
            steps {
                // Build the React app
                script {
                    sh 'npm run build'  // This will create the 'build/' folder with the production build
                }
            }
        }
    }

    post {
        always {
            // Clean up or notify on completion, if needed
            echo 'Build pipeline finished'
        }
    }
}
