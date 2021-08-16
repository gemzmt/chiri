# chirimoya-text-field

<!-- Auto Generated Below -->


## Properties

| Property       | Attribute      | Description                                                                             | Type                                                     | Default      |
| -------------- | -------------- | --------------------------------------------------------------------------------------- | -------------------------------------------------------- | ------------ |
| `defaultValue` | `defaultvalue` | default value to use in form controls                                                   | `string`                                                 | `undefined`  |
| `disabled`     | `disabled`     | disable the component                                                                   | `boolean`                                                | `false`      |
| `hasError`     | `haserror`     | if true, a red line will appear below the input (indicating an error)                   | `boolean`                                                | `undefined`  |
| `label`        | `label`        | text for the label of the input                                                         | `string`                                                 | `undefined`  |
| `labelColor`   | `labelcolor`   | color of the label                                                                      | `"primary" \| "quaternary" \| "secondary" \| "tertiary"` | `'tertiary'` |
| `name`         | `name`         | name to use in form controls                                                            | `string`                                                 | `undefined`  |
| `placeholder`  | `placeholder`  | placeholder for the input                                                               | `string`                                                 | `undefined`  |
| `staticLabel`  | `staticlabel`  | if true, disables the animation of the label and set it fixed into the top of the input | `boolean`                                                | `false`      |
| `textColor`    | `textcolor`    | color of the input text                                                                 | `"primary" \| "quaternary" \| "secondary" \| "tertiary"` | `'primary'`  |
| `value`        | `value`        | the value of the input                                                                  | `string`                                                 | `''`         |


## Events

| Event   | Description                    | Type                         |
| ------- | ------------------------------ | ---------------------------- |
| `input` | event to handle the user input | `CustomEvent<KeyboardEvent>` |


## Slots

| Slot         | Description                                |
| ------------ | ------------------------------------------ |
| `"leading"`  | adds an element at the start of the input. |
| `"trailing"` | adds an element at the end of the input.   |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
