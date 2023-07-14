---
title: How to apply the Oxfordshire County Council style
description: [Description]
section: how-to-styleup
layout: layout-pane.njk
order: 0
show_page_nav: true
---

{% from "_doc-el.njk" import UIel %}
{% from "_example.njk" import example %}

## Downloads

{{
    UIel ({
        item: "intro-text", 
        content: "To apply the style to your project we provide multiple options for downloading the Oxfordshire County Council style guide that includes, Javascript, SVG icons and SASS files."
    })
}}

{{
    UIel ({
        item: "alert-box", 
        content: "Do not apply the styles directly from our main website, use the resources below or build your own."
    })
}}

#### GitHub

<a href="https://github.com/OxfordshireCountyCouncil/occlss" target="_blank">Oxfordshire County Council live style system from GitHub</a>.

#### NPM

You can download our SASS, SVG icons and Javascript as an NPM module and connect it to your project. This will help you to keep your website or app up-to-date with our latest style. 

<a href="https://www.npmjs.com/package/occlss" target="_blank">Oxfordshire County Council live style system on NPM</a>.

## Other resources
Below you’ll find everything you need to apply the Oxfordshire County Council styles to your own project.

### Typography

<a href="/styles/typography/">View our typography styles</a>.

### Buttons

<a href="/components/buttons/">View our buttons style</a>.

### Page head

<a href="/components/page-head/">View our page head style</a>.

### Page footer

The footer contains contact information and links to statutory information only. <a href="/components/page-footer/">View our page footer style</a>.

### Colours

All of our brand colours meet AA accessibility standards. <a href="/styles/colour/">View our colour palette</a>.

### Components and patterns 

<a href="/components/">View our design components</a> and <a href="/patterns/">patterns</a>.