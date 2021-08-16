import { newE2EPage } from '@stencil/core/testing';

describe('chirimoya-user', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<chirimoya-root-menu></chirimoya-root-menu>');
    const element = await page.find('chirimoya-root-menu');
    expect(element).toHaveClass('hydrated');
  });

  it('renders changes to the name data', async () => {
    const page = await newE2EPage();

    await page.setContent('<chirimoya-root-menu></chirimoya-root-menu>');
    const component = await page.find('chirimoya-root-menu');
    const element = await page.find('chirimoya-root-menu >>> div');
    expect(element.textContent).toEqual(`Hello, World! I'm `);

    component.setProperty('isOpen', 'true');
    await page.waitForChanges();
    expect(component).toHaveClass('--show-menu');
  });
});
