import React from 'react'
import { shallow } from 'enzyme';
import HistoryList from '../../components/HistoryList/HistoryList';

describe('<HistoryList />', () => {
  it('Component renders', () => {
    const dividedHistory = {
      completedHistory: [
        {}
      ],
      notCompletedHistory: [
        {}
      ]
    }
    shallow(<HistoryList dividedHistory={dividedHistory} />);
  })
})