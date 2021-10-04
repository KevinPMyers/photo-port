import React from 'react';
import Nav from './components/Nav'
import About from './components/about';
import './App.css';

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <main>
        <About></About>
      </main>
    </div>
  );
}

export default App;
