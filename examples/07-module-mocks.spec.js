const UserService = require('../lib/user-service');

jest.mock('../lib/api-client');

describe('UserService', () => {
  const userProfile = {id: 999, name: 'Jackie'};
  let instance;

  beforeEach(() => {
    instance = new UserService();
    instance.apiClient.get.mockResolvedValue(userProfile);
  });

  test('fetching user profile', async () => {
    const result = await instance.fetchUser();

    expect(instance.apiClient.get)
      .toHaveBeenCalledWith('/user');
    expect(result).toEqual(userProfile);
  });
});
