// node_modules
import React from 'react';
import { Redirect } from 'react-router-dom';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const RequiredAuth = (ComposedComponent: React.ComponentType<any>) => {
  const RequiredAuthWrapper = (props: object) => {
    // TODO: check for auth
    const hasAllow = true;

    return (
      <>
        {hasAllow ? (
          // eslint-disable-next-line react/jsx-props-no-spreading
          <ComposedComponent {...props} />
        ) : (
          <Redirect to="/login" />
        )}
      </>
    );
  };

  return RequiredAuthWrapper;
};

export default RequiredAuth;
