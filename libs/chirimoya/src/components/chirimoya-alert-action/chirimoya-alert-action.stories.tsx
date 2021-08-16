import React from 'react';

export default {
  title: 'Chirimoya/chirimoya-alert-action',
};

export const Normal = () => {
  return (
    <div>
      <p>Normal role</p>
      <chirimoya-alert-action>Action</chirimoya-alert-action>
    </div>
  );
};

export const Primary = () => {
  return (
    <div>
      <p>Primary role</p>
      <chirimoya-alert-action role="primary">Action</chirimoya-alert-action>
    </div>
  );
};

export const Destructive = () => {
  return (
    <div>
      <p>Destructive role</p>
      <chirimoya-alert-action role="destructive">Action</chirimoya-alert-action>
    </div>
  );
};
