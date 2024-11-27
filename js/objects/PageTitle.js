import * as THREE from 'three';
import { Text } from 'troika-three-text';
import { normalizeAngle } from '../utils';
import { TEXT_COLOR } from '../constants';

export default class PageTitle {
    constructor(scene, titleText, rotationOffset) {
        this.scene = scene;
        this.rotationOffset = rotationOffset;

        this.bottom = 1.3;
        this.top = 2.7;
        this.atTop = Math.PI / 10;
        this.stillness = 0.2;
        this.pageLoad = 0.5;
        this.smallScale = 0.7;

        this.textContainer = new THREE.Object3D();
        this.scene.add(this.textContainer);

        this.title = this.createTitle(titleText);
        this.textContainer.add(this.title);

        this.textContainer.rotation.x = rotationOffset;
    }

    animate(rotation) {
        rotation = normalizeAngle(rotation);
        if (rotation + this.rotationOffset < 0) {
            this.textContainer.rotation.x = rotation + this.rotationOffset;
        } else if (rotation + this.rotationOffset < this.stillness) {
            this.textContainer.rotation.x = 0;
        } else if (rotation + this.rotationOffset - this.stillness < this.pageLoad) {
            this.textContainer.rotation.x = 0;
            let factor = (rotation + this.rotationOffset - this.stillness) / this.pageLoad;
            this.updateScaleAndPosition(factor);
        } else {
            this.textContainer.rotation.x = rotation + this.rotationOffset - this.stillness - this.pageLoad;
        }
    }

    updateScaleAndPosition(factor) {
        let scale = (1 - factor) * (1 - this.smallScale) + this.smallScale;
        this.textContainer.scale.set(scale, scale, scale);
        this.title.position.setY(factor * (this.top - this.bottom) + this.bottom);
    }

    createTitle(titleText) {
        const title = new Text();
        title.text = titleText;
        title.fontSize = 0.17;
        title.color = TEXT_COLOR;
        title.anchorX = 'center';
        title.position.setY(1.3);
        title.sync();

        return title;
    }
}
