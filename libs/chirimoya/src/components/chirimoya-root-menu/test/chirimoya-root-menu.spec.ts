import { newSpecPage } from '@stencil/core/testing';
import { RootMenu } from '../chirimoya-root-menu';

describe('Chirimoya Root Menu', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [RootMenu],
      html: `<chirimoya-root-menu>
      <primaries-icon slot="menu-icon" icon="Coffee" class="menu-icon"/>

      <p slot="menu-title">Chiri</p>

      <chirimoya-button
        borderColor="border-transparent"
        backgroundHoverColor="hover-bg-lightgrey"
        fontColor="font-white"
        backgroundSelectedColor="selected-bg-tint"
        isSelected
        isFullWidth
        onClick={(e:Event) => clickLinkMenu(e)}
        class="menu-item --selected"
        slot="menu-nav-item"
      >
        <span class="button-text">
          <primaries-icon icon="PaperTowels" class="menu-item-icon"/>
          <span>Menu 1</span>
        </span>
      </chirimoya-button>
      <chirimoya-button
        borderColor="border-transparent"
        backgroundHoverColor="hover-bg-lightgrey"
        backgroundSelectedColor="selected-bg-tint"
        fontColor="font-dark"
        isFullWidth
        onClick={(e:Event) => clickLinkMenu(e)}
        class="menu-item"
        slot="menu-nav-item"
      >
        <span class="button-text">
          <primaries-icon icon="PaperTowels" class="menu-item-icon"/>
          <span>Menu 2</span>
        </span>
      </chirimoya-button>
      <chirimoya-button
        borderColor="border-transparent"
        backgroundHoverColor="hover-bg-lightgrey"
        backgroundSelectedColor="selected-bg-tint"
        fontColor="font-dark"
        isFullWidth
        onClick={(e:Event) => clickLinkMenu(e)}
        class="menu-item"
        slot="menu-nav-item"
      >
        <span class="button-text">
          <primaries-icon icon="PaperTowels" class="menu-item-icon"/>
          <span>Menu 3</span>
        </span>
      </chirimoya-button>
    </chirimoya-root-menu>`,
    });
    expect(root).toEqualHtml(`
      <chirimoya-root-menu>
        <mock:shadow-root>
          <div class="root-menu">
            <section class="--no-margin-bottom root-menu__leading">
              <div class="root-menu__close">
                <chirimoya-button class="menu-item">
                  <primaries-icon class="root-menu__close-icon" icon="Close" size="34"></primaries-icon>
                </chirimoya-button>
              </div>
              <div class="root-menu__icon">
                <slot name="menu-icon"></slot>
              </div>
              <div class="root-menu__title">
                <slot name="menu-title"></slot>
              </div>
              <nav class="root-menu__nav">
                <ul>
                  <li>
                    <slot name="menu-nav-item"></slot>
                  </li>
                </ul>
              </nav>
            </section>
            <section class="root-menu__trailing">
              <div class="--no-margin-bottom root-menu__account">
                <div class="root-menu__user">
                  <div class="--no-margin-bottom root-menu__user-info">
                    <slot name="menu-user-info"></slot>
                  </div>
                  <ul class="root-menu__user-nav">
                    <li>
                      <slot name="menu-user-nav-item"></slot>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="root-menu__footer">
                <div class="root-menu__footer-nav">
                  <slot name="menu-footer-nav"></slot>
                </div>
                <div class="root-menu__footer-copyright">
                  <slot name="menu-footer-copyright"></slot>
                </div>
              </div>
            </section>
          </div>
        </mock:shadow-root>
        <primaries-icon slot="menu-icon" icon="Coffee" class="menu-icon"/>

        <p slot="menu-title">Chiri</p>

        <chirimoya-button
          borderColor="border-transparent"
          backgroundHoverColor="hover-bg-lightgrey"
          fontColor="font-white"
          backgroundSelectedColor="selected-bg-tint"
          isSelected
          isFullWidth
          onClick={(e:Event) => clickLinkMenu(e)}
          class="menu-item --selected"
          slot="menu-nav-item"
        >
          <span class="button-text">
            <primaries-icon icon="PaperTowels" class="menu-item-icon"/>
            <span>Menu 1</span>
          </span>
        </chirimoya-button>
        <chirimoya-button
          borderColor="border-transparent"
          backgroundHoverColor="hover-bg-lightgrey"
          backgroundSelectedColor="selected-bg-tint"
          fontColor="font-dark"
          isFullWidth
          onClick={(e:Event) => clickLinkMenu(e)}
          class="menu-item"
          slot="menu-nav-item"
        >
          <span class="button-text">
            <primaries-icon icon="PaperTowels" class="menu-item-icon"/>
            <span>Menu 2</span>
          </span>
        </chirimoya-button>
        <chirimoya-button
          borderColor="border-transparent"
          backgroundHoverColor="hover-bg-lightgrey"
          backgroundSelectedColor="selected-bg-tint"
          fontColor="font-dark"
          isFullWidth
          onClick={(e:Event) => clickLinkMenu(e)}
          class="menu-item"
          slot="menu-nav-item"
        >
          <span class="button-text">
            <primaries-icon icon="PaperTowels" class="menu-item-icon"/>
            <span>Menu 3</span>
          </span>
        </chirimoya-button>
      </chirimoya-root-menu>
    `);
  });
});
