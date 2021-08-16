import { newE2EPage } from '@stencil/core/testing';

describe('chirimoya-user-info', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<chirimoya-user-info></chirimoya-user-info>');
    const element = await page.find('chirimoya-user-info');
    expect(element).toHaveClass('hydrated');
  });
});
