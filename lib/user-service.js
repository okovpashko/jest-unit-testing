const ApiClient = require('./api-client');

class UserService {
  constructor() {
    this.apiClient = new ApiClient();
  }

  fetchUser() {
    return this.apiClient.get('/user');
  }

  updateUser(user, newProps) {
    return {...this.user, ...newProps};
  }
}

module.exports = UserService;
