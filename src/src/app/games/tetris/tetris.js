import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(10, window.innerWidth / window.innerHeight, 1, 10000)   
const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild( renderer.domElement )

// GRID HELPER 
// const size = 10
// const divisions = 10
// const gridHelper = new THREE.GridHelper( size, divisions )
// scene.add( gridHelper )
const axesHelper = new THREE.AxesHelper( 5 )
scene.add( axesHelper )
// ORBIT CONTROLS
const controls = new OrbitControls( camera, renderer.domElement )
camera.position.set( 0, 25, 100 )
controls.update()

// CUBE
const geometry = new THREE.BoxGeometry( 1, 1, 1 )
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } )
const cube = new THREE.Mesh( geometry, material )
cube.position.y = 0.5
scene.add( cube )

// PLANE 
const plane_geo = new THREE.PlaneGeometry( 10, 10 );
const plane_mat = new THREE.MeshBasicMaterial( {color: 0xffffff, side: THREE.DoubleSide} );
const plane = new THREE.Mesh( plane_geo, plane_mat );
plane.rotation.x = Math.PI / 2;
scene.add( plane );

// LIGHTS
const light = new THREE.AmbientLight( 0x404040 ) // soft white light
scene.add( light )
// CONTROLS
function setupKeyControls() {
    document.onkeydown = function(event) {
      switch (event.key) {
        case "d": 
        cube.position.x += 1;
        break;
        case "a":
        cube.position.x -= 1;
        break;
      }
    };
  }
setupKeyControls()

function animate() {
	requestAnimationFrame( animate )
    controls.update()
	renderer.render( scene, camera )
}
animate();

console.log("Hello world!")