import React from 'react'
import { shallow } from 'enzyme';
import { ProfileCardContainer } from '../../containers/ProfileCardContainer';

describe('<ProfileCardContainer />', () => {
  it('should render with authorized user', () => {
    Storage.prototype.getItem = jest.fn(() => 'token');
    const getUserSelf = jest.fn();
    const getHistoryStatistics = jest.fn();
    shallow(<ProfileCardContainer getUserSelf={getUserSelf} getHistoryStatistics={getHistoryStatistics} />);
    expect(getUserSelf).toHaveBeenCalledTimes(1);
    expect(getHistoryStatistics).toHaveBeenCalledTimes(1);
  });
  it('should render with authorized user', () => {
    Storage.prototype.getItem = jest.fn(() => null);
    const user = {
      username: 'username'
    }
    const wrapper = shallow(<ProfileCardContainer user={user} />);
    expect(wrapper.exists('ProfileCard')).toBe(true);
  });
  it('should call updateUser(), logout() and push() on onUpdate()', async () => {
    const getUserSelf = jest.fn();
    const updateUser = jest.fn();
    const logout = jest.fn();
    const push = jest.fn();
    const wrapper = shallow(<ProfileCardContainer isUpdated={true} getUserSelf={getUserSelf} updateUser={updateUser} logout={logout} history={{push: push}} />)
    const instance = wrapper.instance();
    await instance.onUpdate('userId', 'newUserObject', true);
    expect(updateUser).toHaveBeenCalledTimes(1);
    expect(updateUser).toHaveBeenCalledWith('userId', 'newUserObject');
    expect(logout).toHaveBeenCalledTimes(1);
    expect(push).toHaveBeenCalledTimes(1);
    expect(push).toHaveBeenCalledWith('/login');
    expect(getUserSelf).toHaveBeenCalledTimes(0);
  });
  it('should not call updateUser() on onUpdate()', async () => {
    const updateUser = jest.fn();
    const wrapper = shallow(<ProfileCardContainer updateUser={updateUser} />)
    const instance = wrapper.instance();
    await instance.onUpdate('userId', null, true);
    expect(updateUser).toHaveBeenCalledTimes(0);
  });
  it('should call updateUser() and getUserSelf() on onUpdate()', async () => {
    const getUserSelf = jest.fn();
    const updateUser = jest.fn();
    const logout = jest.fn();
    const push = jest.fn();
    const wrapper = shallow(<ProfileCardContainer isUpdated={true} getUserSelf={getUserSelf} updateUser={updateUser} logout={logout} history={{push: push}} />)
    const instance = wrapper.instance();
    await instance.onUpdate('userId', 'newUserObject', false);
    expect(updateUser).toHaveBeenCalledTimes(1);
    expect(updateUser).toHaveBeenCalledWith('userId', 'newUserObject');
    expect(logout).toHaveBeenCalledTimes(0);
    expect(push).toHaveBeenCalledTimes(0);
    expect(getUserSelf).toHaveBeenCalledTimes(1);
  });
})