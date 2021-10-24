pipeline {
  agent {
    node {
      label 'master'
    }

  }
  stages {
    stage('BUILD') {
      sh "pwd"
	   sh '''mvn install'''
        sh '''mvn hpi:verify'''
		sh '''mvn hpi:hpi'''
	   
      }
    }

  }
}