class Greeting {
  getName() {
    return 'John';
  }

  sayHello() {
    console.log(`Hello ${this.getName()}`);
  }
}

describe('Mock functions', () => {
  test('a simple mock', () => {
    const mock = jest.fn()
      .mockImplementation(() => console.log('I\'m a mock'));
    mock();
    expect(mock).toHaveBeenCalled();
  });

  test('spy on a method', () => {
    const instance = new Greeting();
    jest.spyOn(instance, 'getName');

    instance.sayHello();

    expect(instance.getName).toHaveBeenCalled();
    expect(instance.getName.mock.results[0].value)
      .toBe('John');

    instance.getName.mockReturnValue('Bill');
    expect(instance.getName()).toBe('Bill');
  });
});
