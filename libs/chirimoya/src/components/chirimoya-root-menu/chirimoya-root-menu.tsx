import { Component, h, Prop, Event, EventEmitter, Element, State } from '@stencil/core';
import { HTMLStencilElement } from "@stencil/core/internal";

/**
 * @slot menu-icon - Use for add main icon above Title
 * @slot menu-title - Use for add main title menu
 * @slot menu-nav-item - Use for add multiple items to the menu
 * @slot menu-user-info - Use for add user info component
 * @slot menu-user-nav-item - Use for add main title menu
 * @slot menu-footer-nav - Use for add multiple links of footer section
 * @slot menu-footer-copyright - Use for add text of copyright on footer section
 */

@Component({
  tag: 'chirimoya-root-menu',
  styleUrl: 'chirimoya-root-menu.scss',
  shadow: true
})
export class RootMenu {
  slotsNames: any = {
    'icon': 'menu-icon',
    'title': 'menu-title',
    'navItem': 'menu-nav-item',
    'userInfo': 'menu-user-info',
    'userNavItem': 'menu-user-nav-item',
    'footerNav': 'menu-footer-nav',
    'footerCopyright': 'menu-footer-copyright'
  };

  @State() hasUserInfo = false;
  @State() hasUserNavItem = false;
  @State() hasAccount = false;
  @State() hasFooterNav = false;
  @State() hasFooterCopyright = false;
  @State() hasFooter = false;

  /** set if the menu is open */
  @Prop({ attribute: 'isOpen', reflect: true}) isOpen: boolean = false;
  /** emit event on Close menu*/
  @Event() closeMenu: EventEmitter;
  
  clickCloseMenu = () => {
    this.closeMenu.emit('close');
    this.isOpen = false;
  }

  @Element() hostElement: HTMLStencilElement;

  hasSlot = (slotName: string) => {
    return !!this.hostElement.querySelector(`[slot="${slotName}"]`);
  }

  handleSlotInitial = () => {
    this.handleSlotChangeUserInfo();
    this.handleSlotChangeUserNavItem();
    this.handleSlotChangeFooterNav();
    this.handleSlotChangeFooterCopyright();
  }

  handleSlotChangeUserInfo = () => {
    this.hasUserInfo = this.hasSlot(this.slotsNames.userInfo);
    this.hasAccount = this.hasUserInfo || this.hasUserNavItem;
  }

  handleSlotChangeUserNavItem = () => {
    this.hasUserNavItem = this.hasSlot(this.slotsNames.userNavItem);
    this.hasAccount = this.hasUserNavItem || this.hasUserInfo;
  }

  handleSlotChangeFooterNav = () => {
    this.hasFooterNav = this.hasSlot(this.slotsNames.footerNav);
    this.hasFooter = this.hasFooterNav || this.hasFooterCopyright;
  }

  handleSlotChangeFooterCopyright = () => {
    this.hasFooterCopyright = this.hasSlot(this.slotsNames.footerCopyright);
    this.hasFooter = this.hasFooterCopyright  || this.hasFooterNav;
  }

  componentDidLoad() {
    this.handleSlotInitial();
  }
  
  render() {
    return (
      <div
      class={{
        'root-menu': true,
        '--show-menu': this.isOpen
      }}>
        <section
        class={{
          'root-menu__leading': true,
          '--no-margin-bottom': !this.hasFooter && !this.hasAccount
        }}
        >
          <div class="root-menu__close">
            <chirimoya-button
              onClick={this.clickCloseMenu}
              class="menu-item"
            >
              <primaries-icon icon="Close" class="root-menu__close-icon" size="34"/>
            </chirimoya-button>
          </div>
          <div class="root-menu__icon">
            <slot name={this.slotsNames.icon}></slot>
          </div>
          <div class="root-menu__title">
            <slot name={this.slotsNames.title}></slot>
          </div>
          <nav class="root-menu__nav">
            <ul>
              <li>
                <slot name={this.slotsNames.navItem}></slot>
              </li>
            </ul>
          </nav>
        </section>
        <section class="root-menu__trailing">
          <div
          class={{
            'root-menu__account': true,
            '--show': this.hasAccount,
            '--no-margin-bottom': !this.hasFooter
          }}>
            <div class="root-menu__user">
              <div
              class={{
                'root-menu__user-info': true,
                '--show': this.hasUserInfo,
                '--no-margin-bottom': !this.hasUserNavItem
              }}>
                <slot name={this.slotsNames.userInfo} onSlotchange={this.handleSlotChangeUserInfo}></slot>
              </div>
              <ul class="root-menu__user-nav">
                <li>
                  <slot name={this.slotsNames.userNavItem} onSlotchange={this.handleSlotChangeUserNavItem}></slot>
                </li>
              </ul>
            </div>
          </div>
          <div class="root-menu__footer">
            <div
            class={{
              'root-menu__footer-nav': true,
              '--show': this.hasFooterNav,
            }}>
              <slot name={this.slotsNames.footerNav} onSlotchange={this.handleSlotChangeFooterNav}></slot>
            </div>
            <div class="root-menu__footer-copyright">
              <slot name={this.slotsNames.footerCopyright} onSlotchange={this.handleSlotChangeFooterCopyright}></slot>
            </div>
          </div>          
        </section>
      </div>
    );
  }
}
