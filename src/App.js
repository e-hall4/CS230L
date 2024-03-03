import React from 'react';
import './App.css';
import NavBar from'./NavBar';
import Card from './Card';

function App() {
  return (
      <div className="App">
          <NavBar />
          <h1>CS 230L</h1>
          <h2>Section - 002</h2>
          <p>WVU ID: 800384692</p>
          <p>Hi I am Elijah</p>
          <Card />
    </div>
  );
}

export default App;