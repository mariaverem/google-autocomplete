import React from 'react';

import SearchLocation from '../components/SearchLocation';

import './App.css';

function App() {
  return (
    <div className="app-container">
      <SearchLocation onChange={() => null} />
    </div>
  );
}

export default App;
