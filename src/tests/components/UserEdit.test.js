import React from 'react'
import { shallow } from 'enzyme';
import UserEdit from '../../components/UserEdit/UserEdit';

describe('<UserEdit />', () => {
  it('Component renders', () => {
    const user = {
      username: 'username',
      email: 'email',
    }
    shallow(<UserEdit user={user}/>);
  })
})