import React from 'react'
import { shallow } from 'enzyme';
import Login from '../../components/Login/Login';

describe('<Login />', () => {
  it('Component renders', () => {
    shallow(<Login />);
  })
  it('should show errorMessage if provided', () => {
    const errorMessage = 'errorMessage';
    const wrapper = shallow(<Login  errorMessage={errorMessage}/>)
    expect(wrapper.find('Alert')).toHaveLength(1);
  });
  it('should not show errorMessage if not provided', () => {
    const errorMessage = null;
    const wrapper = shallow(<Login  errorMessage={errorMessage}/>)
    expect(wrapper.find('Alert')).toHaveLength(0);
  });
  it('should update state on input change', () => {
    const wrapper = shallow(<Login />);
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
  it('should call onLogin() on button click', () => {
    const onLogin = jest.fn();
    const wrapper = shallow(<Login onLogin={onLogin} />);
    wrapper.find('Button').at(0).simulate('click');
    expect(onLogin).toHaveBeenCalledTimes(1);
  });
  it('should call onRedirect() on div click', () => {
    const onRedirect = jest.fn();
    const wrapper = shallow(<Login onRedirect={onRedirect} />);
    wrapper.find('.div-link').at(0).simulate('click');
    expect(onRedirect).toHaveBeenCalledTimes(1);
  });
})