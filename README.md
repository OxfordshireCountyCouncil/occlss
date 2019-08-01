# Oxfordshire County Council live style system

The OCCLSS includes the resources to create user interfaces consistent with the Oxfordshire County Council principles, design language, and best practices.


## Quick start

2. To run the OCCLSS you will require minimum npm v 10.15.1
1. Clone the project with `git clone https://github.com/OxfordshireCountyCouncil/occlss.git`
3. Run `npm install` in the root OCCLSS folder.
4. To watch for changes, re-generate the front-end, and server it via a BrowserSync server, type npm start to launch the development environment.

## Helpful Commands

These are some helpful commands you can use on the command line for working with Pattern Lab.


### List all of the available commands

To list all available gulp commands type:

```
$ gulp
```

### To generate the patterns

To generate the front-end for OCCLSS:

```
$ npm build
```

## SCSS framework

You don’t need to copy all the Pattern Lab to your project, you can Install via npm our SCSS files, images, and Javascript and grab the HTML mark-up from http://occlss.oxfordshire.gov.uk/


### Installation

You can use OCCLSS CSS framework in your project by installing it using a package manager (recommended):

```
$ npm install occlss --save-dev
```

### Getting Started

Once you have got NPM OCCLSS into your project using the method outlined above, there are a handful of things we need to do before we’re ready to go.

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
* `/components`: Discrete, complete chunks of UI (e.g. `.occlss-buttons {}`). This is the one layer that inuitcss doesn’t provide code for, as this is completely your terrain.
* `/trumps`: High-specificity, very explicit selectors. Overrides and helper classes (e.g. `.occlss-u-hidden {}`).


Following this structure allows you to intersperse OCCLSS code with your own, so that your main.scss file might look something like this:

```scss
// SETTINGS
// Images path
$occlss-global-image-path:  '../../images/occlss';

@import " node_modules/occlss/settings/global-variables";

// TOOLS
@import "node_modules/occlss/scss/tools/breakpoint-sass/breakpoint";
@import "node_modules/occlss/scss/tools/functions";
@import "node_modules/occlss/scss/tools/mixins_rem";
@import "node_modules/occlss/scss/tools/mixin_link-colors";
@import "node_modules/occlss/scss/tools/placeholder-classes";
@import "node_modules/occlss/scss/tools/mixin_box_sizing";
@import "node_modules/occlss/scss/tools/mixin_box-shadow";
@import "node_modules/occlss/scss/tools/mixin_button-variant";
@import "node_modules/occlss/scss/tools/mixin_hover";
@import "node_modules/occlss/scss/tools/mixin_opacity";
@import "node_modules/occlss/scss/tools/mixin_border-radius";
@import "node_modules/occlss/scss/tools/mixin_tab-focus";
@import "node_modules/occlss/scss/tools/mixin_user-select";
@import "node_modules/occlss/scss/tools/mixins_layout";
@import "node_modules/occlss/scss/tools/mixin_transition";
@import "node_modules/occlss/scss/tools/mixin_button_sizes";
@import "node_modules/occlss/scss/tools/reflex/reflex-index";

// GENERIC
@import "node_modules/occlss/scss/generic/box-sizing";
@import "node_modules/occlss/scss/generic/normalize";
@import "node_modules/occlss/scss/generic/shared";
@import "node_modules/occlss/scss/generic/reset";

// BASE
@import "node_modules/occlss/scss/base/page";
@import "node_modules/occlss/scss/base/headings";
@import "node_modules/occlss/scss/base/links";

// OBJECTS
@import "node_modules/occlss/scss/objects/wrapper";
@import "node_modules/occlss/scss/objects/occlss-button";

// COMPONENTS
@import "node_modules/occlss/scss/components/prowddmmo/occlss-fp";
@import "node_modules/occlss/scss/components/prowddmmo/occlss-facets";
@import "node_modules/occlss/scss/components/prowddmmo/occlss-co";
@import "node_modules/occlss/scss/components/prowddmmo/occlss-info-card";
@import "node_modules/occlss/scss/components/form/occlss-form";
@import "node_modules/occlss/scss/components/splitter/occlss-splitter";
@import "node_modules/occlss/scss/components/loading-bar/occlss-loading-bar";
@import "node_modules/occlss/scss/components/pager/occlss-pager";
@import "node_modules/occlss/scss/components/icon/occlss-icon";
@import "node_modules/occlss/scss/components/button/occlss-button";
@import "node_modules/occlss/scss/components/page-head/occlss-page-head";
@import "node_modules/occlss/scss/components/page-footer/occlss-page-footer";
@import "node_modules/occlss/scss/components/site-nav/occlss-site-nav";
@import "node_modules/occlss/scss/components/site-nav/occlss-head-logo";
@import "node_modules/occlss/scss/components/form-controls/occlss-form-cntrls";
@import "node_modules/occlss/scss/components/breadcrumb/occlss-breadcrumb";
@import "node_modules/occlss/scss/components/category-navbar/occlss-category-nav";
@import "node_modules/occlss/scss/components/alert/occlss-alert";
@import "node_modules/occlss/scss/components/summary-list/occlss-summary-list";
@import "node_modules/occlss/scss/components/popular-content-pane/occlss-popular-content-pane";
@import "node_modules/occlss/scss/components/top-tasks-pane/occlss-top-tasks-pane";
@import "node_modules/occlss/scss/components/promoted-content-panel/occlss-promoted-content-panel";
@import "node_modules/occlss/scss/components/cards/occlss-card.scss";
@import "node_modules/occlss/scss/components/sidebar-item-section/occlss-sidebar-item-section";
@import "node_modules/occlss/scss/components/version-bar/occlss-version-bar";
@import "node_modules/occlss/scss/components/pagination/occlss-pagination";
@import "node_modules/occlss/scss/components/skip-to-content/occlss-skip-to-content";
@import "node_modules/occlss/scss/components/atoz/occlss-a-to-z";
@import "node_modules/occlss/scss/components/hero-pane/occlss-hero-pane";
@import "node_modules/occlss/scss/components/find-my-nearest/occlss-find-my-nearest";
@import "node_modules/occlss/scss/components/short-summary/occlss-short-summary";
@import "node_modules/occlss/scss/components/accordion/occlss-accordion";
@import "node_modules/occlss/scss/components/summary-card/occlss-summary-card";
@import "node_modules/occlss/scss/components/table/occlss-table";
@import "node_modules/occlss/scss/components/social-media-link/occlss-social-media-link";
@import "node_modules/occlss/scss/components/widget-container/occlss-widget-container";
@import "node_modules/occlss/scss/components/alert-box/occlss-alert-box";
@import "node_modules/occlss/scss/components/info-box/occlss-info-box";
@import "node_modules/occlss/scss/components/box-out/occlss-box-out";
@import "node_modules/occlss/scss/components/download-link/occlss-download-link";
@import "node_modules/occlss/scss/components/jump-links/occlss-jump-links";
@import "node_modules/occlss/scss/components/calendar-date/occlss-calendar-date";
@import "node_modules/occlss/scss/components/content-navigation/occlss-content-navigation";
@import "node_modules/occlss/scss/components/footer-feedback-form/occlss-footer-feedback";

// UTILITIES
// scope
@import "node_modules/occlss/scss/scopes/cms-content-footer";

// trumps
@import "node_modules/occlss/scss/trumps/globals";
@import "node_modules/occlss/scss/trumps/utilities";
@import "node_modules/occlss/scss/trumps/owl-carousel";
@import "node_modules/occlss/scss/trumps/owl-carousel-theme";
@import "node_modules/occlss/scss/trumps/objectivity-chatbot";
@import "node_modules/occlss/scss/trumps/shame";
```

Or you can add in your main.scss just the following

```scss
// Images path
$occlss-global-image-path:  '../../images/occlss';
@import "node_modules/occlss/scss/occlss.scss";
```

But this is not recommended and you will have less control over the elements you will use in your app.

### OCCLSS fonts

To use our font face you will need to implement the following line in the head of you project.

```html
<link href="https://fonts.googleapis.com/css?family=Fira+Sans:300,400,500,600,700,900|Open+Sans:300,400,600,700" rel="stylesheet">
```

Or 

```html
<style>
@import url('https://fonts.googleapis.com/css?family=Fira+Sans:300,400,500,600,700,900|Open+Sans:300,400,600,700&display=swap');
</style>
```