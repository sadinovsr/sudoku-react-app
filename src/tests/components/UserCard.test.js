import React from 'react'
import { shallow } from 'enzyme';
import UserCard from '../../components/UserCard/UserCard';

describe('<UserCard />', () => {
  it('Component renders', () => {
    const user = {
      _id: '_id',
      username: 'username',
      email: 'email',
      createdAt: 'createdAt',
    }
    shallow(<UserCard user={user} />);
  })
  it('Should have a className UserCard', () => {
    const user = {
      _id: '_id',
      username: 'username',
      email: 'email',
      createdAt: 'createdAt',
    }
    expect(shallow(<UserCard user={user}/>).is('.UserCard')).toBe(true);
  })
})