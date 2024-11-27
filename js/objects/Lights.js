import * as THREE from 'three';

export default class Lights {
    constructor(scene) {
        this.scene = scene;
        this.lights = [];

        this.color = 0xffffff;
        this.backLight = this.createBackLight();
        this.frontLight = this.createFrontLight();
    }

    createFrontLight() {
        const intensity = 0.4;
        const light = new THREE.DirectionalLight(this.color, intensity);
        light.position.set(-1, 2, 6);
        this.scene.add(light);
        this.lights.push(light);

        return light;
    }

    createBackLight() {
        const intensity = 10;
        const light = new THREE.DirectionalLight(this.color, intensity);
        light.position.set(0, 0.5, -2);
        light.lookAt(0, 2, 2);
        this.scene.add(light);
        this.lights.push(light);

        return light;
    }
}
