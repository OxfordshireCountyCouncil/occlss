---
title: Date input
description: [Description]
section: Components
layout: layout-pane.njk
theme: Forms
order: 0
show_page_nav: false
---

{% from "_example.njk" import example %}

## Date input

Help users to enter or select a date.

{{ example({group: "patterns", item: "date-input", example: "default", html: true }) }}

### When to use this pattern 

This is the pattern used for asking for a memorable date. For example, a person's date of birth. 

### Helping users to pick a date

Users might need to pick a date from a selection, for example, to book an appointment.

To do this, you can present dates in a calendar format using a calendar control. Users are typically shown one month’s worth of dates at a time, and can skip through months and years.

Only use a calendar control if users need to:

- pick a date in the near future or recent past
- know the day of the week, or the week of the month, as well as the date
- be able to see dates in relation to other dates

Never make a calendar control that depends on JavaScript as the only input option. Allow users to enter the date into a text input as well as use the control.

## Changelog

#### 1.0.0

- Component Added