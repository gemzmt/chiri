import { newE2EPage } from '@stencil/core/testing';

describe('chirimoya-navigation-item', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<chirimoya-navigation-item></chirimoya-navigation-item>');
    const element = await page.find('chirimoya-navigation-item');
    expect(element).toHaveClass('hydrated');
  });

  it('renders changes to the name data', async () => {
    const page = await newE2EPage();

    await page.setContent('<chirimoya-navigation-item></chirimoya-navigation-item>');
    const component = await page.find('chirimoya-navigation-item');
    const element = await page.find('chirimoya-navigation-item >>> div');
    expect(element.textContent).toEqual(`Hello, World! I'm `);

    component.setProperty('first', 'James');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`Hello, World! I'm James`);

    component.setProperty('last', 'Quincy');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`Hello, World! I'm James Quincy`);

    component.setProperty('middle', 'Earl');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`Hello, World! I'm James Earl Quincy`);
  });
});
