import { Component, h, Prop, Element, Event, EventEmitter, Method, State } from '@stencil/core';
import { HTMLStencilElement } from "@stencil/core/internal";
import classNames from 'classnames';
import { bytesToSize } from '../../utils/utils';

/**
 * @slot trailing-icon - Use for add icon un the trailing section of field
 */
@Component({
  tag: 'chirimoya-file-field',
  styleUrl: 'chirimoya-file-field.scss',
  shadow: true,
})
export class ChirimoyaFileField {
  /** Name of input */
  @Prop() name: string;
  /** File type allowed */
  @Prop() acceptTypes: string;
  /** Disable the component */
  @Prop() disabled: boolean = false;
  /** Label for the input, also has an animation */
  @Prop() label: string;
  /** Placeholder for the input */
  @Prop() placeholder: string;
  /** Show error style to input */
  @Prop({ attribute: 'hasError', mutable: true }) hasError: boolean;
  /** This Event emits when file is ready loaded  */
  @Event() fileLoadReady: EventEmitter<Blob>;

  @State() fileName: string = '';
  @State() fileSize: string = '';
  @State() imagePreview: string | ArrayBuffer;
  
  @Element() hostElement: HTMLStencilElement;
  
  /** Clean file value */
  @Method() async resetFile () {
    const fileInput: HTMLInputElement = this.hostElement.shadowRoot.querySelector('.file-field-input');

    fileInput.files = new DataTransfer().files;
    this.fileName = '';
    this.fileSize = '';
    this.imagePreview = null;
  }

  private onChangeFile = (files: FileList) => {
    const file = files[0];

    this.hasError = false;
    this.fileName = `${file.name}`;
    this.fileSize = `(${bytesToSize(file.size)})`;
    this.fileLoadReady.emit(file);
    this.previewImage(file);
  }

  private previewImage(file) {
    const reader = new FileReader();

    reader.onload = () => {
      this.imagePreview = reader.result;
    };

    reader.readAsDataURL(file);
  }

  render() {
    const containerClass = classNames(
      'file-field-container',
      this.disabled && 'file-field-disabled'
    );
    const inputClasses = classNames(
      'file-field-text',
      this.label && 'with-label',
      this.hasError && 'file-field-error-active',
    );
    const labelClasses = classNames(
      'file-field-text-label',
    );
    const placeholderClasses = classNames(
      'file-field-text-placeholder'
    );

    const imagePreviewStyles = this.imagePreview
      ? { backgroundImage: `url(${this.imagePreview})` }
      : null;

    return <div class={containerClass}>
      <div class="file-field-thumbnail">
        <div class="file-field-thumbnail-preview" style={imagePreviewStyles}></div>
        <primaries-icon icon="Folder" class="file-field-thumbnail-icon"/>
      </div>
      <div class="file-field-leading">
          <input
            accept={this.acceptTypes}
            type="file"
            class="file-field-input"
            disabled={this.disabled}
            onChange={($event: any) => this.onChangeFile($event.target.files)}
            name={this.name}
          />
          <div class="file-field-text-wrapper">
            <div class={inputClasses}>
              <label class={labelClasses}>
                {this.label}
              </label>
              <p class={placeholderClasses}>
                <span class="file-field-text-filename">{(this.fileName != '') ? this.fileName : this.placeholder}</span>
                <span class="file-field-text-filesize">{this.fileSize}</span>
              </p>
            </div>
          </div>
      </div>
      <div class="file-field-trailing">
        <slot name="trailing-icon"/>
      </div>
    </div>;
  }
}
