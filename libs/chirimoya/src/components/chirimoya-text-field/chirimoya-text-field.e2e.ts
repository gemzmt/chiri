import { newE2EPage } from '@stencil/core/testing';

describe('chirimoya-text-field', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<chirimoya-text-field></chirimoya-text-field>');
    const element = await page.find('chirimoya-text-field');
    expect(element).toHaveClass('hydrated');
  });
});
