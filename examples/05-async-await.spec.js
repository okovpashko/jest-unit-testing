
function sumAsync(first, second) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(first + second);
    }, 1000);
  });
}

describe('Async/await', () => {
  test('check sum result', async () => {
    const sum = await sumAsync(5, 3);

    expect(sum).toBe(8);
  });
});
