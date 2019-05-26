import React from 'react'
import { shallow } from 'enzyme';
import { SudokuAddContainer } from '../../containers/SudokuAddContainer';

describe('<SudokuAddContainer />', () => {
  it('should render', () => {
    shallow(<SudokuAddContainer />);
  });
  it('should call getUserSelf() on render and redirect to home', () => {
    Storage.prototype.getItem = jest.fn(() => 'token');
    const getUserSelf = jest.fn();
    const push = jest.fn();
    const user = {
      level: 'user'
    }
    shallow(<SudokuAddContainer user={user} history={{push}} getUserSelf={getUserSelf} />);
    expect(getUserSelf).toHaveBeenCalledTimes(1);
    expect(push).toHaveBeenCalledTimes(1);
  });
  it('should call getUserSelf() on render and return SudokuAdd component', () => {
    Storage.prototype.getItem = jest.fn(() => 'token');
    const getUserSelf = jest.fn();
    const user = {
      level: 'admin'
    }
    const wrapper = shallow(<SudokuAddContainer user={user} getUserSelf={getUserSelf} />);
    expect(getUserSelf).toHaveBeenCalledTimes(1);
    expect(wrapper.exists('SudokuAdd')).toBe(true);
  });
  it('should call addSudoku() on onSave()', () => {
    Storage.prototype.getItem = jest.fn(() => null);
    const addSudoku = jest.fn();
    const wrapper = shallow(<SudokuAddContainer addSudoku={addSudoku} />);
    const instance = wrapper.instance();
    instance.onSave('sudokuObject');
    expect(addSudoku).toHaveBeenCalledTimes(1);
    expect(addSudoku).toHaveBeenCalledWith('sudokuObject');
  });
})