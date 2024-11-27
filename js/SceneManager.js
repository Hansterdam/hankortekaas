import * as THREE from 'three';
import { BACKGROUND_COLOR, FULL_CIRCLE, ROTATE_SPEED, SCROLL_SPEED } from './constants';
import MainOrbit from './objects/MainOrbit';
import EventBus from './EventBus';
import Lights from './objects/Lights';
import TitleText from './objects/TitleText';
import Page from './objects/Page';

export default class SceneManager {
    constructor(canvas) {
        this.canvas = canvas;
        this.renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
        this.renderer.setSize(window.innerWidth, window.innerHeight, false);

        this.createCamera();
        this.createScene();
        this.createMainOrbit();
        this.createLights();
        this.createTexts();

        this.target = 0;
        this.direction = 1;
        this.rotation = 0;
    }

    render() {
        this.renderer.setAnimationLoop(this.animate.bind(this));
    }

    onWindowResize() {
        const pixelRatio = window.devicePixelRatio;
        const width = Math.floor(this.canvas.clientWidth * pixelRatio);
        const height = Math.floor(this.canvas.clientHeight * pixelRatio);
        const needResize = canvas.width !== width || canvas.height !== height;
        if (needResize) {
            this.renderer.setSize(width, height, false);
            this.camera.aspect = this.canvas.clientWidth / this.canvas.clientHeight;
            this.camera.updateProjectionMatrix();
        }
    }

    onMouseWheel(event) {
        const isTrackpad = Math.abs(event.deltaY) < 100;
        let factor = event.deltaY > 0 ? 1 : -1;
        // Trackpad tends to scroll way too fast and in the wrong direction.
        // So we slow it down and reverse it.
        factor = isTrackpad ? factor * -0.15 : factor;

        this.target += factor * SCROLL_SPEED;
        this.direction = factor;
    }

    animate() {
        const easing = 0.01;
        if (this.direction > 0 && this.target > this.rotation) {
            this.rotation += (this.target - this.rotation) * easing;
        } else if (this.direction < 0 && this.target < this.rotation) {
            this.rotation -= (this.rotation - this.target) * easing;
        }

        this.mainOrbit.animate(this.rotation);
        this.titleContainer.animate(this.rotation);
        this.aboutContainer.animate(this.rotation);

        this.renderer.render(this.scene, this.camera);
    }

    createCamera() {
        this.camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000);
        this.camera.position.set(0, 1.3, 1.8);
        this.camera.lookAt(0, 1.5, 0);
    }

    createScene() {
        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color(BACKGROUND_COLOR);
    }

    createMainOrbit() {
        this.mainOrbit = new MainOrbit(this.scene);
    }

    createLights() {
        this.lights = new Lights(this.scene);
    }

    createTexts() {
        this.titleContainer = new TitleText(this.scene);
        this.aboutContainer = new Page(this.scene, 'About', -1);
    }
}
