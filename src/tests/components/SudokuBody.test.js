import React from 'react'
import { shallow } from 'enzyme';
import SudokuBody from '../../components/SudokuBody/SudokuBody';

describe('<SudokuBody />', () => {
  it('Component renders', () => {
    shallow(<SudokuBody />);
  })
})