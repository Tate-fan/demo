#!/usr/bin/env groovy

demo {

  agent { "node:6" }

  stages {

    stage("Lint") {
      steps {
        sh "npm run fix"
      }
    }

    stage("Init") {

      environment {
        NODE_ENV="developemnt"
      }

      steps {
        sh "npm i"
        sh "npm test"
      }
    }

  }

}
