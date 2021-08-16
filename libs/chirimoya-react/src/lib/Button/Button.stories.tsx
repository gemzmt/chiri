import { Button } from './Button';

export default {
  title: 'ChirimoyaReact/Button',
};

export const Main = () => {
  return (
    <div>
      <Button onClick={() => console.log('Clicked')}>I'm a button</Button>
      <Button onClick={() => console.log('Clicked')}>
        <Button.LeadingIcon icon="Arrivals" />
        I'm a button
      </Button>
      <Button onClick={() => console.log('Clicked')}>
        <Button.TrailingIcon icon="Arrivals" />
        I'm a button
      </Button>
    </div>
  );
};
