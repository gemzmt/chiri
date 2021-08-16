import { Component, Element, Event, EventEmitter, h, Prop } from '@stencil/core';

/**
 * Alert component, used to display popup messages with multiple options.
 * With two options (and small labels) are displayed horizontally,
 * with more options (or two with big labels) are displayed vertically.
 *
 * @slot title - the title for the alert. Expected: <p></p>
 * @slot message - message for the alert. Expected: <p></p>
 * @slot actions - options for the alert. Expected: <chirimoya-alert-action></chirimoya-alert-action>
 */
@Component({
  tag: 'chirimoya-alert',
  styleUrl: 'chirimoya-alert.scss',
  shadow: true,
})
export class Alert {
  /** internal reference to alert div, to set listeners */
  divAlert: HTMLDivElement;

  @Element() hostElement: HTMLElement;

  /** set if the alert is open */
  @Prop({ attribute: 'isVisible', reflect: true }) isVisible: boolean = false;
  /** emit event on showing alert */
  @Event() show: EventEmitter;
  /** emit event on hiding alert */
  @Event() hide: EventEmitter;

  componentDidLoad() {
    this.divAlert.addEventListener('transitionend', () => {
      if (this.isVisible) {
        this.show.emit('show');
      } else {
        this.hide.emit('hide');
      }
    });
  }

  render() {
    const alertClasses = {
      'chirimoya-alert': true,
      'chirimoya-alert__show': this.isVisible,
      'chirimoya-alert__hide': !this.isVisible,
    };

    const actionsSlot = this.hostElement.querySelectorAll(`[slot="actions"]`);
    const actionClasses = {
      'chirimoya-alert__actions': true,
      'chirimoya-alert__actions-vertical': actionsSlot.length > 2,
      'chirimoya-alert__actions-horizontal': actionsSlot.length <= 2,
    };

    return (
      <div class={alertClasses} ref={(el) => (this.divAlert = el as HTMLDivElement)}>
        <div class="chirimoya-alert__titleMessage">
          <div class="chirimoya-alert__title">
            <slot name="title" />
          </div>
          <div class="chirimoya-alert__message">
            <slot name="message" />
          </div>
        </div>
        <div class={actionClasses}>
          <slot name="actions" />
        </div>
      </div>
    );
  }
}
