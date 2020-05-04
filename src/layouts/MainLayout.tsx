// node_modules
import React from 'react';

type AllProps = {};

const MainLayout: React.FC<AllProps> = ({ children }) => (
  <>
    Main layout
    {children}
  </>
);

export default MainLayout;
