import { newSpecPage } from '@stencil/core/testing';
import { ChirimoyaCell } from './chirimoya-cell';

describe('chirimoya-cell', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ChirimoyaCell],
      html: `
      <chirimoya-cell>
        <span slot="title">Lorem ipsum dolor sit.</span>
      </chirimoya-cell>`,
    });
    expect(page.root).toEqualHtml(`
      <chirimoya-cell>
        <mock:shadow-root>
        <div class="cell">
          <div class="cell-content">
            <p class="cell-title">
              <slot name="title"></slot>
            </p>
          </div>
        </div>
        </mock:shadow-root>
        <span slot="title">
          Lorem ipsum dolor sit.
        </span>
      </chirimoya-cell>
    `);
  });
});
