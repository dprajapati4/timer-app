import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Timer</h1>
      <h2>Keep track of your tasks!</h2>
        <Counter />
        
    </div>
  );
}

export default App;
