import { Component } from 'react';
import * as THREE from 'three';
import './App.css';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { render } from 'react-dom';

import LoaderAlt from './LoaderAlt'


class App extends Component {
 render() {
  return(
    <div>
      <LoaderAlt></LoaderAlt>
    </div>
  )
 }
}

export default App;
