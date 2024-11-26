import * as THREE from 'three';

export default class Stars {
    constructor(orbit) {
        this.orbit = orbit;
        this.stars = [];

        const geometry = new THREE.SphereGeometry(1, 12, 7);
        const material = new THREE.MeshBasicMaterial({
            color: 0xffffbb,
        });
        const distanceToCenter = 50;
        const outerRadius = 1200;
        const minSize = 0.4;
        const maxSize = 0.9;

        for (let i = 0; i < 700; i++) {
            const star = new THREE.Mesh(geometry, material);
            star.position.add(this.getRandomPositions(distanceToCenter, outerRadius));
            star.scale.setScalar(Math.random() * (maxSize - minSize) + minSize);
            this.orbit.add(star);
            this.stars.push(star);
        }
    }

    getRandomPositions(distanceToCenter, outerRadius) {
        const vector = new THREE.Vector3();
        vector.randomDirection();
        vector.multiplyScalar(Math.random() * (outerRadius - distanceToCenter) + distanceToCenter);
        return vector;
    }
}
