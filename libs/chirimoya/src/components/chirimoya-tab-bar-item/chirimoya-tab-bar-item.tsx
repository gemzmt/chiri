import { Component, Element, h, Prop } from '@stencil/core';
import { AlignContent, BaseButton } from '../../utils/internals/button.model';

@Component({
  tag: 'chirimoya-tab-bar-item',
  styleUrl: 'chirimoya-tab-bar-item.scss',
  shadow: true,
})
export class ChirimoyaTabBarItem implements BaseButton {
  @Element() el: HTMLElement;

  /** indicates if the label is active or inactive */
  @Prop({ attribute: 'isActive', reflect: true }) isActive: boolean = false;

  /** href for anchor tag */
  @Prop() href: string;

  /** target for anchor tag */
  @Prop() target: string;

   /** indicates the disabled status */
  @Prop({ attribute: 'isDisabled' }) isDisabled = false;

  /** alignment of the children elements */
  @Prop({ attribute: 'alignContent' }) alignContent: AlignContent = 'center';

  render() {
    const tabContainerClasses = {
      'chiri-tab-bar-container': true,
      'is-active-container': this.isActive,
    };

    const tabClasses = {
      'base-button': true,
      'chiri-tab-bar-item': true,
      [`align-${this.alignContent}`]: true,
    }

    return (
      <div class={tabContainerClasses}>
        <a class={tabClasses} href={this.href} target={this.target}>
          <span class='base-button-content'>
            <slot />
          </span>
        </a>
      </div>
    );
  }
}
