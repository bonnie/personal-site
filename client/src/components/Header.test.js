import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr } from '../../test/testUtils.js';
import Header from './Header';

test('renders without error', () => {
  const wrapper = shallow(<Header />);
  const component = findByTestAttr(wrapper, 'component-header');
  expect(component.length).toBe(1);
});