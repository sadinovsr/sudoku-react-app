import React from 'react'
import { shallow } from 'enzyme';
import ProfileCard from '../../components/ProfileCard/ProfileCard';

describe('<ProfileCard />', () => {
  it('Component renders', () => {
    shallow(<ProfileCard />);
  })
})