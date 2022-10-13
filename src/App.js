import { Component } from 'react';
import * as THREE from 'three';
import './App.css';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { render } from 'react-dom';

import LoaderMain from './LoaderMain'


class App extends Component {

  /*componentDidMount() {
  const scene = new THREE.Scene();
  
  scene.background = new THREE.Color( 0xa0a0a0 );
  scene.fog = new THREE.Fog( 0xa0a0a0, 200, 1000 );
  var light = new THREE.HemisphereLight( 0xffffff, 0x444444 );
  light.position.set( 0, 200, 0 );
  scene.add( light );
  
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1 , 1000);

  const renderer = new THREE.WebGLRenderer();
  renderer.setPixelRatio( window.devicePixelRatio );
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
				renderer.toneMappingExposure = 1;
				renderer.outputEncoding = THREE.sRGBEncoding;

  const geometry = new THREE.BoxGeometry(1,1,1);
  const material = new THREE.MeshBasicMaterial({color:0x00ff00});
  const cube = new THREE.Mesh(geometry,material);
  //scene.add(cube);

  camera.position.z = 5;
  

  const loader = new GLTFLoader();

  loader.load(
    // resource URL
    '/armchairYellow.gltf',
    // called when the resource is loaded
    function ( gltf ) {
  
      gltf.scene.scale.set(200,200,200)

      console.log("done")
      scene.add( gltf.scene );
      renderer.render(scene , camera);
     // Object
  
    },
    // called while loading is progressing
    function ( xhr ) {
  
      
      console.log( xhr.loaded);
      console.log( xhr.total );
      console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
  
    },
    // called when loading has errors
    function ( error ) {
  
      console.log( 'An error happened' + error);
  
    }
  );

  document.body.appendChild(renderer.domElement);

  function animate(){
    requestAnimationFrame(animate);
    cube.rotation.y += 0.01;
    cube.rotation.x += 0.01;
    renderer.render(scene,camera);
  }

  //animate();
  }*/
 render() {
  return(
    <div>
      <LoaderMain></LoaderMain>
    </div>
  )
 }
}

export default App;
