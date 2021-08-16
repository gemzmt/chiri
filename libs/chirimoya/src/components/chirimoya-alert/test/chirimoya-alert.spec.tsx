import { newSpecPage } from '@stencil/core/testing';
import { Alert } from '../chirimoya-alert';

describe('chirimoya-alert', () => {
  it('render a two action alert with short labels', async () => {
    const { root } = await newSpecPage({
      components: [Alert],
      html: `
        <chirimoya-alert isVisible="true">
          <p slot="title">Alert title</p>
          <p slot="message">The alert message goes here. It can grow multiple lines.</p>
          <chirimoya-alert-action slot="actions">Action</chirimoya-alert-action>
          <chirimoya-alert-action slot="actions">Action</chirimoya-alert-action>
        </chirimoya-alert>
      `,
    });

    expect(root).toEqualHtml(`
      <chirimoya-alert isvisible>
        <mock:shadow-root>
          <div class="chirimoya-alert chirimoya-alert__show">
            <div class="chirimoya-alert__titleMessage">
              <div class="chirimoya-alert__title">
                <slot name="title"></slot>
              </div>
              <div class="chirimoya-alert__message">
                <slot name="message"></slot>
              </div>
            </div>
            <div class="chirimoya-alert__actions chirimoya-alert__actions-horizontal">
              <slot name="actions"></slot>
            </div>
          </div>
        </mock:shadow-root>
        <p slot="title">Alert title</p>
        <p slot="message">The alert message goes here. It can grow multiple lines.</p>
        <chirimoya-alert-action slot="actions">Action</chirimoya-alert-action>
        <chirimoya-alert-action slot="actions">Action</chirimoya-alert-action>
      </chirimoya-alert>
    `);
  });

  it('renders a two action alert with a long label', async () => {
    const { root } = await newSpecPage({
      components: [Alert],
      html: `
        <chirimoya-alert isVisible="true">
          <p slot="title">Alert title</p>
          <p slot="message">The alert message goes here. It can grow multiple lines.</p>
          <chirimoya-alert-action slot="actions">Action with a very long text as label</chirimoya-alert-action>
          <chirimoya-alert-action slot="actions">Action</chirimoya-alert-action>
        </chirimoya-alert>
      `,
    });

    expect(root).toEqualHtml(`
      <chirimoya-alert isvisible>
        <mock:shadow-root>
          <div class="chirimoya-alert chirimoya-alert__show">
            <div class="chirimoya-alert__titleMessage">
              <div class="chirimoya-alert__title">
                <slot name="title"></slot>
              </div>
              <div class="chirimoya-alert__message">
                <slot name="message"></slot>
              </div>
            </div>
            <div class="chirimoya-alert__actions chirimoya-alert__actions-horizontal">
              <slot name="actions"></slot>
            </div>
          </div>
        </mock:shadow-root>
        <p slot="title">Alert title</p>
        <p slot="message">The alert message goes here. It can grow multiple lines.</p>
        <chirimoya-alert-action slot="actions">Action with a very long text as label</chirimoya-alert-action>
        <chirimoya-alert-action slot="actions">Action</chirimoya-alert-action>
      </chirimoya-alert>
    `);
  });

  it('render a four action alert', async () => {
    const { root } = await newSpecPage({
      components: [Alert],
      html: `
        <chirimoya-alert isVisible="true">
          <p slot="title">Alert title</p>
          <p slot="message">The alert message goes here. It can grow multiple lines.</p>
          <chirimoya-alert-action slot="actions">Action</chirimoya-alert-action>
          <chirimoya-alert-action slot="actions">Action</chirimoya-alert-action>
          <chirimoya-alert-action slot="actions">Action</chirimoya-alert-action>
          <chirimoya-alert-action slot="actions">Action</chirimoya-alert-action>
        </chirimoya-alert>
      `,
    });

    expect(root).toEqualHtml(`
      <chirimoya-alert isvisible>
        <mock:shadow-root>
          <div class="chirimoya-alert chirimoya-alert__show">
            <div class="chirimoya-alert__titleMessage">
              <div class="chirimoya-alert__title">
                <slot name="title"></slot>
              </div>
              <div class="chirimoya-alert__message">
                <slot name="message"></slot>
              </div>
            </div>
            <div class="chirimoya-alert__actions chirimoya-alert__actions-vertical">
              <slot name="actions"></slot>
            </div>
          </div>
        </mock:shadow-root>
        <p slot="title">Alert title</p>
        <p slot="message">The alert message goes here. It can grow multiple lines.</p>
        <chirimoya-alert-action slot="actions">Action</chirimoya-alert-action>
        <chirimoya-alert-action slot="actions">Action</chirimoya-alert-action>
        <chirimoya-alert-action slot="actions">Action</chirimoya-alert-action>
        <chirimoya-alert-action slot="actions">Action</chirimoya-alert-action>
      </chirimoya-alert>
    `);
  });
});
