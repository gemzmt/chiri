# chirimoya-alert



<!-- Auto Generated Below -->


## Properties

| Property    | Attribute   | Description              | Type      | Default |
| ----------- | ----------- | ------------------------ | --------- | ------- |
| `isVisible` | `isvisible` | set if the alert is open | `boolean` | `false` |


## Events

| Event  | Description                 | Type               |
| ------ | --------------------------- | ------------------ |
| `hide` | emit event on hiding alert  | `CustomEvent<any>` |
| `show` | emit event on showing alert | `CustomEvent<any>` |


## Slots

| Slot        | Description                                                                        |
| ----------- | ---------------------------------------------------------------------------------- |
| `"actions"` | options for the alert. Expected: <chirimoya-alert-action></chirimoya-alert-action> |
| `"message"` | message for the alert. Expected: <p></p>                                           |
| `"title"`   | the title for the alert. Expected: <p></p>                                         |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
