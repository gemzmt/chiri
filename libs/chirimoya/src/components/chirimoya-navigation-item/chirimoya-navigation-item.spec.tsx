import { newSpecPage } from '@stencil/core/testing';
import { NavigationItem } from './chirimoya-navigation-item';

describe('chirimoya-navigation-item', () => {
  it('renders a normal, bordered navigation item', async () => {
    const { root } = await newSpecPage({
      components: [NavigationItem],
      html: `
        <chirimoya-navigation-item>
          Label
        </chirimoya-navigation-item>
      `,
    });

    expect(root).toEqualHtml(`
      <chirimoya-navigation-item>
        <mock:shadow-root>
          <button class="align-left base-button chirimoya-navigation-item is-bordered is-normal">
            <span class="base-button-content">
              <slot name="leading"></slot>
              <slot></slot>
              <slot name="trailing"></slot>
            </span>
          </button>
        </mock:shadow-root>
        Label
      </chirimoya-navigation-item>
    `);
  });

  it('renders a normal, bordered, selected navigation item', async () => {
    const { root } = await newSpecPage({
      components: [NavigationItem],
      html: `
        <chirimoya-navigation-item isselected>
          Label
        </chirimoya-navigation-item>
      `,
    });

    expect(root).toEqualHtml(`
      <chirimoya-navigation-item isselected>
        <mock:shadow-root>
          <button class="align-left base-button chirimoya-navigation-item is-bordered is-normal is-selected">
            <span class="base-button-content">
              <slot name="leading"></slot>
              <slot></slot>
              <slot name="trailing"></slot>
            </span>
          </button>
        </mock:shadow-root>
        Label
      </chirimoya-navigation-item>
    `);
  });

  it('renders a normal, bordered, disabled navigation item', async () => {
    const { root } = await newSpecPage({
      components: [NavigationItem],
      html: `
        <chirimoya-navigation-item isdisabled>
          Label
        </chirimoya-navigation-item>
      `,
    });

    expect(root).toEqualHtml(`
      <chirimoya-navigation-item isdisabled>
        <mock:shadow-root>
          <button class="align-left base-button chirimoya-navigation-item is-bordered is-normal is-disabled" disabled>
            <span class="base-button-content">
              <slot name="leading"></slot>
              <slot></slot>
              <slot name="trailing"></slot>
            </span>
          </button>
        </mock:shadow-root>
        Label
      </chirimoya-navigation-item>
    `);
  });

  it('renders a primary, bordered navigation item', async () => {
    const { root } = await newSpecPage({
      components: [NavigationItem],
      html: `
        <chirimoya-navigation-item navrole="primary">
          Label
        </chirimoya-navigation-item>
      `,
    });

    expect(root).toEqualHtml(`
      <chirimoya-navigation-item navrole="primary">
        <mock:shadow-root>
          <button class="align-left base-button chirimoya-navigation-item is-bordered is-primary">
            <span class="base-button-content">
              <slot name="leading"></slot>
              <slot></slot>
              <slot name="trailing"></slot>
            </span>
          </button>
        </mock:shadow-root>
        Label
      </chirimoya-navigation-item>
    `);
  });

  it('renders a primary, bordered, selected navigation item', async () => {
    const { root } = await newSpecPage({
      components: [NavigationItem],
      html: `
        <chirimoya-navigation-item navrole="primary" isselected>
          Label
        </chirimoya-navigation-item>
      `,
    });

    expect(root).toEqualHtml(`
      <chirimoya-navigation-item navrole="primary" isselected>
        <mock:shadow-root>
          <button class="align-left base-button chirimoya-navigation-item is-bordered is-primary is-selected">
            <span class="base-button-content">
              <slot name="leading"></slot>
              <slot></slot>
              <slot name="trailing"></slot>
            </span>
          </button>
        </mock:shadow-root>
        Label
      </chirimoya-navigation-item>
    `);
  });

  it('renders a primary, bordered, disabled navigation item', async () => {
    const { root } = await newSpecPage({
      components: [NavigationItem],
      html: `
        <chirimoya-navigation-item navrole="primary" isdisabled>
          Label
        </chirimoya-navigation-item>
      `,
    });

    expect(root).toEqualHtml(`
      <chirimoya-navigation-item navrole="primary" isdisabled>
        <mock:shadow-root>
          <button class="align-left base-button chirimoya-navigation-item is-bordered is-primary is-disabled" disabled>
            <span class="base-button-content">
              <slot name="leading"></slot>
              <slot></slot>
              <slot name="trailing"></slot>
            </span>
          </button>
        </mock:shadow-root>
        Label
      </chirimoya-navigation-item>
    `);
  });
});
