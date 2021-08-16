import { Component, h, Prop } from '@stencil/core';

type ListSectionVariant = 'normal' | 'inset';

@Component({
    tag: 'chirimoya-list-section',
    styleUrl: 'chirimoya-list-section.scss',
    shadow: true,
})
export class ChirimoyaListSection {

    @Prop({ attribute: 'variant' }) variant: ListSectionVariant = 'normal';

    render() {
        const listSectionClasses = {
            'list-section': true,
            'inset': this.variant === "inset",
        };
        const cellContainerClasess = {
            'cell-container': true,
            'inset': this.variant === "inset",
        }
        return (
            <div class={listSectionClasses}>
                <p class="list-section-header"><slot name="header" /></p>
                <div class={cellContainerClasess}>
                    <slot />
                </div>
                <p class="list-section-footer"><slot name="footer" /></p>
            </div>
        );
    }
}
