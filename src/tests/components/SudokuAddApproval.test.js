import React from 'react'
import { shallow } from 'enzyme';
import SudokuAddApproval from '../../components/SudokuAddApproval/SudokuAddApproval';

describe('<SudokuAddApproval />', () => {
  it('Component renders', () => {
    shallow(<SudokuAddApproval />);
  })
})