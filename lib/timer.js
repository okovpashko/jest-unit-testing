class Timer {
  constructor() {
    this.time = 0;
    this.timeoutId = null;
  }

  tick() {
    this.time += 1;
  }

  start() {
    this.timeoutId = setTimeout(() => {
      this.tick();
      this.start();
    }, 1000);
  }

  reset() {
    clearTimeout(this.timeoutId);
    this.time = 0;
  }
}

module.exports = Timer;
