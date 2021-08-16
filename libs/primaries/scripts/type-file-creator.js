const { open, readFileSync, writeFile } = require('fs');

// Script to generate a type class for the icons name.

// set up of the route
const iconJSONPath = '/assets/fonts/primaries.json';

async function typeFileCreator(libPath, iconTypeFilePath) {
  // We create the type file reading the entries of the generated js file of the font.
  const iconsInfo = JSON.parse(readFileSync(libPath + iconJSONPath));
  await open(iconTypeFilePath, 'w+', function (err, fd) {
    if (err) {
      throw 'could not open file: ' + err;
    }
    const typeDeclaration = 'export type IName =\n';
    writeFile(fd, typeDeclaration, function (err) {
      if (err) throw 'error writing file: ' + err;
    });
    for (const [iconName, value] of Object.entries(iconsInfo)) {
      const line = '| "' + iconName + '"\n';
      writeFile(fd, line, function (err) {
        if (err) throw 'error writing file: ' + err;
      });
    }
  });
}

module.exports = {
  typeFileCreator,
};
