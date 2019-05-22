import React from 'react'
import { shallow } from 'enzyme';
import SudokuAdd from '../../components/SudokuAdd/SudokuAdd';

describe('<SudokuAdd />', () => {
  it('Component renders', () => {
    shallow(<SudokuAdd />);
  })
})