import React from 'react'
import { shallow } from 'enzyme';
import DifficultyList from '../../components/DifficultyList/DifficultyList';

describe('<DifficultyList />', () => {
  it('Component renders', () => {
    shallow(<DifficultyList />);
  })
  it('should call onDifficultySelect() on all button clicks', () => {
    const onDifficultySelect = jest.fn();
    const wrapper = shallow(<DifficultyList onDifficultySelect={onDifficultySelect} />);
    wrapper.find('Button').at(0).simulate('click');
    wrapper.find('Button').at(1).simulate('click');
    wrapper.find('Button').at(2).simulate('click');
    wrapper.find('Button').at(3).simulate('click');
    expect(onDifficultySelect).toHaveBeenCalledTimes(4);
  });
})