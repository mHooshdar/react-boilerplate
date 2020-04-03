// node_modules
import React from 'react';
import { render } from '@testing-library/react';
// components
import App from '../App';

describe('a', () => {
  it('render', () => {
    expect.assertions(1);
    const wrapper = render(<App />);
    expect(wrapper.container).toBeDefined();
  });
});
