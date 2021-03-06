import React, { useState, useEffect } from 'react';

import { withFirebase } from '../Firebase';
import { AuthUserContext } from '../Session';

const withAuthentication = Component => {
  const WithAuthentication = props => {
    const [authUser, setAuthUser] = useState(null);

    useEffect(() => {
      const unsubscribe = props.firebase.auth.onAuthStateChanged(authUser => {
        authUser ? setAuthUser(authUser) : setAuthUser(null);
      });
      return () => {
        unsubscribe();
      };
    });
    return (
      <AuthUserContext.Provider value={authUser}>
        <Component {...props} />
      </AuthUserContext.Provider>
    );
  };

  return withFirebase(WithAuthentication);
};

export default withAuthentication;
