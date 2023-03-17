pipeline {
    agent {
        label {
            
            label 'built-in'
          
                } 
    }
    
    stages {
        stage ('clone') {
            steps {
               dir ('/www/dev/') {
                sh "rm -rf *"
                sh "git clone -b dev https://github.com/Devopmaster/branchindex.git"
                sh "cp -r /www/dev/branchindex/dev.html /var/www/html"
                sh "chmod 777 /var/www/html/dev.html"
                 }



                }
        }
    }
}     
    
