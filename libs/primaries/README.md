# Primaries - Icon library

Primaries is an icon library using a typeface for the [Primaries](`https://www.parakeet.co/primaries/`) icon set (licensed, of course 🎉).

The library is built with StencilJS to generate Web Components that run in every browser or framework.

### Usage

1. Install.

```
  yarn install
```

1. Generate dist files.

```
  yarn build primaries
```

3. Import the css file of the font face.

```
  import '@cornershop/primaries/primaries.css'
```

Note that this is a temporary solution, then we will upload the css files into a bucket to expose it globally.

4. To use in a React App you should do the following, if you want to use in another framework you can see the [Stencil Framework Integrations](`https://stenciljs.com/docs/overview`)

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { applyPolyfills, defineCustomElements } from '@cornershop/primaries/loader';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

applyPolyfills().then(() => {
  defineCustomElements();
});
```

Note that in this scenario applyPolyfills is needed if you are targeting Edge or IE11.

5. Declare the component

```jsx
const App = () => {
  return <primaries-icon icon="Apple" class="style-you-want"></primaries-icon>;
};
```

### Icons considerations

1. You can see all the icons available in the [Primaries Icons Figma](`https://www.figma.com/file/dH1YNwc8uoQr7qBY1MH6Hn/Primaries-Icon-Set`).

2. Primaries Icon component uses the "icon" parameter to receive the icon name wich is exactly as you can see in the figma document(using capital letters). For example:

```jsx
  <primaries-icon icon="Orange"></primaries-icon>
  <primaries-icon icon="Fire"></primaries-icon>
  <primaries-icon icon="Boat" class="style-you-want"></primaries-icon>
  <primaries-icon icon="Castle" class="style-you-want"></primaries-icon>
```

3. Icons named as Info-Alternate should be used as InfoAlternate.
