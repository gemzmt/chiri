# chirimoya-select

This component implements a custom selector field designed for Chirimoya.

## Usage

The basic usage:

```javascript
<chirimoya-select-field placeholder="Select here">
  <option value="avocado">Palta</option>
  <option value="Tomato">Tomate</option>
  <option value="mayo">Mayonesa</option>
</chirimoya-select-field>
```

It can also receive a label to use in forms.

```javascript
<chirimoya-select-field placeholder="Select here" label="Label" name="cool-selector">
  <option value="avocado">Palta</option>
  <option value="Tomato">Tomate</option>
  <option value="mayo">Mayonesa</option>
</chirimoya-select-field>
```

Also supports error state

```javascript
<chirimoya-select-field placeholder="Select here" label="Label" hasError name="cool-selector">
  <option value="avocado">Palta</option>
  <option value="Tomato">Tomate</option>
  <option value="mayo">Mayonesa</option>
</chirimoya-select-field>
```

<!-- Auto Generated Below -->


## Properties

| Property       | Attribute      | Description                                                            | Type      | Default     |
| -------------- | -------------- | ---------------------------------------------------------------------- | --------- | ----------- |
| `defaultValue` | `defaultvalue` | defaultValue to use in form-controls                                   | `string`  | `undefined` |
| `disabled`     | `disabled`     | if `true`, the select will be unaccessible                             | `boolean` | `false`     |
| `fullWidth`    | `fullwidth`    |                                                                        | `boolean` | `false`     |
| `hasError`     | `haserror`     | if true, a red line will appear below the select (indicating an error) | `boolean` | `undefined` |
| `label`        | `label`        | text to show in the top label                                          | `string`  | `undefined` |
| `name`         | `name`         | name to use in form-controls                                           | `string`  | `undefined` |
| `placeholder`  | `placeholder`  | text to show inside the selector in case there is no value selected    | `string`  | `undefined` |
| `value`        | `value`        | the value of the select                                                | `string`  | `undefined` |


## Events

| Event          | Description                    | Type                         |
| -------------- | ------------------------------ | ---------------------------- |
| `selectChange` | event to handle user selection | `CustomEvent<KeyboardEvent>` |


## Slots

| Slot     | Description                                                         |
| -------- | ------------------------------------------------------------------- |
| `"slot"` | <option/> - open slot that receives options to add into the select. |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
