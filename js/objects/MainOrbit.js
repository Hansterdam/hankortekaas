import * as THREE from 'three';
import Planet from './Planet';
import { ROTATE_SPEED, SCROLL_SPEED } from '../constants';
import EventBus from '../EventBus';
import Stars from './Stars';

export default class MainOrbit {
    constructor(scene) {
        this.scene = scene;
        this.orbit = new THREE.Object3D();
        this.scene.add(this.orbit);

        this.planet = new Planet(this.orbit);
        this.stars = new Stars(this.orbit);

        this.target = 0;
        this.targetDirection = 1;

        EventBus.subscribe('scroll', this.onMouseWheel.bind(this));
    }

    add(object) {
        this.orbit.add(object);
    }

    onMouseWheel(factor) {
        this.target += factor * SCROLL_SPEED;
        this.targetDirection = factor;
    }

    animate() {
        const easing = 0.01;
        if (this.targetDirection > 0 && this.target > this.orbit.rotation.x) {
            this.orbit.rotation.x += (this.target - this.orbit.rotation.x) * easing;
        } else if (this.targetDirection < 0 && this.target < this.orbit.rotation.x) {
            this.orbit.rotation.x -= (this.orbit.rotation.x - this.target) * easing;
        } else {
            this.orbit.rotation.x = this.normalize(this.orbit.rotation.x);
            this.target = this.normalize(this.target);
        }

        EventBus.publish('rotation', this.orbit.rotation.x);
        this.planet.animate();
    }

    normalize(angle) {
        if (angle > Math.PI * 2) {
            angle -= Math.PI * 2;
        } else if (angle < 0) {
            angle += Math.PI * 2;
        }

        return angle;
    }
}
