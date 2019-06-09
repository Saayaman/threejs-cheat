import React, { Component } from "react";
import * as THREE from "three";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';


let lightness = 0;
let rotSpeed = 0.01;
class BillBoards extends Component {

  componentDidMount() {
   
    var camera, scene, renderer, stats, group;
    var mouseX = 0, mouseY = 0;
    var windowHalfX = this.boards.clientWidth;
    var windowHalfY = this.boards.clientWidth;
    init();



    this.camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 1, 10000 );
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color( 0xf0f0f0 );
    var light = new THREE.DirectionalLight( 0xffffff, 1 );
    light.position.set( 1, 1, 1 ).normalize();
    this.scene.add( light );

    this.camera.position.z = 500;
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color( 0xffffff );
    this.scene.fog = new THREE.Fog( 0xffffff, 1, 10000 );
    var geometry = new THREE.BoxBufferGeometry( 100, 100, 100 );
    var material = new THREE.MeshNormalMaterial();
    this.group = new THREE.Group();

    for ( var i = 0; i < 1000; i ++ ) {
      var mesh = new THREE.Mesh( geometry, material );
      mesh.position.x = Math.random() * 2000 - 1000;
      mesh.position.y = Math.random() * 2000 - 1000;
      mesh.position.z = Math.random() * 2000 - 1000;
      mesh.rotation.x = Math.random() * 2 * Math.PI;
      mesh.rotation.y = Math.random() * 2 * Math.PI;
      mesh.matrixAutoUpdate = false;
      mesh.updateMatrix();
      this.group.add( mesh );
    }
    this.scene.add( this.group );



    this.raycaster = new THREE.Raycaster();
    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setPixelRatio( window.devicePixelRatio );
    this.renderer.setSize( window.innerWidth, window.innerHeight );
    this.boards.appendChild( this.renderer.domElement );

  }
  componentWillUnmount() {
    cancelAnimationFrame(this.frameId);
    this.boards.removeChild(this.renderer.domElement);
  }
  initializeOrbits = () => {
    this.controls.rotateSpeed = 1.0;
    this.controls.zoomSpeed = 1.2;
    this.controls.panSpeed = 0.8;
  }
  initializeCamera = () => {
    this.camera.position.x = 0;
    this.camera.position.y = 0;
    this.camera.position.z = 4;

    // thiss.camera.position.z = 10;

  }

 
  animate = () => {

  }

  render = () => {

  }

  render() {
    return (
      <div style={{ backgroundColor: 'red' }}>
        <div
          //this will not update the canvas size: only happens once when component loads
          style={{ width: "100vw", height: "100vh" }}
          ref={boards => {
            this.boards = boards;
          }}
        />
      </div>
    );
  }
}
export default BillBoards;