pipeline {
  agent {
    node {
      label 'master'
    }

  }
  stages {
    stage('BUILD') {
      steps {
	    sh '''cd $WORKSPACE && mvn install'''
        sh '''cd $WORKSPACE && mvn hpi:verify'''
		sh '''cd $WORKSPACE && mvn hpi:hpi'''
      }
    }

  }
}