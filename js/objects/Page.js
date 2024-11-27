import * as THREE from 'three';
import PageTitle from './PageTitle';

export default class Page {
    constructor(scene, titleText, rotationPosition) {
        this.scene = scene;

        this.titleBottom = 1.5;
        this.titleTop = 2;
        this.titleTarget = 0;
        this.titleAtTop = Math.PI / 10;
        this.titleStillness = 0.1;

        this.textContainer = new THREE.Object3D();
        this.titleColor = 0x118833;

        this.title = new PageTitle(this.scene, titleText, rotationPosition);

        this.textContainer.position.setY(this.titleBottom);
        this.scene.add(this.textContainer);
    }

    animate(rotation) {
        this.title.animate(rotation);
    }
}
