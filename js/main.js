import SceneManager from './SceneManager';

const canvas = document.querySelector('#canvas');
const sceneManager = new SceneManager(canvas);

bindEventListeners();
sceneManager.render();

function bindEventListeners() {
    window.addEventListener('resize', onWindowResize);
    window.addEventListener('wheel', onMouseWheel);
    // window.addEventListener('touchmove', (event) => console.log(event));
    onWindowResize();
}

function onWindowResize() {
    sceneManager.onWindowResize();
}

function onMouseWheel(event) {
    sceneManager.onMouseWheel(event);
}
