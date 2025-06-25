# Angular Material Button Component

## Features

- 🎨 **Multiple Variants**: Primary, Secondary, and Tertiary styles
- 📏 **Responsive Sizes**: Small, Medium, and Large options
- 🔄 **Loading State**: Built-in spinner with smooth animation
- ♿ **Accessibility**: Full ARIA support and keyboard navigation
- 🖼️ **Icon Support**: Left/right icons with proper spacing
- 🔗 **Dual Mode**: Works as both button (`<button>`) and link (`<a>`)
- 🚫 **Disabled State**: Visual and functional disabled mode
- 🧪 **Tested**: Comprehensive unit test coverage
- 📖 **Documented**: Storybook stories for all variations

---

## Installation and Setup

### Prerequisites

- Node.js 18+
- npm 9+
- Angular CLI 19+

### Install Dependencies

```bash
npm install
```

---

## 📘 Command Reference

| Command                   | Description                          |
|---------------------------|--------------------------------------|
| `npm start`               | Starts Angular development server    |
| `npm test`                | Runs all unit tests                  |
| `npm run storybook`       | Launches Storybook UI                |
| `npm run build`           | Creates production build             |
| `npm run build-storybook` | Generates static Storybook site      |

---

## Button Component

A versatile, accessible button component with multiple variants, sizes, and states. Built with Angular and Material Design principles.

---

## Overview

This button component provides:

- ✅ Three visual variants (primary, secondary, tertiary)
- 📐 Three size options (small, medium, large)
- 🖼 Icon support (left/right)
- ⏳ Loading and disabled states
- 🔗 Dual functionality as button or link
- ♿ Full accessibility support

Built with:

- Angular Signals for reactive state management
- Material Design principles
- WCAG accessibility standards
- Flexible styling system

---

## API

### Inputs

| Property     | Type                                 | Default     | Description                          |
|--------------|--------------------------------------|-------------|--------------------------------------|
| `variant`    | `'primary' | 'secondary' | 'tertiary'` | `'primary'` | Visual style variant                 |
| `size`       | `'small' | 'medium' | 'large'`       | `'medium'`  | Size of the button                   |
| `iconLeft`   | `string`                              | `undefined` | Material icon name for left icon    |
| `iconRight`  | `string`                              | `undefined` | Material icon name for right icon   |
| `label`      | `string`                              | `''`        | Button text                          |
| `href`       | `string`                              | `undefined` | If provided, renders as `<a>` tag    |
| `target`     | `string`                              | `'_self'`   | Link target when `href` is used     |
| `type`       | `'button' | 'submit' | 'reset'`       | `'button'`  | HTML button type attribute           |
| `loading`    | `boolean`                             | `false`     | Shows loading spinner                |
| `disabled`   | `boolean`                             | `false`     | Disables interaction                 |

### Outputs

| Event     | Description               |
|-----------|---------------------------|
| `clicked` | Emits native click event  |

---

## Usage

### As a Button (default)

```html
<app-button 
  variant="primary"
  size="medium"
  (clicked)="handleClick($event)"
  label="Click me"
></app-button>
```