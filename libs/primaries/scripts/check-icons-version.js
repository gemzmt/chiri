const fs = require('fs');
const axios = require('axios');
const fsPromises = require('fs').promises;

// Script to check the version of the figma file which contains the primaries icon bundle.

const versionsJSONPath = './libs/primaries/figma-versions.json';
const figmaFilePath = './libs/primaries/icons-config.json';

const figmaFileJSON = JSON.parse(fs.readFileSync(figmaFilePath));

const fetchVersions = async () => {
  try {
    const res = await axios({
      method: 'get',
      url:
        'https://api.figma.com/v1/files/' + figmaFileJSON.fileId + '/versions',
      headers: {
        'X-Figma-Token': figmaFileJSON.figmaPersonalToken,
      },
    });
    const data = res.data.versions;
    return data;
  } catch (err) {
    console.error('Please provide Figma Token in icons-config.json');
  }
};

async function checkFigmaVersion() {
  try {
    const data = await fetchVersions();
    const lastVersion = data[0];
    const cleanData = {
      id: lastVersion.id,
      created_at: lastVersion.created_at,
    };
    const exist = await fsPromises
      .access(versionsJSONPath, fs.F_OK)
      .then(() => {
        const versions = JSON.parse(fs.readFileSync(versionsJSONPath));

        if (lastVersion.id == versions.id) {
          console.log('Primaries icons version is up to date');
          return false;
        } else {
          return cleanData;
        }
      })
      .catch((er) => {
        return cleanData;
      });

    return exist;
  } catch (err) {
    console.log(err);
    return false;
  }
}

const updateFigmaVersion = (newVersion) => {
  fs.writeFile(
    versionsJSONPath,
    JSON.stringify(newVersion, null, ' '),
    function (err) {
      if (err) {
        return console.log(err);
      }
      console.log('Primaries icons version is outdated');
    }
  );
};

module.exports = {
  checkFigmaVersion,
  updateFigmaVersion,
};
