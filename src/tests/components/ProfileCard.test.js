import React from 'react'
import { shallow } from 'enzyme';
import ProfileCard from '../../components/ProfileCard/ProfileCard';

describe('<ProfileCard />', () => {
  it('Component renders', () => {
    shallow(<ProfileCard />);
  });
  it('should update state when onEditOpen() and onEditClose() called', () => {
    const wrapper = shallow(<ProfileCard />);
    const instance = wrapper.instance();
    expect(wrapper.state('isEditOpen')).toBe(false);
    instance.onEditOpen();
    expect(wrapper.state('isEditOpen')).toBe(true);
    instance.onEditClose();
    expect(wrapper.state('isEditOpen')).toBe(false);
  });
  it('should update state and call onUpdate when updating user without redirect', () => {
    const onUpdate = jest.fn();
    const user = {
      username: 'username'
    }
    const newUserObject = {
      username: 'username',
      password: '',
    }
    const userId = 'userId';
    const wrapper = shallow(<ProfileCard onUpdate={onUpdate} user={user} />);
    const instance = wrapper.instance();
    wrapper.setState({ isEditOpen: true });
    instance.onUserUpdate(userId, newUserObject);
    expect(wrapper.state('isEditOpen')).toBe(false);
    expect(onUpdate).toHaveBeenCalledWith(userId, newUserObject, false)
    expect(onUpdate).toHaveBeenCalledTimes(1);
  });
  it('should update state and call onUpdate when updating user with redirect', () => {
    const onUpdate = jest.fn();
    const user = {
      username: 'username'
    }
    const newUserObject = {
      username: 'newUsername',
      password: ''
    }
    const userId = 'userId';
    const wrapper = shallow(<ProfileCard onUpdate={onUpdate} user={user} />);
    const instance = wrapper.instance();
    wrapper.setState({ isEditOpen: true });
    instance.onUserUpdate(userId, newUserObject);
    expect(wrapper.state('isEditOpen')).toBe(false);
    expect(onUpdate).toHaveBeenCalledWith(userId, newUserObject, true)
    expect(onUpdate).toHaveBeenCalledTimes(1);
  });
  it('should convert date to formatted string', () => {
    const wrapper = shallow(<ProfileCard />);
    const instance = wrapper.instance();
    const date = '2019-05-22T18:12:34.953Z';
    expect(instance.convertDate(date)).toBe('May 22 2019 ');
  });
  it('should call onEditOpen() on button click', () => {
    const user = {
      username: 'username',
      email: 'email',
      createdAt: 'time'
    }
    const statistics = {
      startedCount: 0,
      allSudokuCount: 0,
      doneCount: 0,
      usedSolveCount: 0,
    }
    const wrapper = shallow(<ProfileCard user={user} statistics={statistics} />);
    const instance = wrapper.instance();
    instance.onEditOpen = jest.fn();
    wrapper.find('Button').at(0).simulate('click');
    expect(instance.onEditOpen).toHaveBeenCalledTimes(1);
  });
  it('should call onEditOpen() on button click', () => {
    const user = {
      username: 'username',
      email: 'email',
      createdAt: 'time'
    }
    const statistics = {
      startedCount: 0,
      allSudokuCount: 0,
      doneCount: 0,
      usedSolveCount: 0,
    }
    const wrapper = shallow(<ProfileCard user={user} statistics={statistics} />);
    wrapper.setState({ isEditOpen: true });
    expect(wrapper.exists('UserEdit')).toBe(true);
  });
})