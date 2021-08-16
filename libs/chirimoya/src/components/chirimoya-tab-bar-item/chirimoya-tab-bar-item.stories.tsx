import React from 'react';

export default {
  title: 'Chirimoya/chirimoya-tab-bar-item',
};
const removeActive = () => {
  const tabContainer = document.querySelectorAll('.chiri-tab-bar-item');
  tabContainer.forEach((e: Element) => {
    e.setAttribute('isActive', 'false');
  });
};
const onClickTabItem = (e: Event) => {
  const btn = e.currentTarget as Element;
  removeActive();
  btn.setAttribute('isActive', 'true');
};

export const TabBarItem = () => {
  return (
    <div>
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
            <td>
              <h3>Inactive</h3>
            </td>

            <td>
              <chirimoya-tab-bar-item class="chiri-tab-bar-item" href="#" target="_blank">
                Tab title
              </chirimoya-tab-bar-item>
            </td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>
              <h3>Inactive</h3>
            </td>
            <td>
              <chirimoya-tab-bar-item class="chiri-tab-bar-item" href="#" target="_blank" isActive>
                Tab title
              </chirimoya-tab-bar-item>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
