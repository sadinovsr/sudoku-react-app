import React from 'react'
import { shallow } from 'enzyme';
import ProtectedRoute from '../../components/ProtectedRoute/ProtectedRoute';

describe('<ProtectedRoute />', () => {
  it('Component renders', () => {
    shallow(<ProtectedRoute />);
  });
  it('Component renders when user is logged in', () => {
    Storage.prototype.getItem = jest.fn(() => 'token');
    shallow(<ProtectedRoute/>);
  });
})