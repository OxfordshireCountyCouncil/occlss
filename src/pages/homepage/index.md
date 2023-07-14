---
title: Homepage examples
description: [Description]
section: Pages
layout: layout-pane.njk
theme: Landing page
order: 0
show_page_nav: false
---

{% from "_example.njk" import example %}

The three areas of the Oxfordshire County Council website each have their own homepage with the Residents area acting as the main homepage.

## Homepage (Residents)

{{ example({group: "pages", item: "homepage", example: "residents", html: true }) }}

## Business 

{{ example({group: "pages", item: "homepage", example: "business", html: true }) }}

## Council

{{ example({group: "pages", item: "homepage", example: "council", html: true }) }}