export default class EventBus {
    static events = {};

    static subscribe(eventName, fn) {
        if (!this.events[eventName]) {
            this.events[eventName] = [];
        }
        this.events[eventName].push(fn);
    }

    static unsubscribe(eventName, fn) {
        if (!this.events[eventName]) {
            return;
        }
        this.events[eventName] = this.events[eventName].filter(eventFn => fn !== eventFn);
    }

    static publish(eventName, data) {
        if (!this.events[eventName]) {
            return;
        }
        this.events[eventName].forEach(eventFn => eventFn(data));
    }
}
