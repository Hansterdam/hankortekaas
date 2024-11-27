import { FULL_CIRCLE } from "./constants";

const normalizeAngle = (angle) => {
    if (angle > FULL_CIRCLE) {
        return normalizeAngle(angle - FULL_CIRCLE);
    } else if (angle < 0) {
        return normalizeAngle(angle + FULL_CIRCLE);
    }
    return angle;
}

export { normalizeAngle };
