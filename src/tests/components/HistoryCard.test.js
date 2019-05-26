import React from 'react'
import { shallow } from 'enzyme';
import HistoryCard from '../../components/HistoryCard/HistoryCard';

describe('<HistoryCard />', () => {
  it('Component renders completed history entry', () => {
    const historyEntry = {
      completed: true,
      difficulty: 'difficulty',
      time: 0,
    }
    shallow(<HistoryCard historyEntry={historyEntry} index={0}/>);
  });
  it('Component renders not completed history entry', () => {
    const historyEntry = {
      completed: false,
      difficulty: 'difficulty',
      time: 0,
    }
    shallow(<HistoryCard historyEntry={historyEntry} index={0}/>);
  });
  it('should call onContinue() on button click', () => {
    const historyEntry = {
      completed: false,
      difficulty: 'difficulty',
      time: 0,
    }
    const onContinue = jest.fn();
    const wrapper = shallow(<HistoryCard historyEntry={historyEntry} onContinue={onContinue} />);
    wrapper.find('Button').at(0).simulate('click');
    expect(onContinue).toHaveBeenCalledTimes(1);
  });
  it('should show with solve if usedSolve is true', () => {
    const historyEntry = {
      completed: true,
      usedSolve: true,
      difficulty: 'difficulty',
      time: 0,
    };
    const wrapper = shallow(<HistoryCard historyEntry={historyEntry} />);
    expect(wrapper.find('span').text()).toBe('with solve');
  });
  it('should show without solve if usedSolve is false', () => {
    const historyEntry = {
      completed: true,
      usedSolve: false,
      difficulty: 'difficulty',
      time: 0,
    };
    const wrapper = shallow(<HistoryCard historyEntry={historyEntry} />);
    expect(wrapper.find('span').text()).toBe('without solve');
  });
})