import { Component, h, Prop, Element } from '@stencil/core';
import classNames from 'classnames';
/**
 * `<chirimoya-cell>` primitive component
 * Wrapper for <div /> element, have six slot for a thumnail, a leading that can be a element(for example a icon),
 * a tittle and subtitle, switch and trailing that can be a element(for example a icon)
 *
 * @slot leading - Use for add a element before Title
 * @slot thumbnail - Use for add leading Thumbnail before Title
 * @slot title - Use for add Title
 * @slot subtitle - Use for add subtitle down title
 * @slot switch - Use for add input checkbox with shape of switch
 * @slot trailing - Use for add a element at the end of the cell
 */
@Component({
  tag: 'chirimoya-cell',
  styleUrl: 'chirimoya-cell.scss',
  shadow: true,
})
export class ChirimoyaCell {
  @Element() el: HTMLElement;

  /** boolean that indicates Status selected */
  @Prop({ attribute: 'selected' }) selected?: boolean = false;

  render() {
    const containerClass = classNames(
      'cell',
      this.selected && 'selected'
    );

    const flagSlotLeading = this.el.querySelector('[slot="leading"]');
    const flagSlotThumbnail = this.el.querySelector('[slot="thumbnail"]');
    const flagSlotTitle = this.el.querySelector('[slot="title"]');
    const flagSlotSubtitle = this.el.querySelector('[slot="subtitle"]');
    const flagSlotValue = this.el.querySelector('[slot="value"]');
    const flagSlotSwitch = this.el.querySelector('[slot="switch"]');
    const flagSlotTrailing = this.el.querySelector('[slot="trailing"]');

    return (
      <div class={containerClass}>
        { flagSlotLeading &&
          <div class="cell-icon">
            <slot name="leading"></slot>
          </div>
        }
        { flagSlotThumbnail &&
          <div class="cell-thumbnail">
            <slot name="thumbnail"></slot>
          </div>
        }
        { (flagSlotTitle || flagSlotSubtitle) &&
          <div class="cell-content">
            { flagSlotTitle &&
              <p class="cell-title"><slot name="title"></slot></p>
            }
            {flagSlotSubtitle &&
              <p class="cell-subtitle"><slot name="subTitle"></slot></p>
            }
          </div>
        }
        { (flagSlotValue || flagSlotSwitch || flagSlotTrailing) &&
          <div class="cell-action">
            { flagSlotValue &&
              <p class="cell-text-action">
                <slot name="value"></slot>
              </p>
            }
            { flagSlotSwitch &&
              <div class="switch-container">
                <label class="switch-box">
                  <slot name="switch"></slot>
                </label>
              </div>
            }
            { flagSlotTrailing &&
              <div class="trailing-content">
                <slot name="trailing"></slot>
              </div>
            }
          </div>
        }
      </div>
    );
  }
}
