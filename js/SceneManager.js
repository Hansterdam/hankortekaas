import * as THREE from 'three';
import { Text } from 'troika-three-text'
import { BACKGROUND_COLOR, FULL_CIRCLE, ROTATE_SPEED, SCROLL_SPEED } from './constants';
import MainOrbit from './objects/MainOrbit';
import EventBus from './EventBus';
import Lights from './objects/Lights';
import TitleText from './objects/TitleText';

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
        this.position = 0;
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
        if (this.direction > 0 && this.target > this.position) {
            this.position += (this.target - this.position) * easing;
        } else if (this.direction < 0 && this.target < this.position) {
            this.position -= (this.position - this.target) * easing;
        } else {
            this.position = this.normalize(this.position);
            this.target = this.normalize(this.target);
        }

        this.mainOrbit.animate(this.position);
        this.titleContainer.animate(this.position);

        this.renderer.render(this.scene, this.camera);
    }

    normalize(angle) {
        if (angle > FULL_CIRCLE) {
            angle -= FULL_CIRCLE;
        } else if (angle < 0) {
            angle += FULL_CIRCLE;
        }

        return angle;
    }

    createCamera() {
        this.camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000);
        this.camera.position.set(0, 1.3, 1.8);
        this.camera.lookAt(0, 1.3, 0);
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

        this.titleBottom = 1.5;
        this.titleTop = 2;
        this.titleTarget = 0;
        this.titleAtTop = Math.PI / 10;
        this.titleStillness = 0.1;

        const titleColor = 0x118833;

        this.aboutTitle = new Text();
        this.aboutTitle.text = 'About';
        this.aboutTitle.fontSize = 0.17;
        this.aboutTitle.color = titleColor;
        this.aboutTitle.anchorX = 'center';
        this.aboutTitle.sync();
        this.aboutTitle.position.setY(1.3);

        this.aboutTitleContainer = new THREE.Object3D();
        this.aboutTitleContainer.add(this.aboutTitle);
        this.aboutTitleContainer.rotation.x = -1;
        this.scene.add(this.aboutTitleContainer);
    }
}
