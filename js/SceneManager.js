import * as THREE from 'three';
import { Text } from 'troika-three-text'
import { BACKGROUND_COLOR, ROTATE_SPEED, SCROLL_SPEED } from './constants';
import MainOrbit from './objects/MainOrbit';
import EventBus from './EventBus';

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
        this.targetDirection = 1;
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
        factor = isTrackpad ? factor * -0.2 : factor;

        EventBus.publish('scroll', factor);
    }

    animate() {
        this.renderer.render(this.scene, this.camera);
        this.mainOrbit.animate();

        // if (this.target > this.titleAtTop) {
        //     if (this.target < Math.PI * 2 - this.titleAtTop) {
        //         this.titleTarget = this.titleTop;
        //     } else if (this.target > Math.PI * 2 - this.titleStillness) {
        //         this.titleTarget = this.titleBottom;
        //     } else {
        //         let factor = ((Math.PI * 2 - this.titleStillness - this.target) / (this.titleAtTop - this.titleStillness));
        //         let scale = (1 - factor) * 0.5 + 0.5;
        //         this.textContainer.scale.set(scale, scale, scale);
        //         this.titleTarget = factor * (this.titleTop - this.titleBottom) + this.titleBottom;
        //     }
        // } else if (this.target < this.titleStillness) {
        //     this.titleTarget = this.titleBottom;
        // } else {
        //     let factor = ((this.target - this.titleStillness) / (this.titleAtTop - this.titleStillness));
        //     let scale = (1 - factor) * 0.5 + 0.5;
        //     this.textContainer.scale.set(scale, scale, scale);
        //     this.titleTarget = factor * (this.titleTop - this.titleBottom) + this.titleBottom;
        // }

        // if (this.titleTarget - this.textContainer.position.y > 0.01) {
        //     this.textContainer.position.y += 0.01;
        // } else if (this.textContainer.position.y - this.titleTarget > 0.01) {
        //     this.textContainer.position.y -= 0.01;
        // }

        // if (this.targetDirection === 1) {
        //     while (this.target > this.mainOrbit.rotation.x) {
        //         this.aboutTitleContainer.rotation.x += ROTATE_SPEED;
        //     }
        // } else {
        //     while (this.target < this.mainOrbit.rotation.x) {
        //         this.aboutTitleContainer.rotation.x -= ROTATE_SPEED;
        //     }
        // }
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

    getRandomPositions(distanceToCenter, outerRadius) {
        const vector = new THREE.Vector3();
        vector.randomDirection();
        vector.multiplyScalar(Math.random() * (outerRadius - distanceToCenter) + distanceToCenter);
        return vector;
    }

    createLights() {
        const color = 0xffffff;
        const intensity = 0.4;
        const light = new THREE.DirectionalLight(color, intensity);
        light.position.set(-1, 2, 6);
        this.scene.add(light);

        const light2 = new THREE.DirectionalLight(color, 10);
        light2.position.set(0, 0.5, -2);
        light2.lookAt(0, 2, 2);
        this.scene.add(light2);
    }

    createTexts() {
        this.titleBottom = 1.5;
        this.titleTop = 2;
        this.titleTarget = 0;
        this.titleAtTop = Math.PI / 10;
        this.titleStillness = 0.1;

        const titleColor = 0x118833;
        this.title = new Text();
        this.title.text = 'Han Kortekaas';
        this.title.fontSize = 0.2;
        this.title.color = titleColor;
        this.title.anchorX = 'center';
        this.title.sync();

        this.subTitle = new Text();
        this.subTitle.text = 'Software Developer';
        this.subTitle.fontSize = 0.08;
        this.subTitle.color = titleColor;
        this.subTitle.anchorX = 'center';
        this.subTitle.sync();

        this.textContainer = new THREE.Object3D();
        this.textContainer.add(this.title);
        this.textContainer.add(this.subTitle);

        this.subTitle.position.setY(-0.2);
        this.textContainer.position.setY(this.titleBottom);
        this.scene.add(this.textContainer);

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
