const { promisify } = require('util');
const { exec } = require('child_process');
const {
  updateFigmaVersion,
  checkFigmaVersion,
} = require('./check-icons-version');
const { sanitizeIconsNames } = require('./sanitize-icons-names');
const { generateFont } = require('./generate-font');
const { moveStyleFile } = require('./move-style-file');
const { typeFileCreator } = require('./type-file-creator');

(async function bundleIcons() {
  const newVersion = await checkFigmaVersion();

  const commandArgs = process.argv.slice(2);
  const libPath = './libs/primaries/src';
  const iconsPath = libPath + commandArgs[0];
  const fontsPath = libPath + commandArgs[1];
  const iconTypeFilePath = libPath + commandArgs[2];

  if (newVersion) {
    function execute(command) {
      return promisify(exec)(command);
    }
    const run = async () => {
      console.log('downloading icons');
      return await execute(
        'yarn run export-icons --config=./libs/primaries/icons-config.json'
      );
    };

    await run();
    await sanitizeIconsNames(iconsPath);
    await generateFont(libPath, iconsPath, fontsPath);
    moveStyleFile(libPath, fontsPath);
    typeFileCreator(libPath, iconTypeFilePath);
    exec(`yarn rimraf ${iconsPath}`);
    updateFigmaVersion(newVersion);
  }
})();
