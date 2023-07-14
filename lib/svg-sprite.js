const path = require('node:path');
const fs = require('node:fs');
const glob = require('glob');
const SVGSpriter = require('svg-sprite');

const cwd = path.join(__dirname, '../svg-source/svgs');
const files = glob.sync('**/*.svg', { cwd });

const spriter = new SVGSpriter({
  dest: "svg-source/tmp",
  //log: 'debug',
  log: 'false',
  svg: {
    xmlDeclaration: false, // strip out the XML attribute
    doctypeDeclaration: false, // don't include the !DOCTYPE declaration
    namespaceClassnames: false
  },
  shape: {
    spacing: {
      padding: 0,
      box: 'content'
    },
    dimension: { // Set maximum dimensions
      width: 32,
      height: 32
    },
  }
});

/**
 * Add a bunch of SVG files
 *
 * @param {SVGSpriter} spriter          Spriter instance
 * @param {Array} files                 SVG files
 * @returns {SVGSpriter}                Spriter instance
 */
function addFixtureFiles(spriter, files) {
  for (const file of files) {
    const filePath = path.join(cwd, file);
    spriter.add(path.resolve(filePath), file, fs.readFileSync(filePath, 'utf8'));
  }

  return spriter;
}

addFixtureFiles(spriter, files).compile({
  symbol: {
    sprite: 'occlss-sprite.svg',
    layout: 'vertical',
    dimensions: true,
    bust: false,
    render: {
      njk: {
        dest: "template",
        template: "./svg-source/tpl/custom.html"
      }
    }
  }
}, (error, result) => {
  for (const type of Object.values(result.symbol)) {

    fs.mkdirSync(path.dirname(type.path), { recursive: true });
    fs.writeFileSync(type.path, type.contents);
    fs.readFile("svg-source/tmp/symbol/template.njk", 'utf8', function (err,data) {
      if (err) {
        return console.log(err);
      }
      const result = data.replace(/--icon-class--/g, '{{ params.class }}').replace(/--icon-container-class--/g, '{{ params.containerClass }}').replace(/--icon-source-class--/g, '{{ params.sourceClass }}');

      fs.writeFile("views/components/icon/template.njk", result, 'utf8', function (err) {
         if (err) return console.log(err);
         const svgspritefilepath = path.join(__dirname, "../svg-source/tmp/symbol/occlss-sprite.svg")
         if(fs.existsSync(svgspritefilepath)) {
            fs.renameSync(svgspritefilepath, 'src/assets/images/occlss/occlss-sprite.svg')
         }
      });
    });

  }
});