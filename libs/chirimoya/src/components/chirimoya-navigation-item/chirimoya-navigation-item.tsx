import { Component, h, Prop } from '@stencil/core';

import { AlignContent, BaseButton } from '../../utils/internals/button.model';

type NavigationItemRole = 'normal' | 'primary';
type NavigationItemVariant = 'bordered' | 'label' | 'inline';

@Component({
  tag: 'chirimoya-navigation-item',
  styleUrl: 'chirimoya-navigation-item.scss',
  shadow: true,
})
export class NavigationItem implements BaseButton {
  /** indicates the disabled status */
  @Prop({ attribute: 'isDisabled' }) isDisabled = false;

  /** indicates weather the item is selected or not */
  @Prop({ attribute: 'isSelected' }) isSelected: boolean = false;

  /** alignment of the children elements */
  @Prop({ attribute: 'alignContent' }) alignContent: AlignContent = 'left';

  /** role of the navigation item */
  @Prop({ attribute: 'navRole' }) navRole: NavigationItemRole = 'normal';

  /** variant of navigation item */
  @Prop({ attribute: 'variant' }) variant: NavigationItemVariant = 'bordered';

  /** href property for anchor tags */
  @Prop() href?: string;

  render() {
    const Component = this.href ? 'a' : 'button';

    const navigationItemClasses = {
      'base-button': true,
      'chirimoya-navigation-item': true,
      // role
      'is-primary': this.navRole === 'primary',
      'is-normal': this.navRole === 'normal',
      // variants
      'is-bordered': this.variant === 'bordered',
      'is-inline': this.variant === 'inline',
      'is-label': this.variant === 'label',
      // states
      'is-disabled': this.isDisabled,
      'is-selected': this.isSelected,
      [`align-${this.alignContent}`]: true,
    };

    return (
      <Component class={navigationItemClasses} disabled={this.isDisabled}>
        <span class="base-button-content">
          <slot name="leading" />
          <slot />
          <slot name="trailing" />
        </span>
      </Component>
    );
  }
}
