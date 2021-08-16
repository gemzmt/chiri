import { Component, h, Prop } from '@stencil/core';
import { AlignContent, BaseButton } from '../../utils/internals/button.model';

type AlertActionRole = 'normal' | 'primary' | 'destructive';

/**
 * Wrapper of Button to display AlertActions, buttons for Alert component.
 * @slot empty - Label for the button, e.g.: <chirimoya-alert-action>Label</chirimoya-alert-action>
 */
@Component({
  tag: 'chirimoya-alert-action',
  styleUrl: 'chirimoya-alert-action.scss',
  shadow: true,
})
export class AlertAction implements BaseButton {
  /** indicates the disabled status, not intended to be changed */
  @Prop({ attribute: 'isDisabled' }) isDisabled = false;

  /** alignment of the children elements */
  @Prop({ attribute: 'alignContent' }) alignContent: AlignContent = 'center';

  /** role for the alert action */
  @Prop({ attribute: 'role' }) role: AlertActionRole = 'normal';

  render() {
    const alertActionClasses = {
      'base-button': true,
      'chirimoya-alert-action': true,
      'is-primary': this.role === 'primary',
      'is-normal': this.role === 'normal',
      'is-destructive': this.role === 'destructive',
      [`align-${this.alignContent}`]: true,
    };
    return (
      <button class={alertActionClasses}>
        <span class="chirimoya-alert-action-content">
          <slot />
        </span>
      </button>
    );
  }
}
