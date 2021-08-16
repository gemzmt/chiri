import { newSpecPage } from '@stencil/core/testing';
import { UserInfo } from '../chirimoya-user-info';

describe('Chirimoya User Info', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [UserInfo],
      html: '<chirimoya-user-info><img slot="user-avatar" src="https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-alt-512.png"/><p slot="user-name">Name</p><p slot="user-email">Email</p></chirimoya-user-info>',
    });
    expect(root).toEqualHtml(`
      <chirimoya-user-info>
        <mock:shadow-root>
          <div class="user-info">
            <div class="user-info__avatar">
              <slot name="user-avatar"></slot>
            </div>
            <div class="user-info__data">
              <div class="user-info__data-email">
                <slot name="user-email"></slot>
              </div>
              <div class="user-info__data-name">
                <slot name="user-name"></slot>
              </div>
            </div>
          </div>
        </mock:shadow-root>
        <img slot="user-avatar" src="https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-alt-512.png">
        <p slot="user-name">
          Name
        </p>
        <p slot="user-email">
          Email
        </p>
      </chirimoya-user-info>
    `);
  });
});
