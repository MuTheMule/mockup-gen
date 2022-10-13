import { Component } from 'react';
import * as THREE from 'three';
import './App.css';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { render } from 'react-dom';
import { DirectionalLight } from 'three';


var hlight, directionalLight, light , light2 , light3 , light4 , animate;
class LoaderMain extends Component {

    
  componentDidMount() {
    let scene = new THREE.Scene();
    scene.background = new THREE.Color(0xdddddd); 
      
    let camera = new THREE.PerspectiveCamera(75 , window.innerWidth / window.innerHeight , 1 , 5000  )
    camera.rotation.y = 40/160 * Math.PI;
    
    camera.position.x = 0 ;
    camera.position.y = 0 ;
    camera.position.z = 100 ;

    let renderer = new THREE.WebGL1Renderer({antialias:true});
    renderer.setSize(window.innerWidth , window.innerHeight);
    document.body.appendChild(renderer.domElement);

    const controls = new OrbitControls( camera, renderer.domElement );
    controls.autoRotate = true;
    controls.update();

    hlight = new THREE.AmbientLight(0x404040 , 5);
    scene.add(hlight);

    directionalLight = new THREE.DirectionalLight(0xffffff , 1);
    directionalLight.position.set(0,10,0);
    directionalLight.castShadow = true;
    scene.add(directionalLight);
/*
    light = new THREE.PointLight(0xc4c4c4 , 10);
    light.position.set( 0 , 300 , 500);
    scene.add(light);

    light2 = new THREE.PointLight(0xc4c4c4 , 10);
    light2.position.set( 550 , 100 , 0);
    scene.add(light2);

    light3 = new THREE.PointLight(0xc4c4c4 , 10);
    light3.position.set( 0 , 100 , -500);
    scene.add(light3);

    light4 = new THREE.PointLight(0xc4c4c4 , 10);
    light4.position.set( -500 , 300 , 500);
    scene.add(light4);
*/

    var loader = new GLTFLoader();
    /*loader.load('scene.gltf' , function(gltf) {
        console.log("err");
        car = gltf.scene.children[0];
        car.scale.set(0.5 , 0.5 ,0.5);
        scene.add(gltf.scene);
        
    })*/

    loader.load( 'armchairYellow.gltf', function ( gltf ) {

        console.log( 'ok' );
        let car = gltf.scene.children[0];

        car.scale.set(0.5 , 0.5 , 0.5);
        scene.add(car);

        animate();
        
    }, undefined, function ( error ) {
    
        console.error( 'error' );
        console.error( error );

    
    } );

    animate = ()=> {
        controls.update();
        renderer.render(scene , camera);
        requestAnimationFrame(animate)
    }
  }

  
 render() {
  return(
    <div>
      
    </div>
  )
 }
}

export default LoaderMain;
