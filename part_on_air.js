import * as THREE from "three";

import { OrbitControls } from "three/examples/jsm/Addons.js";
import "./styles.css";
import { append } from "three/src/nodes/TSL.js";
import { gosper } from "three/examples/jsm/utils/GeometryUtils.js";



const canvas = document.querySelector(".field");
const scene = new THREE.Scene();
const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

const particlesGeometry = new THREE.BufferGeometry();
const particleCount = 5000;
const positions = new Float32Array(particleCount * 3);

for (let i = 0; i < particleCount * 3; i++) {
    positions[i] = (Math.random() - 0.5) * 10;
}

particlesGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

const material = new THREE.PointsMaterial({ 
    size: 0.03, 
    vertexColors: true 
});

const colors = new Float32Array(particleCount * 3);
for (let i = 0; i < particleCount * 3; i++) {
    colors[i] = Math.random();
}

particlesGeometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
const points = new THREE.Points(particlesGeometry, material);
scene.add(points);

function animate() {
    requestAnimationFrame(animate);
    points.rotation.y += 0.0005;
    renderer.render(scene, camera);
}

animate();