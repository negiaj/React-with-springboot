import React from 'react';
import './App.css';
import Navbar from './layouts/Navbar/Navbar';
import ExploreTopBooks from './layouts/HomePage/ExploreTopBooks';
import Carousel from './layouts/HomePage/Carousel';
import { Heros } from './layouts/HomePage/Heros';
import { LibraryServices } from './layouts/HomePage/LibraryServices';
import { Footer } from './layouts/HomePage/Footer';
import AppService from './layouts/HomePage/AppService';

function App() {
  return (
    <div className="App">
      {/* <Navbar/>
      <ExploreTopBooks/> */}
      {/* <Carousel/> */}
      <AppService/>
      {/* <Heros/>
      <LibraryServices/>
      <Footer/> */}
    </div>
  );
}

export default App;
