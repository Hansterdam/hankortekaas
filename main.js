import * as THREE from 'three';

const canvas = document.querySelector('#cnvs');

const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(window.innerWidth, window.innerHeight, false);
renderer.setAnimationLoop(animate);

const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 500);
camera.position.set(0, 0, 2);
camera.lookAt(0, 1.7, 0);

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x041230);

const mainOrbit = new THREE.Object3D();
scene.add(mainOrbit);
const planetGeometry = new THREE.DodecahedronGeometry(1, 3);
const planetMaterial = new THREE.MeshPhongMaterial({ color: 0x998844, flatShading: true, shininess: 0 });
const planet = new THREE.Mesh(planetGeometry, planetMaterial);
mainOrbit.add(planet);

const starMaterial = new THREE.MeshBasicMaterial({ color: 0xffffbb });
const stars = [];
const distanceToCenter = 100;
const outerRadius = 700;
for (let i = 0; i < 700; i++) {
    const starGeometry = new THREE.SphereGeometry(Math.random() * 0.6 + 0.4, 12, 7);
    const star = new THREE.Mesh(starGeometry, starMaterial);
    star.position.add(getRandomPositions());
    mainOrbit.add(star);
    stars.push(star);
}

function getRandomPositions() {
    const vector = new THREE.Vector3();
    vector.randomDirection();
    vector.multiplyScalar(Math.random() * (outerRadius - distanceToCenter) + distanceToCenter);
    return vector;
}

const color = 0xffffff;
const intensity = 0.4;
const light = new THREE.DirectionalLight(color, intensity);
light.position.set(-1, 2, 10);
scene.add(light);

const light2 = new THREE.DirectionalLight(color, 10);
light2.position.set(0, 2, -2);
light2.lookAt(0, 0, 2);
scene.add(light2);

window.addEventListener('resize', onWindowResize);

function onWindowResize() {
    resizeRendererToDisplaySize(renderer, camera);
}

let target = 0;
let targetDirection = 1;
const rotateSpeed = 0.0002;
function animate() {
    renderer.render(scene, camera);

    if (targetDirection === 1) {
        while (target > mainOrbit.rotation.x) {
            mainOrbit.rotation.x += rotateSpeed;
        }
    } else {
        while (target < mainOrbit.rotation.x) {
            mainOrbit.rotation.x -= rotateSpeed;
        }
    }
}

const scrollSpeed = 0.02;
function onMouseWheel(event) {
    // Adjust the planet's rotation based on the scroll input
    let factor = event.deltaY > 0 ? 1 : -1;
    target += factor * scrollSpeed;
    targetDirection = factor;
}

// Add the mouse wheel event listener
window.addEventListener('wheel', onMouseWheel);

function resizeRendererToDisplaySize(renderer, camera) {
    const canvas = renderer.domElement;
    const pixelRatio = window.devicePixelRatio;
    const width = Math.floor(canvas.clientWidth * pixelRatio);
    const height = Math.floor(canvas.clientHeight * pixelRatio);
    // const width = canvas.clientWidth;
    // const height = canvas.clientHeight;
    const needResize = canvas.width !== width || canvas.height !== height;
    if (needResize) {
        renderer.setSize(width, height, false);
        camera.aspect = canvas.clientWidth / canvas.clientHeight;
        camera.updateProjectionMatrix();
    }
    return needResize;
}
