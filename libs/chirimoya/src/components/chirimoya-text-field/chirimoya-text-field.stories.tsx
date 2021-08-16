import React from 'react';

export default {
  title: 'Chirimoya/chirimoya-text-field',
};

export const BasicWithPlaceholder = () => {
  return (
    <div style={{padding: '30px', maxWidth: '300px'}}>
      <chirimoya-text-field id="text-field" placeholder="this is placeholder">
      </chirimoya-text-field>
    </div>
  );
};
export const WithLabel = () => {
  return (
    <div style={{padding: '30px', maxWidth: '300px'}}>
      <chirimoya-text-field id="text-field" label="Label" value="">
      </chirimoya-text-field>
    </div>
  );
};
export const InvalidSubmitedText = () => {
  return (
    <div style={{padding: '30px', maxWidth: '300px'}}>
      <chirimoya-text-field id="text-field" label="Label" value="Value" hasError>
      </chirimoya-text-field>
    </div>
  );
};
export const StaticLabelWithPlaceHolder = () => {
  return (
    <div style={{padding: '30px', maxWidth: '300px'}}>
      <chirimoya-text-field id="text-field" staticLabel label="Label" value="" placeholder="this is placeholder">
      </chirimoya-text-field>
    </div>
  );
};
export const WithTrailingIconInsideBorderedDiv = () => {
  return (
    <div style={{padding: '10px', border: '1px solid black', borderRadius: '20px', maxWidth: '300px'}}>
      <chirimoya-text-field id="text-field" value="" >
        <chiri-icon icon="Search" slot="trailing-icon"/>
      </chirimoya-text-field>
    </div>
  );
};
export const WithLeadingIconInsideBorderedDiv = () => {
  return (
    <div style={{padding: '10px', border: '1px solid black', borderRadius: '20px', maxWidth: '300px'}}>
      <chirimoya-text-field id="text-field" value="" >
        <chiri-icon icon="Search" slot="leading-icon"/>
        <chiri-icon icon="Clear" slot="trailing-icon"/>
      </chirimoya-text-field>
    </div>
  );
};
export const BasicDisabled = () => {
  return (
    <div style={{padding: '30px', maxWidth: '300px'}}>
      <chirimoya-text-field id="text-field" value="Value" disabled>
      </chirimoya-text-field>
    </div>
  );
};
export const WithLabelDisabled = () => {
  return (
    <div style={{padding: '30px', maxWidth: '300px'}}>
      <chirimoya-text-field id="text-field" value="Value" label="Label" disabled>
      </chirimoya-text-field>
    </div>
  );
};
