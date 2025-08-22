const metalsmith = require('../lib/metalsmith') // configured static site generator
const svgsprite = require('../lib/svg-sprite') // create svg sprite
const { generateNodeModule, compileNodeModuleSass, minifyCSS } = require('../lib/generate-node-module')

// build to destination directory
metalsmith.build(function (err, files) {
  if (err) { throw err }
  
  console.log('✅ Metalsmith build completed successfully')
  
  // Generate NPM module files if requested
  if (process.argv.includes('--npm-module')) {
    try {
      generateNodeModule();
      compileNodeModuleSass();
      minifyCSS();
      console.log('✅ NPM module generation completed');
    } catch (error) {
      console.error('❌ Error generating NPM module:', error);
    }
  }
})
