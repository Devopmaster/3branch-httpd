pipeline {
    agent {
        label {
            
            label 'built-in'
          
                } 
    }

stages {
        stage ('httpd') {
            steps {
                sh 'service httpd start'
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
}