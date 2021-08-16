import { Component, h } from '@stencil/core';

@Component({
  tag: 'chirimoya-tab-bar',
  styleUrl: 'chirimoya-tab-bar.scss',
  shadow: true,
})
export class TabBar {
  render() {
    return (
      <div class="chirimoya-tab-bar">
        <slot/>
      </div>
    );
  }
}
