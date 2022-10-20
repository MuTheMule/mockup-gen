import { Component } from 'react';
import * as THREE from 'three';
import './App.css';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OBJLoader } from 'three/addons/loaders/OBJLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { render } from 'react-dom';
import { DirectionalLight, ObjectLoader } from 'three';
import ProjectedMaterial from 'three-projected-material'


var hlight, directionalLight, light , light2 , light3 , light4 , animate, car, mat, mesh;
class LoaderMain extends Component {
    
  componentDidMount() {
    let scene = new THREE.Scene();
    scene.background = new THREE.Color(0xdddddd); 
      
    let camera = new THREE.PerspectiveCamera(75 , window.innerWidth / window.innerHeight , 1 , 5000  )
    camera.rotation.y = 40/160 * Math.PI;
    
    camera.position.x = 0 ;
    camera.position.y = 0 ;
    camera.position.z = 50 ;

    let renderer = new THREE.WebGL1Renderer({antialias:true});
    renderer.setSize(window.innerWidth , window.innerHeight);
    document.body.appendChild(renderer.domElement);

    const controls = new OrbitControls( camera, renderer.domElement );
    //controls.autoRotate = true;
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

    //var loader = new OBJLoader();

    var loader = new GLTFLoader();
    loader.load('armchairYellow.gltf', gltf => {
        console.log("ok");
        var texLoader = new THREE.TextureLoader();
        
        car = gltf.scene.children[0];
        car.scale.set(0.5 , 0.5 ,0.5);
        car.traverse(obj => {
            if(obj.isMesh && obj.geometry.index.count == 89016) {
                texLoader.load("logo192.png", tex => {
                    mat = new ProjectedMaterial({
                        camera,
                        texture: tex,
                        textureScale: 0.8,
                       // transparent: true
                    })
                    mesh = new THREE.Mesh(obj.geometry, [mat])
                    scene.add(mesh);
                    animate();
                })  
            }
        })
        //scene.add(car);
    }, undefined ,err => {
        console.log(err)
    })

    /*loader.load('FinalBaseMesh.obj', function ( obj ) {
        obj.scale.set(1,1,1);
        scene.add(obj);
        animate();
    }, undefined, function ( error ) {
    
        console.error( 'error' );
        console.error( error );    
    });*/

    animate = ()=> {
        controls.update();
        renderer.render(scene , camera);
        requestAnimationFrame(animate);
        mat.project(mesh);
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
