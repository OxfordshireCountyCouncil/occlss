const branchName             = require('current-git-branch') // Get current branch name
const replace                = require('replace-in-file')

// Get version number of the git brunch
//const version = branchName().match(/\d/g).toString().replace(/,/g, '.')
const version = branchName();

if(version.match(/\d/g) !== null) {
    replace({
        files: 'views/partials/_footer.njk',
        from: /<p class="v">(.*)<\/p>/g, 
        to: '<p class="v">OCCLSS v'+ version.match(/\d/g).toString().replace(/,/g, '.') + '</p>',
    })
}