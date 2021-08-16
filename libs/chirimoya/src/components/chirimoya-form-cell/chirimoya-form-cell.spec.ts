import { newSpecPage } from '@stencil/core/testing';
import { ChirimoyaFormCell } from './chirimoya-form-cell';

describe('chirimoya-text-field', () => {
  it('renders a basic form cell', async () => {
    const { root } = await newSpecPage({
      components: [ChirimoyaFormCell],
      html: `
      <chirimoya-form-cell>
      </chirimoya-form-cell>
      `,
    });
    expect(root).toEqualHtml(`
      <chirimoya-form-cell>
        <mock:shadow-root>
        <div class="form-cell-container">
          <div class="form-cell-body">
            <div class="form-cell-body-leading">
              <slot name="form-control"></slot>
            </div>
            <slot name="trailing"/>
          </div>
        </div>
        </mock:shadow-root>
      </chirimoya-form-cell>
    `);
  });
  const errorText = 'Text';
  it('renders a form cell with error', async () => {
    const { root } = await newSpecPage({
      components: [ChirimoyaFormCell],
      html: `
      <chirimoya-form-cell hasError errorText="Text">
      </chirimoya-form-cell>
      `,
    });
    expect(root).toEqualHtml(`
      <chirimoya-form-cell errorText=${errorText} hasError="">
        <mock:shadow-root>
        <div class="form-cell-container">
          <div class="form-cell-body">
            <div class="form-cell-body-leading">
              <slot name="form-control"></slot>
              <div class="form-cell-error">
                <primaries-icon icon="Error" class="icon-error"></primaries-icon>
                <span>${errorText}</span>
              </div>
            </div>
            <slot name="trailing"/>
          </div>
        </div>
        </mock:shadow-root>
      </chirimoya-form-cell>
    `);
  });
});
