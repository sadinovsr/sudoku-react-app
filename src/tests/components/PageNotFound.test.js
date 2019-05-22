import React from 'react'
import { shallow } from 'enzyme';
import PageNotFound from '../../components/PageNotFound/PageNotFound';

describe('<PageNotFound />', () => {
  it('Component renders', () => {
    shallow(<PageNotFound />);
  })
})