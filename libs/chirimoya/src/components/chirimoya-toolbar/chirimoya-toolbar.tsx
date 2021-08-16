import { Component, h } from '@stencil/core';

@Component({
  tag: 'chirimoya-toolbar',
  styleUrl: 'chirimoya-toolbar.scss',
  shadow: true,
})
export class Toolbar {
  render() {
    return (
      <div class="toolbar-container">
        <section class="toolbar-leading">
          <slot name="leading"></slot>
        </section>
        <section class="toolbar-trailing">
          <slot name="trailing"></slot>
        </section>
      </div>
    );
  }
}
