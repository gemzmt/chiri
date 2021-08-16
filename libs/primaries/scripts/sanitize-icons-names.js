const { readdir, rename, unlink } = require('fs');
const { promisify } = require('util');

const asyncReaddir = promisify(readdir);
const asyncUnlink = promisify(unlink);

async function sanitizeIconsNames(iconsPath) {
  console.log('sanitize');
  const svgsDirPath = iconsPath;

  // Get an array of the files inside the folder
  const files = await asyncReaddir(svgsDirPath);

  //return files;

  // Loop through each file that was retrieved
  files.forEach((file) => {
    if (
      ['From Parakeet.svg', 'Parakeet.svg', 'Primaries.svg'].indexOf(file) > -1
    ) {
      return unlink(svgsDirPath + '/' + file, (err) => {
        if (err) throw err;
        console.log('deleted', file);
      });
    }
    if (file.indexOf(' ') >= 0) {
      rename(
        svgsDirPath + `/${file}`,
        svgsDirPath + `/${file.replace(/\s/g, '')}`,
        function (err) {
          if (err) throw err;
          console.log(
            'Icon ' + file + ' name sanitize completed successfully!'
          );
        }
      );
    }
  });
}

module.exports = {
  sanitizeIconsNames,
};
