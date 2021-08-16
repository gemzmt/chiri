import { newSpecPage } from '@stencil/core/testing';
import { AlertAction } from '../../chirimoya-alert-action/chirimoya-alert-action';

describe('chirimoya-alert-action', () => {
  it('renders a normal alert action', async () => {
    const { root } = await newSpecPage({
      components: [AlertAction],
      html: `
        <chirimoya-alert-action>
          Label
        </chirimoya-alert-action>
      `,
    });

    expect(root).toEqualHtml(`
      <chirimoya-alert-action>
        <mock:shadow-root>
          <button class="align-center base-button chirimoya-alert-action is-normal">
            <span class="chirimoya-alert-action-content">
              <slot></slot>
            </span>
          </button>
        </mock:shadow-root>
        Label
      </chirimoya-alert-action>
    `);
  });

  it('renders a primary alert action', async () => {
    const { root } = await newSpecPage({
      components: [AlertAction],
      html: `
        <chirimoya-alert-action role="primary">
          Label
        </chirimoya-alert-action>
      `,
    });

    expect(root).toEqualHtml(`
      <chirimoya-alert-action role="primary">
        <mock:shadow-root>
          <button class="align-center base-button chirimoya-alert-action is-primary">
            <span class="chirimoya-alert-action-content">
              <slot></slot>
            </span>
          </button>
        </mock:shadow-root>
        Label
      </chirimoya-alert-action>
    `);
  });

  it('renders a destructive alert action', async () => {
    const { root } = await newSpecPage({
      components: [AlertAction],
      html: `
        <chirimoya-alert-action role="destructive">
          Label
        </chirimoya-alert-action>
      `,
    });

    expect(root).toEqualHtml(`
      <chirimoya-alert-action role="destructive">
        <mock:shadow-root>
          <button class="align-center base-button chirimoya-alert-action is-destructive">
            <span class="chirimoya-alert-action-content">
              <slot></slot>
            </span>
          </button>
        </mock:shadow-root>
        Label
      </chirimoya-alert-action>
    `);
  });
});
