const fs = require('node:fs');
const path = require('node:path');
const glob = require('glob');
const sass = require('sass');
const CleanCSS = require('clean-css');

/**
 * Generate files for NPM package
 */
function generateNodeModule() {
  console.log('Generating NPM module files...');
  
  const sourceDir = './src';
  const destDir = './nodejs.module-files';
  
  // Clean destination directory
  if (fs.existsSync(destDir)) {
    fs.rmSync(destDir, { force: true, recursive: true });
  }
  
  // Create destination directory
  fs.mkdirSync(destDir, { recursive: true });
  
  try {
    // Copy Sass files with replacements
    const sassFiles = glob.sync(`${sourceDir}/occlss-scss/**/*`);
    sassFiles.forEach(file => {
      if (fs.statSync(file).isFile()) {
        let content = fs.readFileSync(file, 'utf8');
        
        // Apply replacements
        content = content.replace(/"\.\.\/\.\.\/views\/components\//g, '"components/');
        content = content.replace(/\.\.\/\.\.\/images/g, '../images');
        
        const relativePath = path.relative(sourceDir, file);
        const destPath = path.join(destDir, relativePath);
        
        // Ensure directory exists
        fs.mkdirSync(path.dirname(destPath), { recursive: true });
        fs.writeFileSync(destPath, content);
        
        // Also copy the main occlss.scss to the scss directory for compilation
        if (file.endsWith('occlss.scss')) {
          const scssDestPath = path.join(destDir, 'scss', 'occlss.scss');
          fs.mkdirSync(path.dirname(scssDestPath), { recursive: true });
          fs.writeFileSync(scssDestPath, content);
        }
        
        // Copy all SASS dependencies to scss directory for compilation
        if (file.includes('/occlss-scss/')) {
          const relativePath = path.relative(path.join(sourceDir, 'occlss-scss'), file);
          const scssDestPath = path.join(destDir, 'scss', relativePath);
          
          // Ensure directory exists
          fs.mkdirSync(path.dirname(scssDestPath), { recursive: true });
          fs.writeFileSync(scssDestPath, content);
        }
      }
    });
    
    // Copy Component files
    const componentFiles = glob.sync('./views/components/**/*');
    componentFiles.forEach(file => {
      if (fs.statSync(file).isFile()) {
        const relativePath = path.relative('./views', file);
        const destPath = path.join(destDir, 'scss', relativePath);
        
        // Ensure directory exists
        fs.mkdirSync(path.dirname(destPath), { recursive: true });
        fs.copyFileSync(file, destPath);
      }
    });
    
    // Copy JavaScript files (excluding browser.detect.js)
    const jsFiles = glob.sync(`${sourceDir}/assets/js/occlss/**/*`);
    jsFiles.forEach(file => {
      if (fs.statSync(file).isFile() && !file.includes('browser.detect.js')) {
        const relativePath = path.relative(sourceDir, file);
        const destPath = path.join(destDir, relativePath);
        
        // Ensure directory exists
        fs.mkdirSync(path.dirname(destPath), { recursive: true });
        fs.copyFileSync(file, destPath);
      }
    });
    
    // Copy Images files (excluding demo folder)
    const imageFiles = glob.sync(`${sourceDir}/assets/images/occlss/**/*`);
    imageFiles.forEach(file => {
      if (fs.statSync(file).isFile() && !file.includes('/demo/')) {
        const relativePath = path.relative(sourceDir, file);
        const destPath = path.join(destDir, relativePath);
        
        // Ensure directory exists
        fs.mkdirSync(path.dirname(destPath), { recursive: true });
        fs.copyFileSync(file, destPath);
      }
    });
    
    console.log('✅ NPM module files generated successfully');
    
  } catch (error) {
    console.error('❌ Error generating NPM module files:', error);
    throw error;
  }
}

/**
 * Compile node module SASS
 */
function compileNodeModuleSass() {
  console.log('Compiling node module SASS...');
  
  try {
    const sassFile = './nodejs.module-files/scss/occlss.scss';
    const outputDir = './nodejs.module-files/css';
    
    if (!fs.existsSync(sassFile)) {
      throw new Error(`SASS file not found: ${sassFile}`);
    }
    
    // Ensure output directory exists
    fs.mkdirSync(outputDir, { recursive: true });
    
    // Compile SASS
    const result = sass.compile(sassFile, {
      loadPaths: ['node_modules', 'nodejs.module-files/scss'],
      sourceMap: true,
      style: 'expanded'
    });
    
    // Write CSS file
    const cssFile = path.join(outputDir, 'occlss.css');
    fs.writeFileSync(cssFile, result.css);
    
    // Write source map
    if (result.sourceMap) {
      const mapFile = path.join(outputDir, 'occlss.css.map');
      fs.writeFileSync(mapFile, JSON.stringify(result.sourceMap, null, 2));
    }
    
    console.log('✅ Node module SASS compiled successfully');
    
  } catch (error) {
    console.error('❌ Error compiling node module SASS:', error);
    throw error;
  }
}

/**
 * Minify CSS files
 */
function minifyCSS() {
  console.log('Minifying CSS files...');
  
  try {
    const cssDir = './nodejs.module-files/css';
    const cssFiles = glob.sync(`${cssDir}/*.css`);
    
    if (cssFiles.length === 0) {
      console.log('No CSS files found to minify');
      return;
    }
    
    const cleanCSS = new CleanCSS({
      compatibility: 'ie8',
      level: 2
    });
    
    cssFiles.forEach(cssFile => {
      if (cssFile.endsWith('.min.css')) return; // Skip already minified files
      
      const content = fs.readFileSync(cssFile, 'utf8');
      const result = cleanCSS.minify(content);
      
      if (result.errors.length > 0) {
        console.warn('⚠️ CSS minification warnings:', result.errors);
      }
      
      const minFile = cssFile.replace('.css', '.min.css');
      fs.writeFileSync(minFile, result.styles);
      
      console.log(`✅ Minified: ${path.basename(cssFile)} → ${path.basename(minFile)}`);
    });
    
    console.log('✅ CSS minification completed');
    
  } catch (error) {
    console.error('❌ Error minifying CSS:', error);
    throw error;
  }
}

// Export functions for use in other scripts
module.exports = {
  generateNodeModule,
  compileNodeModuleSass,
  minifyCSS
};

// Run if called directly
if (require.main === module) {
  const command = process.argv[2];
  
  switch (command) {
    case 'gen':
      generateNodeModule();
      break;
    case 'sass':
      compileNodeModuleSass();
      break;
    case 'mincss':
      minifyCSS();
      break;
    case 'full':
      generateNodeModule();
      compileNodeModuleSass();
      minifyCSS();
      break;
    default:
      console.log('Usage: node generate-node-module.js [gen|sass|mincss|full]');
      console.log('  gen     - Generate NPM module files');
      console.log('  sass    - Compile SASS to CSS');
      console.log('  mincss  - Minify CSS files');
      console.log('  full    - Run all steps');
  }
}
