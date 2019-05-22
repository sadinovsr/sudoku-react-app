import React from 'react'
import { shallow } from 'enzyme';
import Register from '../../components/Register/Register';

describe('<Register />', () => {
  it('Component renders', () => {
    shallow(<Register />);
  });
  it('should show errorMessage if provided', () => {
    const errorMessage = 'errorMessage';
    const wrapper = shallow(<Register  errorMessage={errorMessage}/>)
    expect(wrapper.find('Alert')).toHaveLength(1);
  });
  it('should not show errorMessage if not provided', () => {
    const errorMessage = null;
    const wrapper = shallow(<Register  errorMessage={errorMessage}/>)
    expect(wrapper.find('Alert')).toHaveLength(0);
  });
  it('should update state on input change', () => {
    const wrapper = shallow(<Register />);
    const instance = wrapper.instance();
    const element = {
      target: {
        name: 'username',
        value: 'x',
      }
    }
    expect(wrapper.state('username')).toBe('');
    instance.onInputChange(element);
    expect(wrapper.state('username')).toBe('x');
  });
  it('should call onRegister() on button click', () => {
    const onRegister = jest.fn();
    const wrapper = shallow(<Register onRegister={onRegister} />);
    wrapper.find('Button').at(0).simulate('click');
    expect(onRegister).toHaveBeenCalledTimes(1);
  });
  it('should call onRedirect() on div click', () => {
    const onRedirect = jest.fn();
    const wrapper = shallow(<Register onRedirect={onRedirect} />);
    wrapper.find('.div-link').at(0).simulate('click');
    expect(onRedirect).toHaveBeenCalledTimes(1);
  });
})