---
title: Info box
description: [Description]
section: Components
layout: layout-pane.njk
theme: Content elements
order: 0
show_page_nav: false
---

{% from "_example.njk" import example %}

The info box component can be used to draw attention to a small piece of supplementary information without breaking the flow of the main content.

{{ example({group: "components", item: "info-box", example: "default", html: true }) }}

## When to use this component 

Use this component for supplementary information that is related to the content surrounding it. For example, instead of using 'please note' for a condition that affects some or all users.

## Changelog

### 1.0.0

- Component added