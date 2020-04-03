// node_modules
import React from 'react';
// components
import TestApp from '@components/app/TestApp';

type AllProps = {};

const AppIndexPage: React.FC<AllProps> = () => {
  return (
    <div className="a">
      app
      <TestApp />
    </div>
  );
};

export default AppIndexPage;
