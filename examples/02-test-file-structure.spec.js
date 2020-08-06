
describe('My super module', () => {
  beforeAll(() => {
    // called before all tests
    console.log('beforeAll');
  });

  beforeEach(() => {
    // called before each test
    console.log('beforeEach');
  });

  test('some test', () => {
    console.log('some test');
  });

  describe('some tests group', () => {
    test('another test', () => {
      console.log('another test');
    });
  });

  afterEach(() => {
    // called after each test
    console.log('afterEach');
  });

  afterAll(() => {
    // called after all tests
    console.log('afterAll');
  });
});
