import React from 'react';
import { addDecorator, addParameters } from '@storybook/react';

import '@chirimoya/primaries/primaries.css';
import { defineCustomElements as chiriLoader } from '@chirimoya/chirimoya/loader';
import { defineCustomElements as iconLoader } from '@chirimoya/primaries/loader';
import './register-web-components';


chiriLoader();
iconLoader();

addParameters({
  options: {
    enableShortcuts: false,
  },
});

addDecorator((storyFn) => {
  const ref = React.useRef();
  const [theme, setTheme] = React.useState('light');

  const toggleTheme = () => {
    setTheme((t) => (t === 'dark' ? 'light' : 'dark'));
  };

  React.useEffect(() => {
    const handleChange = (event) => {
      setTheme(event.detail);
    };

    // Normally this would be done with adding an `onThemeChange` prop, but you know
    // how it is with custom-elements and React. The component version exposed by
    // reactOutputTarget will make it work as regular.
    ref.current.addEventListener('themeChange', handleChange);

    return () => {
      ref.current && ref.current.removeEventListener('themeChange', handleChange);
    };
  }, []);

  return (
    <chirimoya-theme ref={ref} theme={theme}>
      <div
        style={{
          padding: '5px 20px 5px 10px',
          border: '1px solid lightgrey',
          borderRadius: '10px',
          display: 'inline-flex',
          alignItems: 'center',
          marginBottom: '20px',
          fontFamily: 'Arial',
        }}
      >
        <chirimoya-button onClick={toggleTheme}>
          <primaries-icon icon="ColorPalette" slot="leading" />
          Toggle theme
        </chirimoya-button>
        <p style={{ marginLeft: '20px', fontSize: '12px', color: 'grey' }}>Active theme: {theme}</p>
      </div>
      {storyFn()}
    </chirimoya-theme>
  );
});
