import React from 'react';

export default {
  title: 'Chirimoya/chirimoya-file-field',
};

const clearFile = () => {
  let chiri_file: any = document.getElementById('file-field-label');
  chiri_file.resetFile();
}

export const BasicWithLabel = () => {
  return (
    <div style={{padding: '30px', maxWidth: '500px'}}>
      <chirimoya-file-field id="file-field-label" label="Boleta" placeholder="Choose...">
        <primaries-icon icon="Info" slot="trailing-icon" />
      </chirimoya-file-field>
    </div>
  );
};

export const InvalidSubmitedFile = () => {
  return (
    <div style={{padding: '30px', maxWidth: '300px'}}>
      <chirimoya-file-field id="file-field-invalid" label="Boleta" placeholder="Choose..." hasError>
        <primaries-icon icon="Info" slot="trailing-icon" />
      </chirimoya-file-field>
    </div>
  );
};

export const DisabledFile = () => {
  return (
    <div style={{padding: '30px', maxWidth: '300px'}}>
      <chirimoya-file-field id="file-field-disabled" label="Boleta" placeholder="Choose..." disabled>
        <primaries-icon icon="Info" slot="trailing-icon" />
      </chirimoya-file-field>
    </div>
  );
};

export const TestResetFileabel = () => {
  return (
    <div style={{padding: '30px', maxWidth: '300px'}}>
      <chirimoya-file-field id="file-field-label" label="Boleta" placeholder="Choose...">
        <primaries-icon icon="Info" slot="trailing-icon" />
      </chirimoya-file-field>

      <button onClick={clearFile}>Clear file</button>
    </div>
  );
};