import * as THREE from 'three';
import { Text } from 'troika-three-text'
import { FULL_CIRCLE } from '../constants';

export default class TitleText {
    constructor(scene) {
        this.scene = scene;

        this.titleBottom = 1.5;
        this.titleTop = 2;
        this.titleTarget = 0;
        this.titleAtTop = Math.PI / 10;
        this.titleStillness = 0.1;

        this.textContainer = new THREE.Object3D();
        this.titleColor = 0x118833;

        this.title = this.createTitle();
        this.subTitle = this.createSubTitle();

        this.textContainer.position.setY(this.titleBottom);
        this.scene.add(this.textContainer);
    }

    animate(position) {
        position = this.normalize(position);
        if (position > this.titleAtTop) {
            if (position < FULL_CIRCLE - this.titleAtTop) {
                this.titleTarget = this.titleTop;
            } else if (position > FULL_CIRCLE - this.titleStillness) {
                this.titleTarget = this.titleBottom;
            } else {
                let factor = ((FULL_CIRCLE - this.titleStillness - position) / (this.titleAtTop - this.titleStillness));
                let scale = (1 - factor) * 0.5 + 0.5;
                this.textContainer.scale.set(scale, scale, scale);
                this.titleTarget = factor * (this.titleTop - this.titleBottom) + this.titleBottom;
            }
        } else if (position < this.titleStillness) {
            this.titleTarget = this.titleBottom;
        } else {
            let factor = ((position - this.titleStillness) / (this.titleAtTop - this.titleStillness));
            let scale = (1 - factor) * 0.5 + 0.5;
            this.textContainer.scale.set(scale, scale, scale);
            this.titleTarget = factor * (this.titleTop - this.titleBottom) + this.titleBottom;
        }

        this.textContainer.position.y = this.titleTarget;
    }

    normalize(angle) {
        if (angle > FULL_CIRCLE) {
            return this.normalize(angle - FULL_CIRCLE);
        } else if (angle < 0) {
            return this.normalize(angle + FULL_CIRCLE);
        }
        return angle;
    }

    createTitle() {
        const title = this.createText('Han Kortekaas', 0.2);
        this.textContainer.add(title);
        title.sync();

        return title;
    }

    createSubTitle() {
        const subTitle = this.createText('Software Developer', 0.08);
        subTitle.position.setY(-0.2);
        this.textContainer.add(subTitle);
        subTitle.sync();

        return subTitle;
    }

    createText(str, size) {
        const text = new Text();
        text.text = str;
        text.fontSize = size;
        text.color = this.titleColor;
        text.anchorX = 'center';

        return text;
    }
}
