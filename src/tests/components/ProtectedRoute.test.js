import React from 'react'
import { shallow } from 'enzyme';
import ProtectedRoute from '../../components/ProtectedRoute/ProtectedRoute';

describe('<ProtectedRoute />', () => {
  it('Component renders', () => {
    shallow(<ProtectedRoute />);
  })
})