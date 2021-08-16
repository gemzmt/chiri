import React from 'react';

export default {
  title: 'Chirimoya/chirimoya-button',
};

export const Clickable = () => {
  return (

    <div
      style={{
        fontFamily:
          "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
      }}
    >
      <table
        style={{
          width: '100%',
          maxWidth: '640px',
          textAlign: 'left',
          tableLayout: 'fixed',
        }}
      >
        <thead>
          <tr>
            <th></th>
            <th>
              <h3>Default</h3>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Normal</td>
            <td>
              <chirimoya-button onClick={(e) => console.log('button clicked', e)}>Check console</chirimoya-button>
            </td>
          </tr>
          <tr>
            <td>With Leading</td>
            <td>
              <chirimoya-button onClick={(e) => console.log('button clicked', e)}>
                <primaries-icon icon="Archery" slot="leading" />
                Check console
              </chirimoya-button>

            </td>
          </tr>
          <tr>
            <td>With Trailing</td>
            <td>
            <chirimoya-button onClick={(e) => console.log('button clicked', e)}>
              Check console
              <primaries-icon icon="Archery" slot="trailing" />
            </chirimoya-button>
            </td>
          </tr>
          <tr>
            <td>With Leading and Trailing</td>
            <td>
            <chirimoya-button onClick={(e) => console.log('button clicked', e)}>
              <primaries-icon icon="Archery" slot="leading" />
              Check console
              <primaries-icon icon="Archery" slot="trailing" />
            </chirimoya-button>
            </td>
          </tr>
          <tr>
            <td>Full Width</td>
            <td>
            <chirimoya-button onClick={(e) => console.log('button clicked', e)} isFullWidth>
              <primaries-icon icon="Archery" slot="leading" />
              Check console
              <primaries-icon icon="Archery" slot="trailing" />
            </chirimoya-button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
