import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';

import { Router } from './routes';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Router />
    </div>
  );
}

export default App;
