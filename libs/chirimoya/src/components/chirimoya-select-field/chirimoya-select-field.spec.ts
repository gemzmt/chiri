import { newSpecPage } from '@stencil/core/testing';
import { ChirimoyaSelectField } from './chirimoya-select-field';

describe('chirimoya-select-field', () => {
  it('renders a basic select', async () => {
    const { root } = await newSpecPage({
      components: [ChirimoyaSelectField],
      html: `
      <chirimoya-select-field>
        <option value="value">Label</option>
        <option value="value2">Label2</option>
      </chirimoya-select-field>
      `,
    });
    expect(root).toEqualHtml(`
      <chirimoya-select-field>
        <mock:shadow-root>
          <label class="select-field">
            <span class="chirimoya-select-wrapper">
              <select class="chirimoya-select">
              </select>
              <primaries-icon class="chirimoya-select-arrow" icon="ChevronDown" size="20"></primaries-icon>
            </span>
            <slot></slot>
          </label>
        </mock:shadow-root>
        <option value="value">
          Label
        </option>
        <option value="value2">
          Label2
        </option>
      </chirimoya-select-field>
    `);
  });

  it('renders a select with a placeholder', async () => {
    const { root } = await newSpecPage({
      components: [ChirimoyaSelectField],
      html: `
      <chirimoya-select-field placeholder="Placeholder">
        <option value="value">Label</option>
        <option value="value2">Label2</option>
      </chirimoya-select-field>
      `,
    });
    expect(root).toEqualHtml(`
      <chirimoya-select-field placeholder="Placeholder">
        <mock:shadow-root>
          <label class="select-field">
            <span class="chirimoya-select-wrapper">
              <select class="chirimoya-select">
                <option selected disabled>Placeholder</option>
              </select>
              <primaries-icon class="chirimoya-select-arrow" icon="ChevronDown" size="20"></primaries-icon>
            </span>
            <slot></slot>
          </label>
        </mock:shadow-root>
        <option value="value">
          Label
        </option>
        <option value="value2">
          Label2
        </option>
      </chirimoya-select-field>
    `);
  });

  it('renders a select with label and placeholder', async () => {
    const { root } = await newSpecPage({
      components: [ChirimoyaSelectField],
      html: `
      <chirimoya-select-field placeholder="Placeholder" label="Label">
        <option value="value">Label</option>
        <option value="value2">Label2</option>
      </chirimoya-select-field>
      `,
    });
    expect(root).toEqualHtml(`
      <chirimoya-select-field placeholder="Placeholder" label="Label">
        <mock:shadow-root>
          <label class="select-field select-field-label-active">
            <p class="select-field-label">Label</p>
            <span class="chirimoya-select-wrapper">
              <select class="chirimoya-select">
                <option selected disabled>Placeholder</option>
              </select>
              <primaries-icon class="chirimoya-select-arrow" icon="ChevronDown" size="20"></primaries-icon>
            </span>
            <slot></slot>
          </label>
        </mock:shadow-root>
        <option value="value">
          Label
        </option>
        <option value="value2">
          Label2
        </option>
      </chirimoya-select-field>
    `);
  });

  it('renders a select with label, placeholder and with error', async () => {
    const { root } = await newSpecPage({
      components: [ChirimoyaSelectField],
      html: `
      <chirimoya-select-field placeholder="Placeholder" label="Label" hasError>
        <option value="value">Label</option>
        <option value="value2">Label2</option>
      </chirimoya-select-field>
      `,
    });
    expect(root).toEqualHtml(`
      <chirimoya-select-field placeholder="Placeholder" label="Label" hasError>
        <mock:shadow-root>
          <label class="select-field select-field-label-active select-field-error">
            <p class="select-field-label">Label</p>
            <span class="chirimoya-select-wrapper">
              <select class="chirimoya-select">
                <option selected disabled>Placeholder</option>
              </select>
              <primaries-icon class="chirimoya-select-arrow" icon="ChevronDown" size="20"></primaries-icon>
            </span>
            <slot></slot>
          </label>
        </mock:shadow-root>
        <option value="value">
          Label
        </option>
        <option value="value2">
          Label2
        </option>
      </chirimoya-select-field>
    `);
  });

  it('renders a select with label, placeholder and with error', async () => {
    const { root } = await newSpecPage({
      components: [ChirimoyaSelectField],
      html: `
      <chirimoya-select-field placeholder="Placeholder" label="Label" disabled>
        <option value="value">Label</option>
        <option value="value2">Label2</option>
      </chirimoya-select-field>
      `,
    });
    expect(root).toEqualHtml(`
      <chirimoya-select-field placeholder="Placeholder" label="Label" disabled>
        <mock:shadow-root>
          <label class="select-field select-field-label-active select-field-disabled">
            <p class="select-field-label">Label</p>
            <span class="chirimoya-select-wrapper">
              <select class="chirimoya-select" disabled>
                <option selected disabled>Placeholder</option>
              </select>
              <primaries-icon class="chirimoya-select-arrow" icon="ChevronDown" size="20"></primaries-icon>
            </span>
            <slot></slot>
          </label>
        </mock:shadow-root>
        <option value="value">
          Label
        </option>
        <option value="value2">
          Label2
        </option>
      </chirimoya-select-field>
    `);
  });
});
