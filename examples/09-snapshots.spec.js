import React from 'react';
import renderer from 'react-test-renderer';

import MyLink from '../lib/my-link-component';
import UserService from '../lib/user-service';


describe('Snapshots', () => {
  test('objects', () => {
    const userService = new UserService();

    const user = {
      id: 11,
      name: 'Bill',
      age: 19,
    };

    const updatedUser = userService.updateUser(user, {
      email: 'bill2example.com',
      phone: '+12345678',
      gender: 'male',
    });

    expect(updatedUser).toMatchSnapshot();
  });

  test('React component', () => {
    const component = renderer.create(
      <MyLink href="http://www.facebook.com">Facebook</MyLink>,
    );

    const tree = component.toJSON();

    expect(tree).toMatchSnapshot()
  });
});