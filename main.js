import * as THREE from 'three';
import { Text } from 'troika-three-text'

const canvas = document.querySelector('#cnvs');

const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(window.innerWidth, window.innerHeight, false);
renderer.setAnimationLoop(animate);

const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000);
camera.position.set(0, 1.3, 1.8);
camera.lookAt(0, 1.3, 0);

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
const distanceToCenter = 50;
const outerRadius = 1200;
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
light.position.set(-1, 2, 6);
scene.add(light);

const light2 = new THREE.DirectionalLight(color, 10);
light2.position.set(0, 0.5, -2);
light2.lookAt(0, 2, 2);
scene.add(light2);

window.addEventListener('resize', onWindowResize);

function onWindowResize() {
    resizeRendererToDisplaySize(renderer, camera);
}

let target = 0;
let targetDirection = 1;
const rotateSpeed = 0.0002;
const titleBottom = 1.5;
const titleTop = 2;
let titleTarget = 0;
const titleAtTop = Math.PI / 10;
const titleStillness = 0.1;
function animate() {
    renderer.render(scene, camera);

    if (mainOrbit.rotation.x > Math.PI * 2) {
        mainOrbit.rotation.x -= Math.PI * 2;
    } else if (mainOrbit.rotation.x < 0) {
        mainOrbit.rotation.x += Math.PI * 2;
    }
    if (target > Math.PI * 2) {
        target -= Math.PI * 2;
    } else if (target < 0) {
        target += Math.PI * 2;
    }

    if (target > titleAtTop) {
        if (target < Math.PI * 2 - titleAtTop) {
            titleTarget = titleTop;
        } else if (target > Math.PI * 2 - titleStillness) {
            titleTarget = titleBottom;
        } else {
            let factor = ((Math.PI * 2 - titleStillness - target) / (titleAtTop - titleStillness));
            let scale = (1 - factor) * 0.5 + 0.5;
            textContainer.scale.set(scale, scale, scale);
            titleTarget = factor * (titleTop - titleBottom) + titleBottom;
        }
    } else if (target < titleStillness) {
        titleTarget = titleBottom;
    } else {
        let factor = ((target - titleStillness) / (titleAtTop - titleStillness));
        console.log(factor);
        let scale = (1 - factor) * 0.5 + 0.5;
        textContainer.scale.set(scale, scale, scale);
        titleTarget = factor * (titleTop - titleBottom) + titleBottom;
    }

    // console.log(textContainer.position.y, titleTarget);
    // titleTarget = target > titleAtTop && target < Math.Pi * 2 - titleAtTop
    //     ? titleTop
    //     : titleTop;

    if (titleTarget - textContainer.position.y > 0.01) {
        textContainer.position.y += 0.01;
    } else if (textContainer.position.y - titleTarget > 0.01) {
        textContainer.position.y -= 0.01;
    }

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

const scrollSpeed = 0.003;
function onMouseWheel(event) {
    // Adjust the planet's rotation based on the scroll input
    const isTrackpad = Math.abs(event.deltaY) < 100;
    let factor = event.deltaY > 0 ? 1 : -1;
    factor = isTrackpad ? factor * -1 : factor;
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
    const needResize = canvas.width !== width || canvas.height !== height;
    if (needResize) {
        renderer.setSize(width, height, false);
        camera.aspect = canvas.clientWidth / canvas.clientHeight;
        camera.updateProjectionMatrix();
    }
    return needResize;
}

const title = new Text();
title.text = 'Han Kortekaas';
title.fontSize = 0.2;
title.color = 0xffffbb;
title.anchorX = 'center';
title.sync();

const subTitle = new Text();
subTitle.text = 'Software Developer';
subTitle.fontSize = 0.08;
subTitle.color = 0xffffbb;
subTitle.anchorX = 'center';
subTitle.sync();

const textContainer = new THREE.Object3D();
textContainer.add(title);
textContainer.add(subTitle);

subTitle.position.setY(-0.2);
textContainer.position.setY(titleBottom);
scene.add(textContainer);
