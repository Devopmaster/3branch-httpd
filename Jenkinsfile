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
                
                sh 'git clone -b main https://github.com/Devopmaster/branchindex.git'
                sh "cp -r /www/main/branchindex/index.html /var/www/html"
                sh "chmod 777 /var/www/html/index.html"
                       
                    }
                }
        }
    }
}     
    

