class ApiClient {
  get() {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('Fetching a user profile');

        resolve({
          id: 123,
          name: 'John Smith',
        });
      })
    });
  }
}

module.exports = ApiClient;
