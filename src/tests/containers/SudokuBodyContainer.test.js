import React from 'react'
import { shallow } from 'enzyme';
import { SudokuBodyContainer } from '../../containers/SudokuBodyContainer';

describe('<SudokuBodycontainer />', () => {
  it('should render and call history.push()', () => {
    const push = jest.fn();
    const location = 'location';
    shallow(<SudokuBodyContainer location={location} history={{push}} />);
    expect(push).toHaveBeenCalledTimes(1);
  });
  it('should render SudokuBody component from history', () => {
    const location = {
      state: {
        sudoku: 'sudoku',
        historyEntry: 'historyEntry'
      }
    }
    const wrapper = shallow(<SudokuBodyContainer location={location} />);
    expect(wrapper.exists('SudokuBody')).toBe(true);
  });
  it('should not render SudokuBody component from history', () => {
    const location = {
      state: {
        historyEntry: 'historyEntry'
      }
    }
    const wrapper = shallow(<SudokuBodyContainer location={location} />);
    expect(wrapper.exists('Spinner')).toBe(true);
  });
  it('should render SudokuBody component not from history', () => {
    const location = {
      state: {
        sudoku: 'sudoku'
      }
    }
    const wrapper = shallow(<SudokuBodyContainer location={location} />);
    expect(wrapper.exists('SudokuBody')).toBe(true);
  });
  it('should render errorMessage not from history', () => {
    const location = {
      state: {
        errorMessage: 'errorMessage'
      }
    }
    const wrapper = shallow(<SudokuBodyContainer location={location} />);
    expect(wrapper.find('.SudokuError__message').text()).toBe('errorMessage');
  });
})