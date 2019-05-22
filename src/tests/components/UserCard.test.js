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
  it('should call handleDelete() on button click', () => {
    const user = {
      _id: '_id',
      username: 'username',
      email: 'email',
      createdAt: 'createdAt',
    }
    const handleDelete = jest.fn();
    const wrapper = shallow(<UserCard user={user} handleDelete={handleDelete}/>);
    wrapper.find('Button').at(1).simulate('click');
    expect(handleDelete).toHaveBeenCalledTimes(1);
  });
})