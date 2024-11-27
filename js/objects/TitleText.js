import * as THREE from 'three';
import { Text } from 'troika-three-text'
import { FULL_CIRCLE, TEXT_COLOR } from '../constants';
import { normalizeAngle } from '../utils';

export default class TitleText {
    constructor(scene) {
        this.scene = scene;

        this.bottom = 1.5;
        this.top = 2.25;
        this.atTop = 0.35;
        this.stillness = 0.1;
        this.smallScale = 0.5;

        this.textContainer = new THREE.Object3D();

        this.title = this.createTitle();
        this.subTitle = this.createSubTitle();

        this.textContainer.position.setY(this.bottom);
        this.scene.add(this.textContainer);
    }

    animate(rotation) {
        rotation = normalizeAngle(rotation);
        if (rotation > this.atTop) {
            if (rotation < FULL_CIRCLE - this.atTop) {
                // Most of the rotation the text is at the top
                this.textContainer.position.y = this.top;
            } else if (rotation > FULL_CIRCLE - this.stillness) {
                // At the end of the circle there's a period of stillness with the text at the bottom
                this.textContainer.position.y = this.bottom;
            } else {
                // The text is moving and scaling
                let factor = ((FULL_CIRCLE - this.stillness - rotation) / (this.atTop - this.stillness));
                this.updateScaleAndPosition(factor);
            }
        } else if (rotation < this.stillness) {
            // At the beginning of the circle there's a period of stillness with the text at the bottom
            this.textContainer.position.y = this.bottom;
        } else {
            // Rotation is bigger than stillness but should not be at the top, so the text is moving and scaling
            let factor = ((rotation - this.stillness) / (this.atTop - this.stillness));
            this.updateScaleAndPosition(factor);
        }
    }

    updateScaleAndPosition(factor) {
        let scale = (1 - factor) * this.smallScale + this.smallScale;
        this.textContainer.scale.set(scale, scale, scale);
        this.textContainer.position.y = factor * (this.top - this.bottom) + this.bottom;
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
        text.color = TEXT_COLOR;
        text.anchorX = 'center';

        return text;
    }
}
