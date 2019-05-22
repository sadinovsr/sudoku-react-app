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
  })
  it('Component renders not completed history entry', () => {
    const historyEntry = {
      completed: false,
      difficulty: 'difficulty',
      time: 0,
    }
    shallow(<HistoryCard historyEntry={historyEntry} index={0}/>);
  })
})