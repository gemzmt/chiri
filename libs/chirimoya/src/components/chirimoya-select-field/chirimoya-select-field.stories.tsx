import React from 'react';

export default {
  title: 'Chirimoya/chirimoya-select-field',
};

export const Basic = () => {
  return (
    <div style={{ padding: '30px', maxWidth: '300px' }}>
      <chirimoya-select-field>
        <option value="avocado" disabled>Palta</option>
        <option value="Tomato">Tomate</option>
        <option value="mayo">Mayonesa</option>
      </chirimoya-select-field>
    </div>
  );
};

export const WithPlaceholder = () => {
  return (
    <div style={{ padding: '30px', maxWidth: '300px' }}>
      <chirimoya-select-field placeholder="Select here">
        <option value="avocado">Palta</option>
        <option value="Tomato">Tomate</option>
        <option value="mayo">Mayonesa</option>
      </chirimoya-select-field>
    </div>
  );
};

export const WithLabel = () => {
  return (
    <div style={{ padding: '30px', maxWidth: '300px' }}>
      <chirimoya-select-field placeholder="Select here" label="Label">
        <option value="avocado">Palta</option>
        <option value="Tomato">Tomate</option>
        <option value="mayo">Mayonesa</option>
      </chirimoya-select-field>
    </div>
  );
};

export const WithLabelError = () => {
  return (
    <div style={{ padding: '30px', maxWidth: '300px' }}>
      <chirimoya-select-field placeholder="Select here" label="Label" hasError>
        <option value="avocado">Palta</option>
        <option value="Tomato">Tomate</option>
        <option value="mayo">Mayonesa</option>
      </chirimoya-select-field>
    </div>
  );
};

export const WithLabelDisabled = () => {
  return (
    <div style={{ padding: '30px', maxWidth: '300px' }}>
      <chirimoya-select-field placeholder="Select here" label="Label" disabled>
        <option value="avocado">Palta</option>
        <option value="Tomato">Tomate</option>
        <option value="mayo">Mayonesa</option>
      </chirimoya-select-field>
    </div>
  );
};
export const fullWidth = () => {
  return (
    <div style={{ padding: '30px', maxWidth: '300px' }}>
      <chirimoya-select-field placeholder="Select here" fullWidth hasError>
        <option value="avocado">Palta</option>
        <option value="Tomato">Tomate</option>
        <option value="mayo">Mayonesa</option>
      </chirimoya-select-field>
    </div>
  );
};

export const WithDynamicChildren = () => {
  let chirimoyaSelectElement;
  let nativeSelectElement;

  setTimeout(() => {
    chirimoyaSelectElement = document.getElementById('chirimoya-ingredients-select');
    nativeSelectElement = document.getElementById('native-ingredients-select');
  }, 0);

  const createElement = (tagName, { value, name }) => {
    const el = document.createElement(tagName);
    el.textContent = name;
    el.setAttribute('value', value);

    return el;
  };

  const ingredients = [
    { value: 'avocado', name: 'Palta' },
    { value: 'tomato', name: 'Tomate' },
    { value: 'lettuce', name: 'Lechuga' },
    { value: 'pickle', name: 'Pepinillo' },
    { value: 'mayo', name: 'Mayonesa' },
    { value: 'mustard', name: 'Mostaza' },
    { value: 'ketchup', name: 'Catsup xD' },
  ];

  const options = new Proxy([], {
    get(target, property) {
      return target[property];
    },
    set(target, property, value) {
      const chirimoyaOption = createElement('option', { value: value.value, name: value.name });
      chirimoyaSelectElement.append(chirimoyaOption);

      const nativeOption = createElement('option', { value: value.value, name: value.name });
      nativeSelectElement.append(nativeOption);

      target[property] = value;
      return true;
    },
  });

  const handleAddIngredient = () => {
    if (ingredients.length === 0) {
      alert('No more ingredients to add');
      return;
    }

    const newIngredient = ingredients.shift();
    options.push(newIngredient);
  };

  return (
    <div>
      <chirimoya-button onClick={handleAddIngredient}>Add Ingredient</chirimoya-button>
      <div style={{ padding: '30px', maxWidth: '300px' }}>
        <chirimoya-select-field id="chirimoya-ingredients-select" />
        <hr />
        <select id="native-ingredients-select" />
      </div>
    </div>
  );
};
