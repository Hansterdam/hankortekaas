import * as THREE from 'three';

export default class Stars {
    shift = 0.1;
    rings = 9;
    starCount = 2000;

    distanceToCenter = 50;
    outerRadius = 600;
    minSize = 0.4;
    maxSize = 0.9;

    constructor(orbit) {
        this.orbit = orbit;
        this.stars = [];

        const geometry = new THREE.SphereGeometry(1, 12, 7);
        const material = new THREE.MeshBasicMaterial({
            color: 0xffffbb,
        });

        let minSize = this.minSize;
        let maxSize = this.maxSize;
        for (let i = 0; i < this.rings; i++) {
            const starOrbit = new THREE.Object3D();
            const triangular = this.triangular(this.rings);
            const layerCount = this.starCount / triangular;
            const count = layerCount * (i + 1);
            const innerDistance = (this.outerRadius - this.distanceToCenter) / this.rings * i + this.distanceToCenter;
            const outerDistance = (this.outerRadius - this.distanceToCenter) / this.rings * (i + 1) + this.distanceToCenter;

            let sizeDiff = (this.maxSize - this.minSize) / triangular;
            maxSize = sizeDiff * (i + 1) + minSize;
            for (let j = 0; j < count; j++) {
                const star = new THREE.Mesh(geometry, material);
                star.position.add(this.getRandomPositions(innerDistance, outerDistance));
                star.scale.setScalar(Math.random() * (maxSize - minSize) + minSize);
                starOrbit.add(star);
            }
            this.orbit.add(starOrbit);
            this.stars.push(starOrbit);
            minSize = maxSize;
        }
    }

    animate(position) {
        const uneven = this.rings % 2;
        const steps = Math.floor(this.rings / 2);
        if (uneven) {
            for (let i = 0; i < steps; i++) {
                this.stars[i].rotation.x = position * (this.shift / steps) * (i + 1);
                this.stars[this.rings - i - 1].rotation.x = position * -(this.shift / steps) * (i + 1);
            }
        } else {
            for (let i = 0; i < steps; i++) {
                this.stars[i].rotation.x = position * (this.shift / steps) * (i + 0.5);
                this.stars[this.rings - i - 1].rotation.x = position * -(this.shift / steps) * (i + 0.5);
            }
        }
    }

    triangular(n) {
        return (n * (n + 1)) / 2;
    }

    getRandomPositions(distanceToCenter, outerRadius) {
        const vector = new THREE.Vector3();
        vector.randomDirection();
        vector.multiplyScalar(Math.random() * (outerRadius - distanceToCenter) + distanceToCenter);
        return vector;
    }
}
