import { newSpecPage } from '@stencil/core/testing';
import { ChirimoyaFileField } from '../chirimoya-file-field';

describe('chirimoya-file-field', () => {
  it('renders', async () => {
    const {root} = await newSpecPage({
      components: [ChirimoyaFileField],
      html: '<chirimoya-file-field></chirimoya-file-field>'
    });
    expect(root).toEqualHtml(`
      <chirimoya-file-field>
        <mock:shadow-root>
          <div class="file-field-container">
            <div class="file-field-thumbnail">
              <div class="file-field-thumbnail-preview"></div>
              <primaries-icon class="file-field-thumbnail-icon" icon="Folder"></primaries-icon>
            </div>
            <div class="file-field-leading">
              <input class="file-field-input" type="file">
              <div class="file-field-text-wrapper">
                <div class="file-field-text">
                  <label class="file-field-text-label"></label>
                  <p class="file-field-text-placeholder">
                    <span class="file-field-text-filename"></span>
                    <span class="file-field-text-filesize"></span>
                  </p>
                </div>
              </div>
            </div>
            <div class="file-field-trailing">
              <slot name="trailing-icon"></slot>
            </div>
          </div>
        </mock:shadow-root>
      </chirimoya-file-field>
    `);
  });
});

describe('chirimoya-file-field props label and placeholder', () => {
  it('renders', async () => {
    const {root} = await newSpecPage({
      components: [ChirimoyaFileField],
      html: '<chirimoya-file-field label="Label" placeholder="Elija"></chirimoya-file-field>'
    });
    expect(root).toEqualHtml(`
      <chirimoya-file-field label="Label" placeholder="Elija">
        <mock:shadow-root>
          <div class="file-field-container">
            <div class="file-field-thumbnail">
              <div class="file-field-thumbnail-preview"></div>
              <primaries-icon class="file-field-thumbnail-icon" icon="Folder"></primaries-icon>
            </div>
            <div class="file-field-leading">
              <input class="file-field-input" type="file">
              <div class="file-field-text-wrapper">
                <div class="file-field-text with-label">
                  <label class="file-field-text-label">
                    Label
                  </label>
                  <p class="file-field-text-placeholder">
                    <span class="file-field-text-filename">
                      Elija
                    </span>
                    <span class="file-field-text-filesize"></span>
                  </p>
                </div>
              </div>
            </div>
            <div class="file-field-trailing">
              <slot name="trailing-icon"></slot>
            </div>
          </div>
        </mock:shadow-root>
      </chirimoya-file-field>
    `);
  });
});
