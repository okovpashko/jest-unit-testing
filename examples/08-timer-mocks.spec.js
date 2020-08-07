const Timer = require('../lib/timer');

describe('Timer mocks', () => {
  test('testing setTimeout', () => {
    jest.useFakeTimers();

    const timer = new Timer();
    timer.start();

    jest.advanceTimersByTime(3500);

    expect(timer.time).toBe(3);

    jest.useRealTimers();
  });
});
