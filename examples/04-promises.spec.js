
function sumAsync(first, second) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(first + second);
    }, 1000);
  });
}

describe('Promises', () => {
  test('check sum result', () => {
    return sumAsync(5, 3)
      .then((sum) => {
        expect(sum).toBe(8);
      })
  });
});
