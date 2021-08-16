# Style Helpers

How use global variables like colors or typography.

&nbsp;

## Import Global Styles

This global style import mixins, functions and reset.

```css
    @import '../../styles/global.scss';
```

## Get colors css vars with dark theme

Get colors css vars for use in components

Use the mixin __get-colors-theme(('color-1', 'color-2')__;

##### Example
```css
    $colors-component: (
        'label-primary',
        'separator-primary',
        'tint'
    );
    
    @include get-colors-theme($colors-component);

    .chiri-button {
        background: var(--tint);
        color: var(--label-primary);
    }
```
##### Result

```css
    :host {
        --label-primary: #24292E;
        --separator-primary: rgba(0, 0, 0, 0.1);
        --tint: #FF404C;
    }

    :host-context(body.dark-theme) {
        --label-primary: #FFFFFF;
        --separator-primary: rgba(255, 255, 255, 0.15);
        --tint: #FF404C;
    }

    .chiri-button {
        background: var(--tint);
        color: var(--label-primary);
    }
```

## Get colors

Use the function __get-color('name-color', 'theme')__;

##### Example

```css
    .component {
        color: get-color('label-primary', 'light');
        padding: 4px;
    }
```
##### Result

```css
    .title {
        color: #FFFFFF;
        padding: 4px;
    }
```
&nbsp;

## Get typography

Use the mixin __get-font-style('type', 'weight-name')__;

### Types
large-title, title-1, title-2, title-3, headline, body, callout, subheadline, subheadline, footnote, caption-1, caption-2

### Weight names
ultra-light, thin, light, regular, medium, demibold (is semibold), bold, heavy, black

&nbsp;

##### Example
```css
    .title {
        padding: 4px;
        @include get-font-style('title-1', 'medium');        
    }
```
##### Result

```css
    .title {
        padding: 4px;
        font-size: 28px;
        font-weight: 500;
        line-height: 34px;
        letter-spacing: 0.36px;
    }
```

&nbsp;

## Global CSS Vars

If you need some variable outside components (storybook for example). You can import and use css vars.

```javascript
import '@chirimoya/chirimoya/chirmoya.css';
```

### How build this vars
#### Color
* __--{name-color}-{theme}-color__

&nbsp;

#### Typography

* __--{type}-{property}-font__ (properties: font-size, letter-spacing, line-height)
* __--{weight-name}-weight-font__

&nbsp;

##### Example
```css
    .title-storybook {
        color: var(--label-primary-light-color);
        font-size: var(--title-1-font-size-font);
        font-weight: var(--bold-weight-font);
        letter-spacing: var(--title-1-letter-spacing-font);
        line-height: var(--title-1-line-height-font);
    }
```
