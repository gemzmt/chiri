import { Component, h } from '@stencil/core';

@Component({
  tag: 'chirimoya-user-info',
  styleUrl: 'chirimoya-user-info.scss',
  shadow: true,
})
export class UserInfo {
  render() {
    return (
      <div class="user-info">
        <div class="user-info__avatar">
          <slot name="user-avatar" />
        </div>

        <div class="user-info__data">
          <div class="user-info__data-email">
            <slot name="user-email" />
          </div>

          <div class="user-info__data-name">
            <slot name="user-name" />
          </div>
        </div>
      </div>
    );
  }
}
