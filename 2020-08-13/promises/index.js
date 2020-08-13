// const createPromise = () => {
//   return Promise.resolve(true);
// };

const createPromise = (a = true) => new Promise((resolve, reject) => {
  setTimeout(() => {
    if (!a) {
      return reject(new Error('OMG'));
    }
    resolve(1);
  }, 100);
});

module.exports = createPromise;
