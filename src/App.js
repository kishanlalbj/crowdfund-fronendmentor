import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className='App'>
      <h1>Hello World</h1>
      <h3>Date : {new Date().toDateString()}</h3>
    </div>
  );
};

export default App;
