// "./components" expose the React wrappers for every custom element
// defined in `chirimoya`. We're probably not going to expose these
// components under the main import space, since this should be used
// sparely (to let users build components using our primitives if we
// don't have an implementation for it yet).
export {
  ChirimoyaAlert,
  ChirimoyaAlertAction,
  ChirimoyaButton, // We shouldn't be exposing this one since there's a wrapper down below,
  // but I'm keeping it for now so we can compare APIs.
  ChirimoyaCell,
  ChirimoyaFileField,
  ChirimoyaFormCell,
  ChirimoyaNavigationItem,
  ChirimoyaRootMenu,
  ChirimoyaSelectField,
  ChirimoyaTabBar,
  ChirimoyaTabBarItem,
  ChirimoyaTextField,
  ChirimoyaTheme,
  ChirimoyaToolbar,
  ChirimoyaUserInfo,
} from './components';

// Expose all of our React wrappers here
export { Button } from './lib/Button';
export type { ButtonProps } from './lib/Button';

export { PrimariesIcon as Icon } from './lib/PrimariesIcon';
export type { PrimariesIconProps as IconProps } from './lib/PrimariesIcon';

// This should be used for bootstrapping chirimoya. It should be called only
// once on each project (mostly on the main script of the app)
export { initChirimoya } from './initChirimoya';
