import React from 'react';
import logo from './logo.svg';
import './App.css';
import CompA from './Components/CompA';
import CompB from './Components/CompB';

const App = () => {
  return (
    // <CompA />
    <CompA>
      <CompB>
        Hello !
      </CompB>
    </CompA>
  );
}

export default App;
