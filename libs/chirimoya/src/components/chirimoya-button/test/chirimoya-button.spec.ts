import { newSpecPage } from '@stencil/core/testing';
import { Button } from '../chirimoya-button';

describe('chirimoya-button', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [Button],
      html: '<chirimoya-button>Hello world</chirimoya-button>',
    });

    expect(root).toEqualHtml(`
      <chirimoya-button class="chirimoya-button-host">
        <button class="base-button chirimoya-button align-center">
          <span class="base-button-content">
            Hello world
          </span>
        </button>
      </chirimoya-button>
    `);
  });
});
