import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import { reactOutputTarget } from '@stencil/react-output-target';
import { postcss } from '@stencil/postcss';
import autoprefixer from 'autoprefixer';

export const config: Config = {
  namespace: 'chirimoya',
  taskQueue: 'async',
  plugins: [sass(), postcss({
    plugins: [autoprefixer()]
  })],
  globalStyle: 'src/styles/variables-css.scss',
  outputTargets: [
    { type: 'docs-readme' },
    {
      type: 'dist',
      esmLoaderPath: '../loader',
      dir: '../../dist/libs/chirimoya/dist',
    },
    reactOutputTarget({
      componentCorePackage: '@chirimoya/chirimoya',
      proxiesFile: '../../../libs/chirimoya-react/src/components.ts', // This doesn't makes sense but it works ¯\_(ツ)_/¯
      includeDefineCustomElements: false,
    }),
  ],
};
