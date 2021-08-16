import { Component, h, Prop } from '@stencil/core';
import { IName } from './icon-types';

/**
 * `<primaries-icon>` primitive component
 * Implements de svg icons on the primaries document
 */
@Component({
  tag: 'primaries-icon',
  shadow: true,
  styleUrl: 'primaries-icon.scss',
})
export class PrimariesIcon {
  /** name of the Icon, exactly as the figma */
  @Prop() icon: IName;

  /** size of the bounding box of the icon */
  @Prop() size: number = 24;

  render() {
    const iconName = 'primaries-' + this.icon;
    const size = this.size + 'px';

    return (
      <span style={{ width: size, height: size, fontSize: size, lineHeight: '1' }}>
        <i class={iconName} />
      </span>
    );
  }
}
