import { Button } from '@chirimoya/chirimoya-react';
import './web-components';

export function App() {
  return (
    <div>
      <Button onClick={() => console.log("I've been clicked")}>
        <Button.LeadingIcon icon="Arrivals" />
        Click me
      </Button>
    </div>
  );
}

export default App;
