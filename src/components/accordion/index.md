---
title: Accordion
description: [Description]
section: Components
layout: layout-pane.njk
theme: Content elements
order: 0
show_page_nav: false
---

{% from "_example.njk" import example %}

The accordion component lets users show and hide sections of related content on a page.

{{ example({group: "components", item: "accordion", example: "default", html: true, open: false, size: "xl" }) }}


## When to use this component

Accordions can be used to show and hide information that might be part of larger or more complex areas of content. Accordions have an H3 title so must be preceded by an H2 title.

## When not to use

Accordions hide content from users, and not everyone will notice or understand them. Don't use them for content that is essential to all users. Accordions work best when they contain simple content and links, never put a table in an accordion.

Before using an accordion:

- consider reducing or simplifying the content
- splitting the content up across several pages
- separating the content with headings on a single page use an index page or jump-links page that allows users to navigate to the content they want quickly.

Avoid using accordions for frequently asked questions, use a jump-links page instead.

## Changelog

### 2.2.0

- Accordions markup changes and hover state added

### 1.0.0

- Component added