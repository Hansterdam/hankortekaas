import * as THREE from 'three';

export default class Planet {
    constructor(orbit) {
        this.orbit = orbit;

        const geometry = new THREE.DodecahedronGeometry(1, 3);
        const material = new THREE.MeshPhongMaterial({
            color: 0x998844,
            flatShading: true,
            shininess: 0,
        });
        this.planet = new THREE.Mesh(geometry, material);
        this.orbit.add(this.planet);
    }

    animate() {

    }
}
