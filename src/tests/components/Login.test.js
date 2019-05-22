import React from 'react'
import { shallow } from 'enzyme';
import Login from '../../components/Login/Login';

describe('<Login />', () => {
  it('Component renders', () => {
    shallow(<Login />);
  })
})