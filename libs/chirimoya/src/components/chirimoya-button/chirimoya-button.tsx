import { Component, h, Prop, Host } from '@stencil/core';

import { AlignContent, BaseButton } from '../../utils/internals/button.model';

/**
 * `<chirimoya-button>` primitive component
 * Wrapper for <button /> element providing different styles to match the design for
 * Chirimoya elements like NavItem or AlertAction
 */
@Component({
  tag: 'chirimoya-button',
  styleUrl: 'chirimoya-button.scss',
  shadow: false,
})
export class Button implements BaseButton {
  /** indicates the disabled status */
  @Prop({ attribute: 'isDisabled' }) isDisabled = false;

  /** indicates full width for components like Alert Action */
  @Prop({ attribute: 'isFullWidth' }) isFullWidth = false;

  /** alignment of the children elements */
  @Prop({ attribute: 'alignContent' }) alignContent: AlignContent = 'center';

  render() {
    const buttonClasses = {
      'base-button': true,
      'chirimoya-button': true,
      'is-disabled': this.isDisabled,
      [`align-${this.alignContent}`]: true,
    };

    const hostClasses = {
      "chirimoya-button-host": true,
      'chirimoya-button-host-fullwidth': this.isFullWidth,
    }

    return (
      <Host class={hostClasses}>
        <button class={buttonClasses} disabled={this.isDisabled}>
          <span class="base-button-content">
            <slot name="leading" />
            <slot />
            <slot name="trailing" />
          </span>
        </button>
      </Host>
    );
  }
}
