pipeline {
    agent {
        label {
            
            label 'built-in'
          
                } 
    }

    stages {
        stage ('clone') {
            steps {
                dir ('/www/main/') {
                sh "rm -rf *"
                sh 'git clone -b main https://github.com/Devopmaster/branchindex.git'
                sh "cp -r /www/main/branchindex/index.html /var/www/html"
                sh "chmod 777 /var/www/html/index.html"
                }
            }
        }
        
        stage ('dev') {
            steps {
                 dir ('/www/dev/') {
                sh "rm -rf *"
                sh 'git clone -b dev https://github.com/Devopmaster/branchindex.git'
                sh "cp -r /www/dev/branchindex/dev.html /var/www/html"
                sh "chmod 777 /var/www/html/dev.html"
                 }
            }
        }    

        stage ('qa') {
            steps {
                 dir ('/www/qa/') {
                sh "rm -rf *"
                sh 'git clone -b qa https://github.com/Devopmaster/branchindex.git'
                sh "cp -r /www/qa/branchindex/qa.html /var/www/html"
                sh "chmod 777 /var/www/html/qa.html"
                 }
            }
        }    
    }
}