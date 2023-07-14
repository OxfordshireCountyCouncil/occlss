const path = require('node:path');
const fs = require('node:fs');
const glob = require('glob');

const replace = require('gulp-replace');
const { src, dest } = require('gulp');

/*
const source = path.join(__dirname, "../gulpfile.js")
const dest = path.join(__dirname, "../nodejs.module-files/gulpfile.js")

// File destination.txt will be created or overwritten by default.
fs.copyFile(source, dest, (err) => {
  if (err) throw err;
  console.log('copied');
});
*/




/**
 * Copy the src folder to the dest folder
 * @param {string} src
 * @param {string} dest
 * @param {function} callback
 */
const copyDir = (src, dest, callback) => {
  const copy = (copySrc, copyDest) => {
    fs.readdir(copySrc, (err, list) => {
      if (err) {
        callback(err);
        return;
      }
      list.forEach((item) => {
        const ss = path.resolve(copySrc, item);
        fs.stat(ss, (err, stat) => {
          if (err) {
            callback(err);
          } else {
            const curSrc = path.resolve(copySrc, item);
            const curDest = path.resolve(copyDest, item);

            if (stat.isFile()) {
              // file, copy directly
              fs.createReadStream(curSrc).pipe(fs.createWriteStream(curDest));
            } else if (stat.isDirectory()) {
              // directory, recursively
              fs.mkdirSync(curDest, { recursive: true });
              copy(curSrc, curDest);
            }
          }
        });
      });
    });
  };

  fs.access(dest, (err) => {
    if (err) {
      // If the target directory does not exist, create it
      fs.mkdirSync(dest, { recursive: true });
    }
    copy(src, dest);
  });
};
/*
// Copy images
copyDir('./src/assets/images/occlss/', './nodejs.module-files/images');

// Copy JavascriptFiles
copyDir('./src/assets/js/occlss/', './nodejs.module-files/js');


// Copy Components
copyDir('./views/components/', './nodejs.module-files/scss/components');


// Copy Components
copyDir('./src/occlss-scss/', './nodejs.module-files/scss/');


fs.unlink('./nodejs.module-files/scss/occlss.scss', function(err) { if (err) { return console.log(err) } });
*/
/*fs.readFile("./src/occlss-scss/occlss.scss", 'utf8', function (err,data) {
  if (err) {
    return console.log(err)
  }
  const result = data.replaceAll('../../views/components', 'components')
  console.log(result);
  fs.writeFile("./nodejs.module-files/scss/occlss.scss", result, 'utf8', function (err) {
     if (err) return console.log(err)
  });
});*/




/*

// Generate files for NPM package
gulp.task('genNodeModule', function (done) {
  // get Sass files
  gulp.src(['./src/occlss-scss/**'])
  .pipe(replace('"../../views/components/', '"components/'))
  .pipe(replace('../../images','../images'))
  .pipe(gulp.dest('./nodejs.module-files/scss'));
  // get Component files
  gulp.src(['./views/components/**']).pipe(gulp.dest('./nodejs.module-files/scss/components'));
  // get JavaScript files
  gulp.src(['./src/assets/js/occlss/**','!./src/assets/js/occlss/browser.detect.js']).pipe(gulp.dest('./nodejs.module-files/js'));
  // get Images files
  gulp.src(['./src/assets/images/occlss/**', '!./src/assets/images/occlss/demo', '!./src/assets/images/occlss/demo/**']).pipe(gulp.dest('./nodejs.module-files/images'));
  done();
});



*/



function replaceTemplate() {
  return src(['./src/occlss-scss/**'])
    .pipe(replace('"../../views/components/', '"components/'))
    .pipe(dest('./nodejs.module-files/scss'));
};

exports.replaceTemplate = replaceTemplate;