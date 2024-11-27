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
    }

    add(object) {
        this.orbit.add(object);
    }

    animate(rotation) {
        this.orbit.rotation.x = rotation;
        this.planet.animate(rotation);
        this.stars.animate(rotation);
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
