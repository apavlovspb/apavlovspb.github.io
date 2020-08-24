import { DomListener } from '@core/DomListener';

export class FlexTableComponent extends DomListener {
  constructor($root, options = {}) {
    super($root, options.listeners);
    this.name = options.name || '';
    this.observer = options.observer;
    this.MAINARR = options.mainArray;
    this.apiService = options.apiService;
    this.unsubs = [];
    this.prepare();
  }
  prepare() {}
  toHTML() {
    return '';
  }

  trigger(event, ...args) {
    this.observer.trigger(event, ...args);
  }
  subscribe(event, fn) {
    const unsub = this.observer.subscribe(event, fn);
    this.unsubs.push(unsub);
  }

  init() {
    this.initDOMListeners();
  }

  destroy() {
    this.removeDOMListeners();
    this.unsubs.forEach((unsub) => unsub());
  }
}
