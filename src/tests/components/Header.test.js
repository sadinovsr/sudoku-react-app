import React from 'react'
import { shallow } from 'enzyme';
import Header from '../../components/Header/Header';

describe('<Header />', () => {
  it('Component renders', () => {
    shallow(<Header />);
  });
  it('Component renders when user is logged in', () => {
    Storage.prototype.getItem = jest.fn(() => 'token');
    shallow(<Header/>);
  });
})