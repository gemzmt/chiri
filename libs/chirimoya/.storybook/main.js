const rootMain = require('../../../.storybook/main');

// Here you can add addons!
rootMain.addons.push('storybook-dark-mode');
rootMain.stories.push('../../../libs/chirimoya/src/**/*.stories.@(js|jsx|ts|tsx)');

module.exports = rootMain;
