import React from 'react'
import { shallow } from 'enzyme';
import AdminDashboard from '../../components/AdminDashboard/AdminDashboard';

describe('<AdminDashboard />', () => {
  it('Component renders', () => {
    shallow(<AdminDashboard />);
  })
})