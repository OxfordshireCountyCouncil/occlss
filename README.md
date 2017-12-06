# Oxfordshire County Council live style system


The OCCLSS includes the resources to create user interfaces consistent with the Oxfordshire County Council principles, design language, and best practices.

* Based on Pattern Lab 2 Gulp and Mustache version
* Tailored for building Oxfordshire County Council apps: Using the Oxfordshire County Council mark-up and CSS framework results in UIs that reflect the Oxfordshire County Council look and feel.



## Quick start

1. Clone the project with `git clone https://github.com/OxfordshireCountyCouncil/occlss.git`
2. Run `npm install` or `yarn` in the root OCCLSS folder.
3. To watch for changes, re-generate the front-end, and server it via a BrowserSync server,  type gulp patternlab:serve or yarn gulp patternlab:serve  to launch the development environment.
4. BrowserSync should open http://localhost:3000 in your browser.


## Helpful Commands

These are some helpful commands you can use on the command line for working with Pattern Lab.


### List all of the available commands

To list all available commands type:

**npm:**

```
$ gulp patternlab:help
```

**yarn:**

```
$ yarn gulp patternlab:help
```


### Generate Pattern Lab

To generate the front-end for Pattern Lab type:

**npm:**

```
$ gulp patternlab:build
```

**yarn:**

```
$ yarn patternlab:build
```
    

### Generate CSS framework

To generate the SCSS framework out of the Pattern Lab

**npm:**

```
$ gulp genCSSframework 
```

**yarn:**

```
$ yarn genCSSframework
```


## SCSS framework

You don’t need to copy all the Pattern Lab to your project, you can Install via npm our SCSS files, images, and Javascript and grab the HTML mark-up from https://occlss.herokuapp.com/

### Installation

You can use OCCLSS CSS framework in your project by installing it using a package manager (recommended):

**npm:**

```
$ npm install occlss --save-dev
```

**yarn:**

```
$ yarn add occlss
```

### Getting Started

Once you have got OCCLSS CSS framework into your project using the method outlined above, there are a handful of things we need to do before we’re ready to go.

Firstly, we need to synchronise OCCLSS images and JavaScript files with your app, if you using gulp in your project you can grab the code below


```js
gulp.task('copy-occlss-parts', function () {
  // Images
    gulp.src('./node_modules/occlss/images/*.*')
    .pipe(gulp.dest('./images/occlss/'));

  // Javascript
  gulp.src('./node_modules/occlss/js/*.*')
  .pipe(gulp.dest('./js/occlss'));
  console.log("OCCLSS files copied!");
});
```

Secondly you will need to import SCSS in to your project.

### CSS directory structure

OCCLSS CSS follows ITCSS architecture and help to separates CSS into seven different initial types of rule:

* `/settings`: Global variables, site-wide settings, config switches, etc.
* `/tools`: Site-wide mixins and functions.
* `/generic`: Low-specificity, far-reaching rulesets (e.g. resets).
* `/base`: Unclassed HTML elements (e.g. `a {}`, `blockquote {}`, `address {}`).
* `/objects`: Objects, abstractions, and design patterns (e.g. `.occlss-wrapper {}`).
* `/bem`: Discrete, complete chunks of UI (e.g. `.occlss-buttons {}`). This is the one layer that inuitcss doesn’t provide code for, as this is completely your terrain.
* `/utilities`: High-specificity, very explicit selectors. Overrides and helper classes (e.g. `.occlss-u-hidden {}`).


Following this structure allows you to intersperse OCCLSS code with your own, so that your main.scss file might look something like this:

```scss
// SETTINGS

// Images path
$occlss-global-image-path:  '../../images/occlss';

@import " node_modules/occlss/settings/global-variables";


// TOOLS
@import "node_modules/occlss/tools/breakpoint-sass/stylesheets/breakpoint";
@import "node_modules/occlss/tools/functions";
@import "node_modules/occlss/tools/hacks";
@import "node_modules/occlss/tools/mixins_rem";
@import "node_modules/occlss/tools/mixin_link-colors";
@import "node_modules/occlss/tools/placeholder-classes";
@import "node_modules/occlss/tools/mixin_box_sizing";
@import "node_modules/occlss/tools/mixin_box-shadow";
@import "node_modules/occlss/tools/mixin_button-variant";
@import "node_modules/occlss/tools/mixin_hover";
@import "node_modules/occlss/tools/mixin_opacity";
@import "node_modules/occlss/tools/mixin_border-radius";
@import "node_modules/occlss/tools/mixin_tab-focus";
@import "node_modules/occlss/tools/mixin_user-select";
@import "node_modules/occlss/tools/mixins_layout";
@import "node_modules/occlss/tools/mixin_transition";
@import "node_modules/occlss/tools/mixin_button_sizes";
@import "node_modules/occlss/tools/reflex/reflex-index";


// GENERIC
@import "node_modules/occlss/generic/box-sizing";
@import "node_modules/occlss/generic/normalize";
@import "node_modules/occlss/generic/shared";
@import "node_modules/occlss/generic/reset";


// BASE
@import "node_modules/occlss/base/page";
@import "node_modules/occlss/base/headings";
@import "node_modules/occlss/base/links";


// OBJECTS
@import "node_modules/occlss/objects/wrapper";
@import "node_modules/occlss/objects/occlss-button";


/// BEM (components)
@import "node_modules/occlss/bem/occlss-icon";
@import "node_modules/occlss/bem/occlss-button";
@import "node_modules/occlss/bem/occlss-page-head";
@import "node_modules/occlss/bem/occlss-page-footer";
@import "node_modules/occlss/bem/occlss-site-nav";
@import "node_modules/occlss/bem/occlss-head-logo";
@import "node_modules/occlss/bem/occlss-form";
@import "node_modules/occlss/bem/occlss-breadcrumb";
@import "node_modules/occlss/bem/occlss-category-nav";
@import "node_modules/occlss/bem/occlss-short-search-form";
@import "node_modules/occlss/bem/occlss-alert";
@import "node_modules/occlss/bem/occlss-summary-list";
@import "node_modules/occlss/bem/occlss-popular-content-pane";
@import "node_modules/occlss/bem/occlss-top-tasks-pane";
@import "node_modules/occlss/bem/occlss-featured-panel";
@import "node_modules/occlss/bem/occlss-tab-widget";
@import "node_modules/occlss/bem/occlss-card.scss";
@import "node_modules/occlss/bem/occlss-sign-up-form";
@import "node_modules/occlss/bem/occlss-page-guide";
@import "node_modules/occlss/bem/occlss-sidebar-item-section";
@import "node_modules/occlss/bem/occlss-version-bar";
@import "node_modules/occlss/bem/occlss-pagination";
@import "node_modules/occlss/bem/occlss-skip-to-content";
@import "node_modules/occlss/bem/occlss-a-to-z";
@import "node_modules/occlss/bem/occlss-hero-pane";
@import "node_modules/occlss/bem/occlss-search-place-form";

// UTILITIES
// scope
@import "node_modules/occlss/scopes/cms-content-footer";

// trumps
@import "node_modules/occlss/trumps/globals";
@import "node_modules/occlss/trumps/utilities";
@import "node_modules/occlss/trumps/owl-carousel";
@import "node_modules/occlss/trumps/owl-carousel-theme";
@import "node_modules/occlss/trumps/shame";
```

Or you can add in your main.scss just the following

```scss
// Images path
$occlss-global-image-path:  '../../images/occlss';
@import "node_modules/occlss/scss/style.scss";
```

But this is not recommended and you will have less control over the elements you will use in your app.

### OCCLSS fonts

To use our font face you will need to implement the following line in the head of you project.

```html
<link href="https://fonts.googleapis.com/css?family=Fira+Sans:300,400,500,600,700,900|Open+Sans:300,400,600,700" rel="stylesheet">
```
