const ApiClient = require('./api-client');

class UserService {
  constructor() {
    this.apiClient = new ApiClient();
  }

  fetchUser() {
    return this.apiClient.get('/user');
  }
}

module.exports = UserService;
