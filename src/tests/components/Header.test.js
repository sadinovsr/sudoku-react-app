import React from 'react'
import { shallow } from 'enzyme';
import Header from '../../components/Header/Header';

describe('<Header />', () => {
  it('Component renders', () => {
    shallow(<Header />);
  });
  it('Component renders when user is logged in', () => {
    Storage.prototype.getItem = jest.fn(() => 'token');
    shallow(<Header/>);
  });
  it('should update state on doRedirectToLogin()', () => {
    const wrapper = shallow(<Header />);
    const instance = wrapper.instance();
    expect(wrapper.state('doRedirectToLogin')).toBe(false);
    instance.setRedirectToLogin();
    expect(wrapper.state('doRedirectToLogin')).toBe(true);
  });
  it('should update state on handleLogout()', () => {
    const onLogout = jest.fn();
    const wrapper = shallow(<Header onLogout={onLogout} />);
    const instance = wrapper.instance();
    expect(wrapper.state('doRedirectToLogin')).toBe(false);
    expect(wrapper.state('isLoggedIn')).toBe(true);
    instance.handleLogout();
    expect(wrapper.state('doRedirectToLogin')).toBe(false);
    expect(wrapper.state('isLoggedIn')).toBe(false);
    expect(onLogout).toHaveBeenCalledTimes(1);
  });
  it('should update state on toggleDropdown()', () => {
    const wrapper = shallow(<Header />);
    const instance = wrapper.instance();
    expect(wrapper.state('isDropdownOpen')).toBe(false);
    instance.toggleDropdown();
    expect(wrapper.state('isDropdownOpen')).toBe(true);
  });
  it('should see dropdown menu without admin routes', () => {
    const user = {
      username: 'username',
      level: 'user',
    }
    const wrapper = shallow(<Header user={user}/>);
    const instance = wrapper.instance();
    instance.toggleDropdown();
    expect(wrapper.state('isDropdownOpen')).toBe(true);
    expect(wrapper.find('DropdownItem')).toHaveLength(5);
  });
  it('should see dropdown menu with admin routes', () => {
    const user = {
      username: 'username',
      level: 'admin',
    }
    const wrapper = shallow(<Header user={user}/>);
    const instance = wrapper.instance();
    instance.toggleDropdown();
    expect(wrapper.state('isDropdownOpen')).toBe(true);
    expect(wrapper.find('DropdownItem')).toHaveLength(8);
  });
})