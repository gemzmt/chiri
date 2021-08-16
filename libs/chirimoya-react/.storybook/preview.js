import React from 'react';
import { addDecorator, addParameters } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import '@chirimoya/primaries/primaries.css';
import { ChirimoyaTheme } from '../src/components';
import { Button } from '../src/lib/Button';
import { initChirimoya } from '../src/initChirimoya';

initChirimoya();

addParameters({
  options: {
    enableShortcuts: false,
  },
});

addDecorator(withKnobs);
addDecorator((storyFn) => {
  const [theme, setTheme] = React.useState('light');

  const toggleTheme = () => {
    setTheme((t) => (t === 'dark' ? 'light' : 'dark'));
  };

  const handleChange = (event) => {
    setTheme(event.detail);
  };

  return (
    <ChirimoyaTheme onThemeChange={handleChange} theme={theme}>
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
        <Button onClick={toggleTheme}>
          <Button.LeadingIcon icon="ColorPalette" />
          Toggle theme
        </Button>
        <p style={{ marginLeft: '20px', fontSize: '12px', color: 'grey' }}>Active theme: {theme}</p>
      </div>
      {storyFn()}
    </ChirimoyaTheme>
  );
});
