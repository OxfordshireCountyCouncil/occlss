const metalsmith = require('../lib/metalsmith') // configured static site generator
const svgsprite = require('../lib/svg-sprite') // create svg sprite
svgsprite

// build to destination directory
metalsmith.build(function (err, files) {
  if (err) { throw err }
})
