import { Component, h, Prop, Element, Event, EventEmitter, State } from '@stencil/core';
import classNames from 'classnames';


interface IOption {
  label: string;
  value: string;
  disabled: boolean;
}

/**
 * `<chirimoya-select-field>` complex component
 * implements a custom Select component using the html <select/>, it supports <chirimoya-select-option/> given as child.
 *
 * @slot slot - <option/> - open slot that receives options to add into the select.
 */
@Component({
  tag: 'chirimoya-select-field',
  styleUrl: 'chirimoya-select-field.scss',
  shadow: true,
})
export class ChirimoyaSelectField {

  @Element() private element: HTMLElement;
  /** the value of the select */
  @Prop({mutable:true, reflect: true}) value: string;
  /** if `true`, the select will be unaccessible */
  @Prop() disabled = false;
  /** text to show in the top label */
  @Prop() label?: string;
  /** text to show inside the selector in case there is no value selected */
  @Prop() placeholder?: string;
  /** name to use in form-controls */
  @Prop() name: string;
  /* if true, the element uses all the width of the parent element */
  @Prop({ attribute: 'fullWidth' }) fullWidth = false;
  /** defaultValue to use in form-controls */
  @Prop({ attribute: 'defaultValue' }) defaultValue: string;
  /** if true, a red line will appear below the select (indicating an error) */
  @Prop({ attribute: 'hasError' }) hasError: boolean;
  /** event to handle user selection */
  @Event({bubbles: true}) selectChange!: EventEmitter<KeyboardEvent>;
  /* private state to handle the option creation */
  @State() options: IOption[];

  constructor() {
    // if the select is controlled by using the defaultValue prop
    if (this.defaultValue){
      this.value = this.defaultValue
    }
  }

  handleSlotChange = () => {
    this.generateOptions();
  }

  generateOptions = () => {
    const children = Array.from(this.element.querySelectorAll('option'));
    this.options = children.map(element => ({label: element.label, value: element.value, disabled: element.disabled}));
  }

  isOptionSelected = (option: IOption):boolean => {
    return this.defaultValue === option.value || this.value === option.value;
  }

  onSelect = (event: Event) => {
    const select = event.target as HTMLSelectElement;
    this.value = select.value;
    this.selectChange.emit(event as KeyboardEvent);
  }

  renderOption = (option: IOption) => {
    return <option value={option.value} disabled={option.disabled} selected={this.isOptionSelected(option)}>{option.label}</option>
  }

  render() {
    const containerClasses = classNames(
      'select-field',
      this.label && 'select-field-label-active',
      this.hasError && 'select-field-error',
      this.disabled && 'select-field-disabled',
      this.fullWidth && 'select-field-fullwidth'
    );
    return (
      <label class={containerClasses}>
          { this.label && <p class="select-field-label">{this.label}</p> }
          <span class="chirimoya-select-wrapper">
            <select name={this.name} class='chirimoya-select' disabled={this.disabled} onChange={this.onSelect} >
                {this.placeholder && <option disabled selected value={null}>{this.placeholder}</option>}
                {this.options?.map(this.renderOption)}
            </select>
            <primaries-icon icon="ChevronDown" class="chirimoya-select-arrow" size={20}/>
          </span>
          <slot onSlotchange={this.handleSlotChange}/>
      </label>
    );
  }
}
