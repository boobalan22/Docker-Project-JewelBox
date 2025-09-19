pipeline {
    agent any
    tools {
        jdk 'Java17'
        maven 'maven-3.9'
    }
    stages {
        stage('Git Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/boobalan22/Docker-Project-JewelBox.git'
            }
        }

        stage('Code Compile') {
            steps {
                sh "mvn clean package"
            }
        }

        stage ('Sonar-Scanner') {
            steps { 
                withSonarQubeEnv('MySonar') { 
            sh '''
            mvn clean verify sonar:sonar \ 
            -Dsonar.projectKey=Sonar \ 
            -Dsonar.projectName=Sonar 
            ''' 
               } 
            }
        }

        stage('Docker Build') {
            steps {
                sh "docker build -t webapp ."
                sh "docker tag webapp boobu/webapp:latest"
            }
        }

        stage('Docker push') {
            steps {
                withDockerRegistry(credentialsId: 'Docker-cred', url: 'https://index.docker.io/v1/') {
                    sh "docker push boobu/webapp:latest"
                }
            }
        }

        stage('Docker Run') {
            steps {
                sh "docker run -d -p 8080:8080 boobu/webapp:latest"
            }
        }
    }
}
