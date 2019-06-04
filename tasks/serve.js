const browsersync = require('metalsmith-browser-sync') // setup synchronised browser testing
const metalsmith = require('../lib/metalsmith') // configured static site generator

const paths = require('../config/paths.json') // specify paths to main working directories


const browsersyncCnf = {
  ghostMode: false, // Ghost mode tries to check the same input across examples.
  open: false, // When making changes to the server, we don't want multiple windows opening.
  server: paths.public, // server directory
  files: [
    paths.source + '**/*',
    paths.views + '**/*',
    paths.occlss + '**/*',
  ] // files to watch
};

// setup synchronised browser testing
metalsmith.use(browsersync(browsersyncCnf))

// build to destination directory
metalsmith.build(function (err, files) {
  if (err) { throw err }
})