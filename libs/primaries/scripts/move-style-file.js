const { rename } = require('fs');

// We needed to move the generated SCSS file with the icon definition to the /global directory.

const globalDirPath = '/global';
const styleFileName = '/primaries.css';

function moveStyleFile(libPath, fontsPath) {
  console.log('move file');
  const destPath = libPath + globalDirPath + styleFileName;
  const originPath = fontsPath + styleFileName;

  rename(originPath, destPath, function (err) {
    if (err) throw err;
    console.log(
      `${styleFileName} moved successfully from: ${originPath} to ${destPath}`
    );
  });
}

module.exports = {
  moveStyleFile,
};
