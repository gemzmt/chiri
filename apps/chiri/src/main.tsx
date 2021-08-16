import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom';

import { initChirimoya } from '@chirimoya/chirimoya-react';
// Add primaries styles (it loads the icon font under the hood)
import '@chirimoya/primaries/primaries.css';

import App from './app/app';

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root'),
);

// `initChirimoya` bootstraps the chirimoya components. Call this on your app entry file.
initChirimoya();
