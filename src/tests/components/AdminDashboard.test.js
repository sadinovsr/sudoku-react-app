import React from 'react'
import { shallow } from 'enzyme';
import AdminDashboard from '../../components/AdminDashboard/AdminDashboard';

describe('<AdminDashboard />', () => {
  it('Component renders', () => {
    shallow(<AdminDashboard />);
  })
  it('should update state when handleDelete() is called', () => {
    const onDeleteUser = jest.fn();
    const wrapper = shallow(<AdminDashboard onDeleteUser={onDeleteUser} />);
    const instance = wrapper.instance();
    const userId = 'userId';
    wrapper.setState({ userCard: { isOpen: true, user: { username: 'username', email: 'email' } } })
    expect(wrapper.state('userCard')).toEqual({ isOpen: true, user: { username: 'username', email: 'email' } });
    instance.handleDelete(userId);
    expect(wrapper.state('userCard')).toEqual({ isOpen: false, user: {} });
    expect(onDeleteUser).toHaveBeenCalledTimes(1);
  });
  it('should update state when onOpenUserCard() is called', () => {
    const wrapper = shallow(<AdminDashboard />);
    const instance = wrapper.instance();
    const user = {
      username: 'username',
      password: 'password',
    }
    expect(wrapper.state('userCard')).toEqual({ isOpen: false, user: {} });
    instance.onOpenUserCard(user);
    expect(wrapper.state('userCard')).toEqual({ isOpen: true, user: user });
  });
  it('should update state when onCloseUserCard() is called', () => {
    const wrapper = shallow(<AdminDashboard />);
    const instance = wrapper.instance();
    const user = {
      username: 'username',
      password: 'password',
    }
    wrapper.setState({ userCard: { isOpen: true, user: user } });
    expect(wrapper.state('userCard')).toEqual({ isOpen: true, user: user });
    instance.onCloseUserCard(user);
    expect(wrapper.state('userCard')).toEqual({ isOpen: false, user: {} });
  });
  it('should sort users in sortUsersByRecentDate()', () => {
    const adminDashboardData = {
      users: [
        { createdAt: '2019-04-26T08:29:11.707Z' },
        { createdAt: '2019-05-22T06:11:17.106Z' }
      ]
    }
    const wrapper = shallow(<AdminDashboard />);
    const instance = wrapper.instance();
    expect(instance.sortUsersByRecentDate(adminDashboardData.users)).toEqual([
      { createdAt: '2019-05-22T06:11:17.106Z' },
      { createdAt: '2019-04-26T08:29:11.707Z' } 
    ]);
  });
  it('should call onOpenUserCard() when Link clicked', () => {
    const adminDashboardData = {
      users: [
        { 
          username: 'user1',
          createdAt: '2019-04-26T08:29:11.707Z'
         }
      ]
    }
    const wrapper = shallow(<AdminDashboard adminDashboardData={adminDashboardData} />);
    const instance = wrapper.instance();
    instance.onOpenUserCard = jest.fn();
    wrapper.find('Link').at(0).simulate('click');
    expect(instance.onOpenUserCard).toHaveBeenCalledTimes(1);
  });
  it('should open UserCard when state updates to open', () => {
    const adminDashboardData = {
      users: [
        { 
          username: 'user1',
          createdAt: '2019-04-26T08:29:11.707Z'
         }
      ]
    }
    const wrapper = shallow(<AdminDashboard adminDashboardData={adminDashboardData} />);
    wrapper.setState({ userCard: { isOpen: true, user: adminDashboardData.users[0] } });
    expect(wrapper.exists('UserCard')).toBe(true);
  });
})