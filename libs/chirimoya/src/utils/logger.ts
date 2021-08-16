const noop = () => {};
const isDevEnv = process.env.NODE_ENV && process.env.NODE_ENV !== 'production';

// TODO: Enable richer messages later on
export const logger = isDevEnv
  ? {
      log: console.log,
      warn: console.warn,
    }
  : {
      log: noop,
      warn: noop,
    };
