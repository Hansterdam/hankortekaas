import SceneManager from './SceneManager';

const canvas = document.querySelector('#canvas');
const sceneManager = new SceneManager(canvas);

bindEventListeners();
sceneManager.render();

function bindEventListeners() {
    window.onresize = onWindowResize;
    window.onwheel = onMouseWheel;
    onWindowResize();
}

function onWindowResize() {
    sceneManager.onWindowResize();
}

function onMouseWheel(event) {
    sceneManager.onMouseWheel(event);
}
