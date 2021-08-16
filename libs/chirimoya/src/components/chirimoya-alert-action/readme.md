# chirimoya-alert-action

## Description

Wrapper of button to display options for the Alert component.
It has 3 roles, normal, primary (tinted) and destructive.
Primary and destructive roles present a unique focus ring when selected.
This is a `full width` button by default, you can change that behavior by setting `display: inline-flex` into the host (`chirimoya-alert-action`).

## Usage

```javascript
<chirimoya-alert-action role="primary">My action</chirimoya-alert-action>
```

<!-- Auto Generated Below -->


## Properties

| Property       | Attribute      | Description                                               | Type                                     | Default    |
| -------------- | -------------- | --------------------------------------------------------- | ---------------------------------------- | ---------- |
| `alignContent` | `aligncontent` | alignment of the children elements                        | `"center" \| "left" \| "right"`          | `'center'` |
| `isDisabled`   | `isdisabled`   | indicates the disabled status, not intended to be changed | `boolean`                                | `false`    |
| `role`         | `role`         | role for the alert action                                 | `"destructive" \| "normal" \| "primary"` | `'normal'` |


## Slots

| Slot      | Description                                                                        |
| --------- | ---------------------------------------------------------------------------------- |
| `"empty"` | Label for the button, e.g.: <chirimoya-alert-action>Label</chirimoya-alert-action> |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
