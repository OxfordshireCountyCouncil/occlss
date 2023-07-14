import BackToTop from './components/back-to-top.mjs'
import { nodeListForEach } from './components/helpers.mjs'
import Example from './components/example.mjs'
import Copy from './components/copy.mjs'
import Navigation from './components/navigation.mjs'
import Search from './components/search.mjs'
import AppTabs from './components/tabs.mjs'


// Initialise example frames
var $examples = document.querySelectorAll('[data-module="doc-example-frame"]')
nodeListForEach($examples, function ($example) {
  new Example($example).init()
})

// Add copy to clipboard to code blocks inside tab containers
var $codeBlocks = document.querySelectorAll('[data-module="app-copy"] pre')
nodeListForEach($codeBlocks, function ($codeBlock) {
  new Copy($codeBlock).init()
})

// Initialise mobile navigation
new Navigation().init()

// Initialise search
var $searchContainer = document.querySelector('[data-module="app-search"]')
new Search($searchContainer).init()

// Initialise back to top
var $backToTop = document.querySelector('[data-module="doc-back-to-top"]')
new BackToTop($backToTop).init()

// Initialise tabs
var $tabs = document.querySelectorAll('[data-module="doc-tabs"]')
nodeListForEach($tabs, function ($tabs) {
  new AppTabs($tabs).init()
})