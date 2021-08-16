import React from 'react';

export default {
  title: 'Chirimoya/chirimoya-toolbar',
};

const onClickToolbar = () => {
  console.log('click');
};

export const Toolbar = () => {
  return (
    <div>
      <chirimoya-toolbar>
        <chirimoya-button
          borderColor="border-lightgrey"
          borderHoverColor="hover-border-darkgrey"
          backgroundSelectedColor="selected-bg-lightgrey"
          onClick={onClickToolbar}
          slot="leading"
        >
          <span>Label</span>
        </chirimoya-button>
        <chirimoya-button
          borderColor="border-lightgrey"
          borderHoverColor="hover-border-darkgrey"
          backgroundSelectedColor="selected-bg-lightgrey"
          onClick={onClickToolbar}
          slot="leading"
        >
          <span>Label</span>
        </chirimoya-button>
        <chirimoya-button
          borderColor="border-lightgrey"
          borderHoverColor="hover-border-darkgrey"
          backgroundSelectedColor="selected-bg-lightgrey"
          onClick={onClickToolbar}
          slot="leading"
        >
          <span>Label</span>
        </chirimoya-button>
        <chirimoya-button
          borderColor="border-lightgrey"
          borderHoverColor="hover-border-darkgrey"
          backgroundSelectedColor="selected-bg-lightgrey"
          onClick={onClickToolbar}
          slot="leading"
        >
          <span>Label</span>
        </chirimoya-button>

        <chirimoya-button
          borderColor="border-transparent"
          backgroundHoverColor="hover-bg-lightgrey"
          slot="trailing"
          onClick={onClickToolbar}
        >
          <span>
            <primaries-icon icon="PaperTowels" /> Label
          </span>
        </chirimoya-button>
        <chirimoya-button
          borderColor="border-transparent"
          backgroundHoverColor="hover-bg-lightgrey"
          slot="trailing"
          onClick={onClickToolbar}
        >
          <span>
            <primaries-icon icon="PaperTowels" /> Label
          </span>
        </chirimoya-button>
        <chirimoya-button
          borderColor="border-transparent"
          backgroundHoverColor="hover-bg-lightgrey"
          slot="trailing"
          onClick={onClickToolbar}
        >
          <span>
            <primaries-icon icon="PaperTowels" /> Label
          </span>
        </chirimoya-button>
      </chirimoya-toolbar>
    </div>
  );
};
