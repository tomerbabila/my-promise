const states = {
  pending: 'pending',
  fulfilled: 'fulfilled',
  rejected: 'rejected',
};

class MyPromise {
  constructor(executor) {
    this.state = states.pending;
    this.value = undefined;
    this.handlers = [];

    const resolve = (result) => {
      this.state = states.fulfilled;
      this.value = result;
    };

    const reject = (error) => {
      this.state = states.rejected;
      this.value = error;
    };

    // execute callback
    executor(resolve, reject);
  }
}

module.exports = MyPromise;
