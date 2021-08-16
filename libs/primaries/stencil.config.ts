import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: 'primaries',
  taskQueue: 'async',
  plugins: [sass()],
  globalStyle: 'src/global/primaries.css',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
      dir: '../../dist/libs/primaries/dist',
    },
    {
      type: 'www', // this is a temporary solution to expose the font face locally, then we need to upload the font into a bucket.
      dir: '../../dist/libs/primaries/www',
    },
  ],
};
