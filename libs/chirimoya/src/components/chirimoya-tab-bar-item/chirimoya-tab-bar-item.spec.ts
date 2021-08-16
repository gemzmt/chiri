import { newSpecPage } from '@stencil/core/testing';
import { ChirimoyaTabBarItem } from './chirimoya-tab-bar-item';

describe('chirimoya-button', () => {
    it('render inactive tab bar item', async () => {
        const { root } = await newSpecPage({
            components: [ChirimoyaTabBarItem],
            html: `
            <chirimoya-tab-bar-item class="chiri-tab-bar-item" href="href" target="_blank">
                Tab title
            </chirimoya-tab-bar-item>`
        });
        expect(root).toEqualHtml(
            `<chirimoya-tab-bar-item class="chiri-tab-bar-item" href="href" target="_blank">
                <mock:shadow-root>
                    <div class="chiri-tab-bar-container">
                        <a class="align-center base-button chiri-tab-bar-item" href="href" target="_blank">
                            <span class="base-button-content">
                                <slot />
                            </span>   
                        </a>
                    </div>
                </mock:shadow-root>
                Tab title
            </chirimoya-tab-bar-item>`
        );
    });
    it('render active tab bar item', async () => {
        const { root } = await newSpecPage({
            components: [ChirimoyaTabBarItem],
            html: `
            <chirimoya-tab-bar-item class="chiri-tab-bar-item" href="href" target="_blank" isactive>
                Tab title
            </chirimoya-tab-bar-item>`
        });
        expect(root).toEqualHtml(
            `<chirimoya-tab-bar-item class="chiri-tab-bar-item" href="href" target="_blank" isactive>
                <mock:shadow-root>
                    <div class="chiri-tab-bar-container is-active-container">
                        <a class="align-center base-button chiri-tab-bar-item" href="href" target="_blank">
                            <span class="base-button-content">
                                <slot />
                            </span>   
                        </a>
                    </div>
                </mock:shadow-root>
                Tab title
            </chirimoya-tab-bar-item>`
        );
    });
});
