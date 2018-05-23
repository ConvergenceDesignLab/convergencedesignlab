/**
 * Throttled window.scroll event emitter singleton
 */

import throttle from "lodash.throttle";

class WindowEvent {
  listeners = [];
  isListening = false;

  constructor(eventName, throttleDelay = 100) {
    this.eventName = eventName;
    this.throttleDelay = 100;
  }

  addListener(cb) {
    if (typeof cb === "function") {
      this.listeners.push(cb);
      this.updateSubscription();
    } else {
      throw new Error(`addListener requires a function as an argument. ${cb} is not a function.`);
    }
  }

  removeListener(cb) {
    this.listeners = this.listeners.filter(fn => fn !== cb);
    this.updateSubscription();
  }

  updateSubscription() {
    if (this.isListening && this.listeners.length === 0) {
      window.removeEventListener(this.eventName, this.emit);
      this.isListening = false;
    } else if (!this.isListening && this.listeners.length > 0) {
      window.addEventListener(this.eventName, this.emit);
      this.isListening = true;
    }
  }

  emit = throttle(() => this.listeners.forEach(cb => cb()), this.throttleDelay, { trailing: true });
}

const scrollEvent = new WindowEvent("scroll");

export default scrollEvent;
