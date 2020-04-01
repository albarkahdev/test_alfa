/**
 * @format
 */

import React from 'react';
import {expect} from 'chai';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {TouchableRipple} from 'react-native-paper';

import HeaderList from '../src/components/header_list/component_header_list';

Enzyme.configure({adapter: new Adapter()});

describe('<HeaderList />', () => {
  it('renders one <TouchableRipple /> components', () => {
    const wrapper = shallow(<HeaderList />);
    expect(wrapper.find(TouchableRipple)).to.have.lengthOf(1);
  });
});
