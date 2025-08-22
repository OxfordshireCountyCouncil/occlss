# OCClss Breakpoint Mixin System

## Overview

The `occlss-breakpoint` system provides a **single universal function** that handles **ALL possible CSS media query variants** in your SCSS code. It's the **one and only** mixin you need for all media query scenarios.

## Main Mixin

### `occlss-breakpoint($property, $value)`

The **one and only** mixin you need for all media query types.

**Parameters:**
- `$property`: The CSS media query property or special keyword
- `$value`: The value(s) - can be direct values, breakpoint map references, or range specifications

## Usage Patterns

### 1. Breakpoint Map Values

```scss
// Using predefined breakpoints from your breakpoints map
@include occlss-breakpoint('max-width', ('md', $occlss-layout-breakpoints)) {
    display: block;
    margin-top: rem(15px);
}

@include occlss-breakpoint('min-width', ('lg', $occlss-layout-breakpoints)) {
    display: flex;
    flex-direction: row;
}
```

### 2. Direct Values

```scss
// Using direct CSS values
@include occlss-breakpoint('max-height', '800px') {
    overflow: hidden;
}

@include occlss-breakpoint('min-width', '1200px') {
    font-size: 1.2em;
}
```

### 3. Range Queries (part of main function!)

```scss
// Range with breakpoint map values
@include occlss-breakpoint('range', ('sm', 'lg', $occlss-layout-breakpoints)) {
    max-width: 960px;
    margin: 0 auto;
}

// Range with direct values
@include occlss-breakpoint('range', ('768px', '1024px')) {
    font-size: 1.1em;
}

// Range with different units
@include occlss-breakpoint('range', ('50em', '75em')) {
    line-height: 1.6;
}
```

### 4. Modern CSS Media Queries

```scss
// Orientation
@include occlss-breakpoint('orientation', 'landscape') {
    flex-direction: row;
}

// Aspect ratio
@include occlss-breakpoint('aspect-ratio', '16/9') {
    padding-top: 56.25%;
}

// Resolution
@include occlss-breakpoint('resolution', '2dppx') {
    background-image: url('image@2x.png');
}

// Color capability
@include occlss-breakpoint('color', '8') {
    filter: grayscale(100%);
}

// Hover capability
@include occlss-breakpoint('hover', 'none') {
    .button {
        min-height: 44px; // Touch-friendly size
    }
}

// Dark mode support
@include occlss-breakpoint('prefers-color-scheme', 'dark') {
    background-color: #1a1a1a;
    color: #ffffff;
}

// Reduced motion support
@include occlss-breakpoint('prefers-reduced-motion', 'reduce') {
    animation: none;
    transition: none;
}

// Feature support
@include occlss-breakpoint('supports', '(display: grid)') {
    display: grid;
}

// Custom complex queries
@include occlss-breakpoint('custom', '(max-width: 1200px) and (min-height: 800px)') {
    grid-template-columns: repeat(2, 1fr);
}
```

## Migration from Old Mixins

### Old Way (No longer available)
```scss
@include breakpoint-max-width('md', $occlss-layout-breakpoints) { ... }
@include breakpoint-min-width('sm', $occlss-layout-breakpoints) { ... }
@include breakpoint-max-height('lg', $occlss-layout-breakpoints) { ... }
@include occlss-range('768px', '1024px') { ... }
@include occlss-range-breakpoints('sm', 'lg', $occlss-layout-breakpoints) { ... }
```

### New Way - ONE FUNCTION FOR ALL
```scss
@include occlss-breakpoint('max-width', ('md', $occlss-layout-breakpoints)) { ... }
@include occlss-breakpoint('min-width', ('sm', $occlss-layout-breakpoints)) { ... }
@include occlss-breakpoint('max-height', ('lg', $occlss-layout-breakpoints)) { ... }
@include occlss-breakpoint('range', ('768px', '1024px')) { ... }
@include occlss-breakpoint('range', ('sm', 'lg', $occlss-layout-breakpoints)) { ... }
```

## Available Breakpoints

Your current breakpoint system includes:

```scss
$reflex-breakpoints: (
  xs: 480px,    // Extra small devices
  sm: 768px,    // Small devices (tablets)
  md: 992px,    // Medium devices (desktops)
  lg: 1200px,   // Large devices (large desktops)
  xlg: 1600px   // Extra large devices
);
```

## Best Practices

### 1. Mobile-First Approach
```scss
.component {
    // Base styles (mobile)
    display: block;
    
    // Tablet and up
    @include occlss-breakpoint('min-width', ('sm', $occlss-layout-breakpoints)) {
        display: flex;
    }
    
    // Desktop and up
    @include occlss-breakpoint('min-width', ('md', $occlss-layout-breakpoints)) {
        flex-direction: row;
    }
}
```

### 2. Use Semantic Breakpoint Names
```scss
// Good: Use breakpoint map keys
@include occlss-breakpoint('max-width', ('md', $occlss-layout-breakpoints)) { ... }

// Avoid: Hardcoded values
@include occlss-breakpoint('max-width', '992px') { ... }
```

### 3. Use Range for Specific Device Targeting
```scss
// Tablet only (between sm and md)
@include occlss-breakpoint('range', ('sm', 'md', $occlss-layout-breakpoints)) {
    .sidebar { width: 250px; }
}

// Desktop only (between md and lg)
@include occlss-breakpoint('range', ('md', 'lg', $occlss-layout-breakpoints)) {
    .sidebar { width: 300px; }
}
```

### 4. Accessibility Features
```scss
// Support for reduced motion
@include occlss-breakpoint('prefers-reduced-motion', 'reduce') {
    animation: none;
    transition: none;
}

// Support for high contrast
@include occlss-breakpoint('prefers-contrast', 'high') {
    border: 2px solid;
    background-color: transparent;
}
```

### 5. Touch Device Optimization
```scss
@include occlss-breakpoint('hover', 'none') {
    .button {
        min-height: 44px; // Apple's recommended touch target size
        min-width: 44px;
    }
}
```

## Performance Considerations

- **One function** handles **all cases** efficiently
- No additional CSS is generated
- All mixins compile to standard `@media` queries
- No function call overhead for different types
- Optimized logic for all media query variants

## Examples

See the following files for complete examples:
- `_breakpoint-examples.scss` - Comprehensive usage examples with ONE function
- `_breakpoint-migration-guide.scss` - Migration patterns and best practices
- `_occlss-co.scss` - Real-world usage example

## Browser Support

The generated CSS media queries support all modern browsers. The mixin system itself is SCSS-only and compiles to standard CSS, ensuring maximum compatibility.

## Key Benefits

1. **Simplicity**: One function for all media queries
2. **Consistency**: Same syntax for all types
3. **Flexibility**: Handles any CSS media query
4. **Maintainability**: Less code to maintain
5. **Performance**: Optimized for all use cases
6. **Clean Code**: No legacy code or deprecated functions
