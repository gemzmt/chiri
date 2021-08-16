import { Component, h, Prop } from '@stencil/core';

/**
 * `<chirimoya-form-cell>` complex component
 * Form Cell component wich supports text, select and form fields, and also other features like:
 * handling errors display and a slot for tooltip.
 *
 * @slot form-control - <text-field/>, <select-field/> or <file-field/> - used to add the form type element.
 * @slot trailing - adds an element at the end of the cell.
 */
@Component({
  tag: 'chirimoya-form-cell',
  styleUrl: 'chirimoya-form-cell.scss',
  shadow: true,
})
export class ChirimoyaFormCell {

  /** text of the error message of the field. */
  @Prop({attribute: 'errorText'}) errorText: string;
  /** boolean that indicates if the form-cell should display the error alert */
  @Prop({attribute: 'hasError'}) hasError: boolean;

  render() {
    return (
      <div class="form-cell-container">
        <div class="form-cell-body">
          <div class="form-cell-body-leading">
            <slot name="form-control"/>
            {this.hasError && <div class="form-cell-error"><primaries-icon icon="Error" class="icon-error"/><span>{this.errorText}</span></div>}
          </div>
          <slot name="trailing"/>
        </div>
      </div>
    );
  }
}
