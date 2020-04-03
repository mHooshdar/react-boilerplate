// node_modules
import React from 'react';
import { render } from '@testing-library/react';
import { Context as ResponsiveContext } from 'react-responsive';
// Components
import MainLayout from '@layouts/MainLayout';
// utils
import widths from '@constants/widths';

describe('<MainLayout />', () => {
  it('1. renders the component', () => {
    expect.assertions(1);
    const wrapper = render(<MainLayout />);
    expect(wrapper.container).toBeDefined();
  });

  it('5. check some props (desktop) :', () => {
    expect.assertions(1);
    const wrapper = render(
      <ResponsiveContext.Provider
        value={{
          width: widths.WIDE_DESKTOP,
        }}
      >
        <MainLayout />
      </ResponsiveContext.Provider>,
    );
    expect(wrapper.container).toBeDefined();
  });
});
