import React from 'react'
import { shallow } from 'enzyme';
import { HeaderContainer } from '../../containers/HeaderContainer';

describe('<HeaderContainer />', () => {
  it('should render with user info', () => {
    const getUserSelf = jest.fn();
    Storage.prototype.getItem = jest.fn(() => 'token');
    shallow(<HeaderContainer getUserSelf={getUserSelf} />)
    expect(getUserSelf).toHaveBeenCalledTimes(1);
  });
  it('should call logout() on onLogout()', () => {
    Storage.prototype.getItem = jest.fn(() => null);
    const logout = jest.fn();
    const wrapper = shallow(<HeaderContainer logout={logout} />);
    const instance = wrapper.instance();
    instance.onLogout();
    expect(logout).toHaveBeenCalledTimes(1);
  });
})