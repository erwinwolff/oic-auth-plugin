'use strict'

var gentlyCopy = require('gently-copy')

var filesToCopy = './node_modules/graceful-fs'

var userPath = './node_modules/vinyl-fs/node_modules'

gentlyCopy(filesToCopy, userPath, {overwrite: true})