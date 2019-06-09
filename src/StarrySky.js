import React from 'react';
import * as THREE from 'three';
import window from 'global';

var lightness = 0;
var rotSpeed = 0.01;

class StarrySky extends React.Component {  
  componentDidMount() {
    
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setSize( window.innerWidth, window.innerHeight );
    this.starrySky.appendChild( this.renderer.domElement );

    var geometry = new THREE.SphereGeometry( 0.5, 32, 32 );
    var planetTexture = new THREE.TextureLoader().load( "https://raw.githubusercontent.com/kellylougheed/starry-night/master/neptune.png" );
    // planetTexture.wrapS = planetTexture.wrapT = THREE.MirroredRepeatWrapping;
    planetTexture.repeat.set( 2, 2 );
    var material = new THREE.MeshBasicMaterial( { map: planetTexture } );
    var planet = new THREE.Mesh( geometry, material );
    this.scene.add( planet );

    this.camera.position.z = 10;

    

    // for (let j = 0; j < this.stars.length; j++) {
    //   this.scene.add( this.stars[j] );
    // }
    this.placeAllStars();

    this.animate();
  }

  placeAllStars = () => {
    this.stars = [];
    var starTexture = new THREE.TextureLoader().load( "https://github.com/kellylougheed/starry-night/blob/master/star.png?raw=true" );

    for (let i = 0; i < 30; i++) {
      let geometry = new THREE.PlaneGeometry( 0.5, 0.5 );
      let material = new THREE.MeshBasicMaterial( { map: starTexture } );
      let star = new THREE.Mesh( geometry, material );
      star.position.x = Math.floor(Math.random()*10) + 1;
      star.position.y = Math.floor(Math.random()*10) + 1
      star.position.x = Math.floor(Math.random()*10) + 1;
      
      // star.material.side = new THREE.DoubleSide;
      this.stars.push( star );
      this.scene.add( star );
    }

    return this.stars;
  }

  getRandom = () => {
    console.log('randomFIred!')
    // source: https://stackoverflow.com/questions/13455042/random-number-between-negative-and-positive-value
    var num = Math.floor(Math.random()*10) + 1; // this will get a number between 1 and x;
    num *= Math.floor(Math.random()*2) === 1 ? 1 : -1; // this will add minus sign in 50% of cases
    return num;
  }

  animate = () => {
    // Rotate and change saturation lightness of each star
    for (let k = 0; k < 30; k++) {
      let star = this.stars[k];
      star.rotation.x += 0.01;
      star.rotation.y += 0.01;
      lightness > 100 ? lightness = 0 : lightness++;
      // star.material.color = new THREE.Color("hsl(255, 100%, " + lightness + "%)");
    }
    
      // Rotate camera
      // source: http://mikeheavers.com/tutorials/webgl_circular_camera_rotation_around_a_single_axis_in_threejs/
      let x = this.camera.position.x;
      let z = this.camera.position.z;
      this.camera.position.x = x * Math.cos(rotSpeed) + z * Math.sin(rotSpeed);
      this.camera.position.z = z * Math.cos(rotSpeed) - x * Math.sin(rotSpeed);
      this.camera.lookAt(this.scene.position);
      
    requestAnimationFrame( this.animate() );
   }

  render() {
    return (
      <div ref={starrySky => this.starrySky = starrySky} />
    );
  }
}

export default StarrySky;
