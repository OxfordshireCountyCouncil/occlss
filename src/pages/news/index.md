---
title: News pages example
description: [Description]
section: Pages
layout: layout-pane.njk
order: 0
show_page_nav: false
show_item_nav: false
---

{% from "_example.njk" import example %}

## Landing page

{{ example({group: "pages", item: "news", example: "landing", html: true }) }}

## Three column landing page

{{ example({group: "pages", item: "news", example: "landing-3col", html: true }) }}

## Internal page

{{ example({group: "pages", item: "news", example: "internal", html: true }) }}