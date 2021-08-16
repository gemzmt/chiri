import React from 'react';
import type { JSX } from '@chirimoya/chirimoya';

import { createReactComponent } from '../../react-component-lib';
import { PrimariesIcon, PrimariesIconProps } from '../PrimariesIcon';

const ChirimoyaButton = /*@__PURE__*/ createReactComponent<JSX.ChirimoyaButton, HTMLChirimoyaButtonElement>(
  'chirimoya-button',
);

type ButtonProps = React.ComponentProps<typeof ChirimoyaButton>;
interface ButtonCompound {
  LeadingIcon: typeof LeadingIcon;
  TrailingIcon: typeof TrailingIcon;
}

const LeadingIcon = React.forwardRef<HTMLPrimariesIconElement, Omit<PrimariesIconProps, 'slot'>>(function LeadingIcon(
  props,
  ref,
) {
  return <PrimariesIcon {...props} slot="leading" ref={ref} />;
});

const TrailingIcon = React.forwardRef<HTMLPrimariesIconElement, Omit<PrimariesIconProps, 'slot'>>(function LeadingIcon(
  props,
  ref,
) {
  return <PrimariesIcon {...props} slot="trailing" ref={ref} />;
});

const Button = (React.forwardRef<HTMLChirimoyaButtonElement, ButtonProps>(function Button({ children, ...props }, ref) {
  return (
    <ChirimoyaButton ref={ref} {...props}>
      {children}
    </ChirimoyaButton>
  );
}) as unknown) as React.FC<ButtonProps> & ButtonCompound;

Button.LeadingIcon = LeadingIcon;
Button.TrailingIcon = TrailingIcon;

export { Button, ButtonProps };
