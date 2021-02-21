const MyPromise = require('./index');

const p1 = new MyPromise((resolve, reject) => {
  resolve(32);
});

const p2 = new MyPromise((resolve, reject) => {
  reject(new Error());
});

console.log(p1);
console.log(p2);
