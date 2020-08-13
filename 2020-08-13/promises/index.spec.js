const createPromise = require('.');

describe('createPromise', () => {
  it('...', () => {
    const promise = createPromise();
    expect(promise instanceof Promise).toBe(true);

    return promise.then((value) => {
      expect(value).toBe(1);
    });
  });
});