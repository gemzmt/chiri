const generateFonts = require('fantasticon').default;

async function generateFont(libPath, iconsPath, fontPath) {
  console.log('generate Font');
  console.log('lib', libPath);
  await generateFonts({
    name: 'primaries',
    inputDir: iconsPath,
    outputDir: fontPath,
    fontTypes: ['ttf', 'eot', 'woff2', 'woff'],
    assetTypes: [
      'css',
      'json',
    ],
    prefix: 'primaries',
    fontsUrl: '../assets/fonts'
  }).then(() => {
    console.log('done!');
  });
}

module.exports = {
  generateFont,
};
