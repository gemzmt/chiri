/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/no-explicit-any */

/* this is necessary to remove the warning about the web-component declaration while running the app */
export {};

declare global {
    namespace JSX { interface IntrinsicElements {
          'primaries-icon': any
        }
    }
}
