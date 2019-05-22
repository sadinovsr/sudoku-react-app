import React from 'react'
import { shallow } from 'enzyme';
import MainBody from '../../components/MainBody/MainBody';

describe('<MainBody />', () => {
  it('Component renders', () => {
    shallow(<MainBody />);
  })
})