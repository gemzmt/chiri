import { Component, Event, h, Prop, EventEmitter } from '@stencil/core';
import classNames from 'classnames';

type textColor = 'primary' | 'secondary' | 'tertiary'| 'quaternary';

/**
 * `<chirimoya-text-field>` primitive component
 * Wrapper for <input /> element providing with some extras like: animated placeholder wich turns into a label, error state,
 * label and placeholder and also styles matching the design spec.
 * @slot leading - adds an element at the start of the input.
 * @slot trailing - adds an element at the end of the input.
 */
@Component({
  tag: 'chirimoya-text-field',
  styleUrl: 'chirimoya-text-field.scss',
  shadow: true,
})
export class ChirimoyaTextField {

  /** the value of the input */
  @Prop({mutable:true, reflect: true}) value: string = '';
  /** name to use in form controls */
  @Prop() name: string;
  /** default value to use in form controls */
  @Prop({ attribute: 'defaultValue' }) defaultValue: string;
  /** disable the component */
  @Prop() disabled: boolean = false;
  /** text for the label of the input */
  @Prop() label: string;
  /** placeholder for the input */
  @Prop() placeholder: string;
  /** if true, a red line will appear below the input (indicating an error) */
  @Prop({ attribute: 'hasError' }) hasError: boolean;
  /** color of the label */
  @Prop({ attribute: 'labelColor' }) labelColor: textColor = 'tertiary';
  /** color of the input text */
  @Prop({ attribute: 'textColor' }) textColor: textColor = 'primary';
  /** if true, disables the animation of the label and set it fixed into the top of the input */
  @Prop({ attribute: 'staticLabel', mutable: true }) staticLabel: boolean = false;
  /** event to handle the user input */
  @Event({bubbles: true}) input!: EventEmitter<KeyboardEvent>;

  onInput = (event: Event) => {
    const input = event.target as HTMLInputElement;
    this.value = input.value;
    this.input.emit(event as KeyboardEvent);
  }

  componentWillLoad() {
    if (this.defaultValue){
      this.value = this.defaultValue
    }
    // if placeholder and label is provided then disable the animation of the label.
    if (this.label && this.placeholder){
      this.staticLabel = true;
    }
  }

  render() {
    const inputClasses = classNames(
      'text-field-input',
      this.label && 'label-active',
      this.value != '' && 'input-active',
      this.staticLabel && 'label-static',
      this.hasError && 'input-error',
      this.textColor
    );
    const labelClasses = classNames(
      'text-field-label',
      this.labelColor,
      this.hasError && 'input-error',
    );
    return (
      <div class="text-field-container">
        <slot name="leading" />
        <label class="text-field-body">
          <input
            value={this.value}
            class={inputClasses}
            disabled={this.disabled}
            placeholder={this.placeholder}
            onInput={this.onInput}
            name={this.name}
            defaultValue={this.defaultValue}
          />
          { this.label && <p class={labelClasses}>{this.label}</p> }
        </label>
        <slot name="trailing"/>
      </div>
    );
  }
}
