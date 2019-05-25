import React from 'react'
import { shallow } from 'enzyme';
import { AdminDashboardContainer } from '../../containers/AdminDashboardContainer';

describe('<AdminDashboardContainer />', () => {
  it('should render', () => {
    shallow(<AdminDashboardContainer />);    
  });
  it('should not get adminDashboardData()', () => {
    Storage.prototype.getItem = jest.fn(() => 'token');
    const getUserSelf = jest.fn();
    const getAdminDashboardData = jest.fn();
    const push = jest.fn();
    const user = {
      level: 'user'
    }
    const wrapper = shallow(<AdminDashboardContainer history={{push: push}} user={user} getUserSelf={getUserSelf} getAdminDashboardData={getAdminDashboardData} />);
    expect(getUserSelf).toHaveBeenCalledTimes(1);
    expect(getAdminDashboardData).toHaveBeenCalledTimes(0);
    expect(push).toHaveBeenCalledTimes(1);
  });
  it('should get adminDashboardData()', () => {
    Storage.prototype.getItem = jest.fn(() => 'token');
    const getUserSelf = jest.fn();
    const getAdminDashboardData = jest.fn();
    const user = {
      level: 'admin'
    }
    const wrapper = shallow(<AdminDashboardContainer user={user} getUserSelf={getUserSelf} getAdminDashboardData={getAdminDashboardData} />);
    expect(getUserSelf).toHaveBeenCalledTimes(1);
    expect(getAdminDashboardData).toHaveBeenCalledTimes(0);
  });
  it('should call deleteUser and getAdminDashboardData on onDeleteUser()', async () => {
    Storage.prototype.getItem = jest.fn(() => null);
    const deleteUser = jest.fn(() => true);
    const getAdminDashboardData = jest.fn();
    const userId = 'userId';
    const wrapper = shallow(<AdminDashboardContainer deleteUser={deleteUser} getAdminDashboardData={getAdminDashboardData} />);
    const instance = wrapper.instance();
    const deleted = await instance.onDeleteUser(userId);
    expect(deleted).resolves;
    expect(deleteUser).toHaveBeenCalledWith(userId);
    expect(deleteUser).toHaveBeenCalledTimes(1);
    expect(getAdminDashboardData).toHaveBeenCalledTimes(1);
  });
});