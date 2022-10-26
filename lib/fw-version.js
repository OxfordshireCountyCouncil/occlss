const branchName             = require('current-git-branch') // Get current branch name
const replace                = require('replace-in-file')

// Get version number of the git brunch
if(branchName().match(/\d/g) != null) {
    const version = branchName().match(/\d/g).toString().replace(/,/g, '.')
    replace({
        files: 'views/partials/_footer.njk',
        from: /<p class="v">(.*)<\/p>/g, 
        to: '<p class="v">OCCLSS v'+ version + '</p>',
    })
}
