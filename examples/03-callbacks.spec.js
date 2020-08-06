
function sumAsync(first, second, onSuccess) {
  setTimeout(() => {
    onSuccess(first + second);
  }, 1000);
}

describe('Callbacks', () => {
  test('check sum result', (done) => {
    const callback = (sum) => {
      expect(sum).toBe(8);
      done();
    };

    sumAsync(5, 3, callback)
  });
});
