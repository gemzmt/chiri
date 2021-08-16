import React from 'react';

export default {
  title: 'Chirimoya/chirimoya-tab-bar',
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

export const TabBar = () => {
  return (
    <div>
      <chirimoya-tab-bar>
        <chirimoya-tab-bar-item onClick={onClickTabItem} class="chiri-tab-bar-item" href="#" target="_blank" >
          Tab title
        </chirimoya-tab-bar-item>
        <chirimoya-tab-bar-item onClick={onClickTabItem} class="chiri-tab-bar-item" href="#" target="_blank" >
          Tab title
        </chirimoya-tab-bar-item>
        <chirimoya-tab-bar-item onClick={onClickTabItem} class="chiri-tab-bar-item" href="#" target="_blank">
          Tab title
        </chirimoya-tab-bar-item>
      </chirimoya-tab-bar>

    </div>
  );
};