import React from 'react';
import logo from './logo.svg';
import './App.css';
import HelloWorld from './HelloWorld.js';
import Bomb from './Bomb.js';
import RoutletteGun from './RoutletteGun.js';
import Accordion from './Accordion';
import Sections from './Sections';

function App(props) {
  return (
   <main className='App'>
     {/* <HelloWorld/> */}
     {/* <Bomb/> */}
     {/* <RoutletteGun/> */}
     {this.props.sections}
   </main>
  );
}

export default App;
