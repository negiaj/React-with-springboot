import React from 'react';
import './App.css';
import Navbar from './layouts/Navbar/Navbar';
import ExploreTopBooks from './layouts/HomePage/ExploreTopBooks';
import Carousel from './layouts/HomePage/Carousel';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <ExploreTopBooks/>
      <Carousel/>
    </div>
  );
}

export default App;
