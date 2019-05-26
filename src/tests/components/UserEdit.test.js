import React from 'react'
import { shallow } from 'enzyme';
import UserEdit from '../../components/UserEdit/UserEdit';

describe('<UserEdit />', () => {
  it('Component renders', () => {
    const user = {
      username: 'username',
      email: 'email',
    }
    shallow(<UserEdit user={user}/>);
  })
  it('should update state on input change', () => {
    const user = {
      username: 'username',
      email: 'email',
    }
    const wrapper = shallow(<UserEdit user={user} />);
    const instance = wrapper.instance();
    const element = {
      target: {
        name: 'username',
        value: 'x',
      }
    }
    expect(wrapper.state('username')).toBe('username');
    instance.onInputChange(element);
    expect(wrapper.state('username')).toBe('x');
  });
  it('should call onClose() when button clicked', () => {
    const user = {
      username: 'username',
      email: 'email',
    }
    const onClose = jest.fn();
    const wrapper = shallow(<UserEdit user={user} onClose={onClose} />)
    wrapper.find('Button').at(0).simulate('click');
    expect(onClose).toHaveBeenCalledTimes(1);
  });
  it('should call onUserUpdate() when button clicked', () => {
    const user = {
      username: 'username',
      email: 'email',
    }
    const onUserUpdate = jest.fn();
    const wrapper = shallow(<UserEdit user={user} onUserUpdate={onUserUpdate} />)
    wrapper.find('Button').at(1).simulate('click');
    expect(onUserUpdate).toHaveBeenCalledTimes(1);
  });
})