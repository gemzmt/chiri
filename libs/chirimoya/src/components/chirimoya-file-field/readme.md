# chirimoya-file-field

## Description
File field component allow to upload file in form cell components. A event is emit when the file is uploaded __fileUploadedReady__, and value is a blob image.

## Usage

```javascript
    <chirimoya-file-field id="text-field" label="Boleta" placeholder="Choose..." hasError>
        <primaries-icon icon="Info" slot="trailing-icon" />
    </chirimoya-file-field>
```


<!-- Auto Generated Below -->


## Properties

| Property      | Attribute      | Description                                | Type      | Default     |
| ------------- | -------------- | ------------------------------------------ | --------- | ----------- |
| `acceptTypes` | `accept-types` | File type allowed                          | `string`  | `undefined` |
| `disabled`    | `disabled`     | Disable the component                      | `boolean` | `false`     |
| `hasError`    | `haserror`     | Show error style to input                  | `boolean` | `undefined` |
| `label`       | `label`        | Label for the input, also has an animation | `string`  | `undefined` |
| `name`        | `name`         | Name of input                              | `string`  | `undefined` |
| `placeholder` | `placeholder`  | Placeholder for the input                  | `string`  | `undefined` |


## Events

| Event           | Description                                | Type                |
| --------------- | ------------------------------------------ | ------------------- |
| `fileLoadReady` | This Event emits when file is ready loaded | `CustomEvent<Blob>` |


## Methods

### `resetFile() => Promise<void>`

Clean file value

#### Returns

Type: `Promise<void>`




## Slots

| Slot              | Description                                       |
| ----------------- | ------------------------------------------------- |
| `"trailing-icon"` | Use for add icon un the trailing section of field |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
