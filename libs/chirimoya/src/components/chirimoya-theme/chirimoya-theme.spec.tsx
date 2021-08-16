import { newSpecPage } from '@stencil/core/testing';
import { ChirimoyaTheme } from './chirimoya-theme';

describe('chirimoya-theme', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [ChirimoyaTheme],
      html: '<chirimoya-theme>Hello</chirimoya-theme>',
    });
    expect(root).toEqualHtml(`
      <chirimoya-theme>
        Hello
      </chirimoya-theme>
    `);
  });
});
