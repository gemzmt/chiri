import React from 'react';
import type { JSX } from '@chirimoya/primaries';

import { createReactComponent } from '../react-component-lib';

const PrimariesIcon = /*@__PURE__*/ createReactComponent<JSX.PrimariesIcon, HTMLPrimariesIconElement>('primaries-icon');
type PrimariesIconProps = React.ComponentProps<typeof PrimariesIcon>;

export { PrimariesIcon };
export type { PrimariesIconProps };
