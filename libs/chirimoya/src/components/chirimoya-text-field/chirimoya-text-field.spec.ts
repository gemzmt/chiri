import { newSpecPage } from '@stencil/core/testing';
import { ChirimoyaTextField } from './chirimoya-text-field';

const value = 'value';
const placeholder = 'Placeholder';
const label = 'Label';
describe('chirimoya-text-field', () => {
  it('renders a basic text field', async () => {
    const { root } = await newSpecPage({
      components: [ChirimoyaTextField],
      html: `
      <chirimoya-text-field value=${value}>
      </chirimoya-text-field>
      `,
    });
    expect(root).toEqualHtml(`
      <chirimoya-text-field value=${value}>
        <mock:shadow-root>
          <div class="text-field-container">
            <slot name="leading"></slot>
            <label class="text-field-body">
              <input class="text-field-input primary input-active" value=${value}>
            </label>
            <slot name="trailing"></slot>
          </div>
        </mock:shadow-root>
      </chirimoya-text-field>
    `);
  });

  it('renders a text field with label', async () => {
    const { root } = await newSpecPage({
      components: [ChirimoyaTextField],
      html: `
      <chirimoya-text-field label=${label}>
      </chirimoya-text-field>
      `,
    });
    expect(root).toEqualHtml(`
      <chirimoya-text-field value="" label=${label}>
        <mock:shadow-root>
          <div class="text-field-container">
            <slot name="leading"></slot>
            <label class="text-field-body">
              <input class="text-field-input primary label-active" value="">
              <p class="text-field-label tertiary">${label}</p>
            </label>
            <slot name="trailing"></slot>
          </div>
        </mock:shadow-root>
      </chirimoya-text-field>
    `);
  });

  it('renders a text field with placeholder', async () => {
    const { root } = await newSpecPage({
      components: [ChirimoyaTextField],
      html: `
      <chirimoya-text-field placeholder=${placeholder}>
      </chirimoya-text-field>
      `,
    });
    expect(root).toEqualHtml(`
      <chirimoya-text-field value="" placeholder=${placeholder}>
        <mock:shadow-root>
          <div class="text-field-container">
            <slot name="leading"></slot>
            <label class="text-field-body">
              <input class="text-field-input primary" value="" placeholder=${placeholder}>
            </label>
            <slot name="trailing"></slot>
          </div>
        </mock:shadow-root>
      </chirimoya-text-field>
    `);
  });

  it('renders a text field with static label', async () => {
    const { root } = await newSpecPage({
      components: [ChirimoyaTextField],
      html: `
      <chirimoya-text-field label=${label} staticLabel>
      </chirimoya-text-field>
      `,
    });
    expect(root).toEqualHtml(`
      <chirimoya-text-field value="" label=${label} staticLabel>
        <mock:shadow-root>
          <div class="text-field-container">
            <slot name="leading"></slot>
            <label class="text-field-body">
              <input class="text-field-input primary label-active label-static" value="">
              <p class="text-field-label tertiary">${label}</p>
            </label>
            <slot name="trailing"></slot>
          </div>
        </mock:shadow-root>
      </chirimoya-text-field>
    `);
  });

  it('sets the label to static if placeholder and label is provided', async () => {
    const { root } = await newSpecPage({
      components: [ChirimoyaTextField],
      html: `
      <chirimoya-text-field label=${label} placeholder=${placeholder}>
      </chirimoya-text-field>
      `,
    });
    expect(root).toEqualHtml(`
      <chirimoya-text-field value="" label=${label} placeholder=${placeholder}>
        <mock:shadow-root>
          <div class="text-field-container">
            <slot name="leading"></slot>
            <label class="text-field-body">
              <input class="text-field-input primary label-active label-static" value="" placeholder=${placeholder}>
              <p class="text-field-label tertiary">${label}</p>
            </label>
            <slot name="trailing"></slot>
          </div>
        </mock:shadow-root>
      </chirimoya-text-field>
    `);
  });

  it('render a text field with error', async () => {
    const { root } = await newSpecPage({
      components: [ChirimoyaTextField],
      html: `
      <chirimoya-text-field hasError>
      </chirimoya-text-field>
      `,
    });
    expect(root).toEqualHtml(`
      <chirimoya-text-field value="" hasError>
        <mock:shadow-root>
          <div class="text-field-container">
            <slot name="leading"></slot>
            <label class="text-field-body">
              <input class="text-field-input primary input-error" value="">
            </label>
            <slot name="trailing"></slot>
          </div>
        </mock:shadow-root>
      </chirimoya-text-field>
    `);
  });
});
