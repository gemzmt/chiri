import React from 'react';

export default {
  title: 'Chirimoya/chirimoya-form-cell',
};

const TextWithoutTrailingIconStory = ({ hasError, errorText, label, disabled}) => {

  return (
    <div style={{maxWidth: '375px', padding: '30px'}}>
      <chirimoya-form-cell hasError={hasError} errorText={errorText}>
        <chirimoya-text-field label={label} slot="form-control" hasError={hasError} disabled={disabled}/>
      </chirimoya-form-cell>
    </div>
  );
};
export const TextWithoutTrailingIcon = TextWithoutTrailingIconStory.bind({});
TextWithoutTrailingIcon.args = {
  hasError: false,
  errorText: 'Invalid input description.',
  label: 'Label',
  disabled: false
}


export const TextWithoutTrailingIconSubmitedInvalid = () => {
  return (
    <div style={{maxWidth: '375px', padding: '30px'}}>
      <chirimoya-form-cell errorText="Invalid input description." hasError>
        <chirimoya-text-field label="Label" hasError slot="form-control" />
      </chirimoya-form-cell>
    </div>
  );
};
export const TextWithoutTrailingHasInputDisabled = () => {
  return (
    <div style={{maxWidth: '375px', padding: '30px'}}>
      <chirimoya-form-cell>
        <chirimoya-text-field label="Label" value="Value" disabled slot="form-control" />
      </chirimoya-form-cell>
    </div>
  );
};
export const TextWithoutTrailingEmptyDisabled = () => {
  return (
    <div style={{maxWidth: '375px', padding: '30px'}}>
      <chirimoya-form-cell>
        <chirimoya-text-field label="Label" slot="form-control" disabled/>
      </chirimoya-form-cell>
    </div>
  );
};
export const TextWithoutTrailingErrorHasInputDisabled = () => {
  return (
    <div style={{maxWidth: '375px', padding: '30px'}}>
      <chirimoya-form-cell errorText="Invalid input description." hasError>
        <chirimoya-text-field label="Label" disabled value="Value" hasError slot="form-control" />
      </chirimoya-form-cell>
    </div>
  );
};
export const TextTrailingIcon = () => {
  return (
    <div style={{maxWidth: '375px', padding: '30px'}}>
      <chirimoya-form-cell>
        <chirimoya-text-field label="Label" value="Value" slot="form-control" />
        <primaries-icon icon="Info" slot="trailing" />
      </chirimoya-form-cell>
    </div>
  );
};
export const TextTrailingIconSubmitedInvalid = () => {
  return (
    <div style={{padding: '30px', maxWidth: '375px'}}>
      <chirimoya-form-cell errorText="Invalid input description." hasError>
        <chirimoya-text-field label="Label" value="Value" hasError slot="form-control" />
        <primaries-icon icon="Info" slot="trailing" />
      </chirimoya-form-cell>
    </div>
  );
};
export const FileFieldTrailingIcon = () => {
  return (
    <div style={{padding: '30px', maxWidth: '375px'}}>
      <chirimoya-form-cell>
        <chirimoya-file-field id="file-field-label" label="Boleta" placeholder="Choose..." slot="form-control" />
        <primaries-icon icon="Info" slot="trailing" />
      </chirimoya-form-cell>
    </div>
  );
};

export const FileFieldTrailingIconSubmitedInvalids= () => {
  return (
    <div style={{padding: '30px', maxWidth: '375px'}}>
      <chirimoya-form-cell errorText="Invalid file" hasError>
        <chirimoya-file-field id="file-field-label" label="Boleta" placeholder="Choose..." slot="form-control" hasError/>
        <primaries-icon icon="Info" slot="trailing" />
      </chirimoya-form-cell>
    </div>
  );
};

export const SelectTrailingIcon = () => {
  return (
    <div style={{padding: '30px', maxWidth: '300px'}}>
      <chirimoya-form-cell>
        <chirimoya-select-field name="form" label="Label" placeholder="Select here" slot="form-control">
          <option value="avocado">Avocado</option>
          <option value="tomato">Tomato</option>
        </chirimoya-select-field>
        <primaries-icon icon="Info" slot="trailing" />
      </chirimoya-form-cell>
    </div>
  );
};

export const SelectTrailingIconInvalid = () => {
  return (
    <div style={{padding: '30px', maxWidth: '300px'}}>
      <chirimoya-form-cell hasError errorText="Invalid input description.">
        <chirimoya-select-field name="form" label="Label" placeholder="Select here" hasError slot="form-control">
          <option value="avocado">Avocado</option>
          <option value="tomato">Tomato</option>
        </chirimoya-select-field>
        <primaries-icon icon="Info" slot="trailing" />
      </chirimoya-form-cell>
    </div>
  );
};
