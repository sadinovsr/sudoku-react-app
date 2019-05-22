import React from 'react'
import { shallow } from 'enzyme';
import SudokuAddApproval from '../../components/SudokuAddApproval/SudokuAddApproval';

describe('<SudokuAddApproval />', () => {
  it('Component renders', () => {
    shallow(<SudokuAddApproval />);
  })
  it('should call handleSave() on button click', () => {
    const handleSave = jest.fn();
    const wrapper = shallow(<SudokuAddApproval handleSave={handleSave}/>);
    wrapper.find('Button').at(1).simulate('click');
    expect(handleSave).toHaveBeenCalledTimes(1);
  });
})