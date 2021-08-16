import { newE2EPage } from '@stencil/core/testing';

describe('chirimoya-cell', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<chirimoya-cell></chirimoya-cell>');

    const element = await page.find('chirimoya-cell');
    expect(element).toHaveClass('hydrated');
  });
});
