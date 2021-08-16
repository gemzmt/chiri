import React from 'react';

export default {
  title: 'Chirimoya/chirimoya-user',
};

export const UserInfo = () => {
  return (
    <div>
      <chirimoya-user-info>
        <img slot="user-avatar" src="https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-alt-512.png"/>
        <p slot="user-name">Claudio</p>
        <p slot="user-email">claudiodonosoc@gmail.com</p>
      </chirimoya-user-info>
    </div>
  );
};