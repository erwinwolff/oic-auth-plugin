pipeline {
  agent {
    node {
      label 'master'
    }

  }
  stages {
    stage('BUILD') {
	  steps {
	   sh '''mvn install'''
        sh '''mvn hpi:verify'''
		sh '''mvn hpi:hpi'''
	   }
      }
   }
}
