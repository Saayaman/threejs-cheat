import React from 'react';
import window from 'global';
import * as THREE from "three";

class Particles extends React.Component {
  componentDidMount() {
    const width = this.particles.clientWidth;
    const height = this.particles.clientHeight;
    this.camera = new THREE.PerspectiveCamera( 70, width / height, 0.1, 1000 );
    this.camera.position.z = 2;
    this.scene = new THREE.Scene();
    var texture = new THREE.TextureLoader().load( 'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/crate.giftextures/crate.gif' );
    var geometry = new THREE.BoxBufferGeometry( 200, 200, 200 );
    var material = new THREE.MeshBasicMaterial( { map: texture } );
    this.mesh = new THREE.Mesh( geometry, material );
    this.scene.add( this.mesh );
    this.renderer = new THREE.WebGLRenderer( { antialias: true } );
    this.renderer.setPixelRatio( window.devicePixelRatio );
    this.renderer.setSize( width, height );
    this.particles.appendChild( this.renderer.domElement );
    this.animate();
    
    // window.addEventListener( 'resize', this.onWindowResize, false );
    
  }

  // window.addEventListener( 'resize', onWindowResize, false );
  // onWindowResize = () => {
  //   this.camera.aspect = window.innerWidth / window.innerHeight;
  //   this.camera.updateProjectionMatrix();
  //   this.renderer.setSize( window.innerWidth, window.innerHeight );
  // }

  animate = () => {
    requestAnimationFrame( this.animate );
    this.mesh.rotation.x += 0.005;
    this.mesh.rotation.y += 0.01;
    this.renderer.render( this.scene, this.camera );
  }

  render() {
    return (
       <div style={{ height: '800px', width: '1000px' }} ref={particles => this.particles = particles} />
    );
  }


}

export default Particles;
