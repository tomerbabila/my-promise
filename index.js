const states = {
  pending: 'pending',
  fulfilled: 'fulfilled',
  rejected: 'rejected',
};

class MyPromise {
  constructor() {
    this.state = states.pending;
    this.value = undefined;
    this.handlers = [];
  }
}
