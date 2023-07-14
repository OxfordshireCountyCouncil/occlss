---
title: Digital service standard
description: [Description]
section: how-to-styleup
layout: layout-pane.njk
order: 0
show_page_nav: true
---

{% from "table/macro.njk" import occlssTable %}

## Why we have a digital service standard

Our digital service is one of the main ways in which we communicate with Oxfordshire citizens. It’s important our communications are clear, approachable and above all, consistent.

We made a huge investment in user research to discover what our users’ need. 
Based on this research we have built the Oxfordshire County Council web design patterns that will improve the user experience across all of our digital platforms.

With consistency being key to our message, we require third-party platforms to use the same common design patterns.

## Responsive design

The majority of people using the Oxfordshire County Council website are doing so on a smartphone or tablet so it’s very important that the experience on these devices is as good as it would be on a desktop or laptop computer.

The goal of responsive design is to build web pages that adapt to the user's device and how they are using it rather than expecting the user to adapt to the website.

This means that the web page should detect the user’s screen size and orientation and change the layout accordingly. Everything should fit the screen without left or right scrolling, all necessary user interface (UI) elements should display and function correctly.

## Supporting technology

Web technology is constantly changing, so a user’s experience of your service will vary according to the technical capabilities of the browser and device they are using.

Services don’t have to look perfect in every browser but users must be able to access and use all the information and features they need, regardless of the browser they use. 

### Browsers

The UI should fully functional in the folowing browsers.

{{ occlssTable({
  'responsive': true,
  'head' : [
    {
      text: 'Operating system'
    },
    {
      text: 'Browser'
    },
    {
      text: 'Support'
    }
  ],
  'rows' : [
    [
      {
        text: 'Windows'
      },
      {
        text: '	Edge (latest versions)'
      },
      {
        text: 'compliant '
      }
    ],[
      {
        text: ''
      },
      {
        text: '	Google Chrome (latest versions)'
      },
      {
        text: 'compliant'
      }
    ],[
      {
        text: ''
      },
      {
        text: 'Mozilla Firefox (latest versions)'
      },
      {
        text: 'compliant'
      }
    ],[
      {
        text: 'macOS'
      },
      {
        text: 'Safari 12 and later'
      },
      {
        text: 'compliant'
      }
    ],[
      {
        text: ''
      },
      {
        text: 'Google Chrome (latest versions)'
      },
      {
        text: 'compliant'
      }
    ],[
      {
        text: ''
      },
      {
        text: 'Mozilla Firefox (latest versions)'
      },
      {
        text: 'compliant'
      }
    ],[
      {
        text: 'iOS'
      },
      {
        text: '	Safari for iOS 12.1 and later'
      },
      {
        text: 'compliant'
      }
    ],[
      {
        text: ''
      },
      {
        text: 'Google Chrome (latest versions)'
      },
      {
        text: 'compliant'
      }
    ],[
      {
        text: 'Android'
      },
      {
        text: 'Google Chrome (latest versions)'
      },
      {
        text: 'compliant'
      }
    ],[
      {
        text: ''
      },
      {
        text: 'Samsung Internet (latest versions)'
      },
      {
        text: 'compliant'
      }
    ]

  ]
}) }}

You will still need to support Internet Explorer 11 if your analytics data shows at least 2% of your users arriving at the service’s start page are using it.


### Accessibility standards 

The UI should meet WCAG 2 level AA standards, and it should work on the following devices and technology.

{{ occlssTable({
  'responsive': true,
  'head' : [
    {
      text: 'Software '
    },
    {
      text: 'Version'
    },
    {
      text: 'Type'
    },
    {
      text: 'Browser'
    }
  ],
  'rows' : [
    [
      {
        text: 'JAWS'
      },
      {
        text: '2019 or later'
      },
      {
        text: 'Desktop screen reader'
      },
      {
        text: 'Chrome or Edge (latest version)'
      }
    ],[
      {
        text: 'NVDA'
      },
      {
        text: 'Latest'
      },
      {
        text: 'Desktop screen reader'
      },
      {
        text: 'Chrome or Edge (latest version)'
      }
    ],[
      {
        text: 'VoiceOver'
      },
      {
        text: 'Latest'
      },
      {
        text: 'Desktop/mobile screen reader'
      },
      {
        text: 'Safari (version 12 or later)'
      }
    ],[
      {
        text: 'TalkBack'
      },
      {
        text: 'Latest'
      },
      {
        text: 'Mobile screen reader'
      },
      {
        text: 'Chrome (latest version)'
      }
    ],[
      {
        text: 'Windows Magnifier or Apple Zoom'
      },
      {
        text: 'Latest'
      },
      {
        text: 'Screen magnifiers'
      },
      {
        text: 'Any'
      }
    ],[
      {
        text: 'Dragon'
      },
      {
        text: '15 or later'
      },
      {
        text: 'Speech recognition'
      },
      {
        text: 'Chrome (latest version)'
      }
    ]

  ]
}) }}

## GDPR standards

The GDPR (General Data Protection Regulations) state that you must tell people if you set cookies, and clearly explain what the cookies do and why. You must get the user’s consent to use cookies. Consent must be actively and clearly given. 

There is an exception for cookies that are essential to provide an online service at the user's request, for example, to remember what’s in their online basket, or to ensure security for online banking. 

The same rules also apply if you use any other type of technology to store or gain access to information on the user's device. 

Cookies that collect sensitive data or any other type of technology to store or gain access to information on the user’s device must be disabled by default until a user Accepts it. This applies to first-party and third-party cookies or any other type of technology to store or gain access to information on the user’s device on the website or application. 