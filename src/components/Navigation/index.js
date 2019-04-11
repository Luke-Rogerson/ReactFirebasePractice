import React from 'react';
import { Link } from 'react-router-dom';

import SignOutButton from '../SignOut';
import * as ROUTES from '../../constants/routes';
import { AuthUserContext } from '../Session';

const Navigation = () => {
  return (
    <div>
      <AuthUserContext.Consumer>
        {authUser => (authUser ? <NavigationAuth /> : <NavigationNonAuth />)}
      </AuthUserContext.Consumer>
    </div>
  );
};

const NavigationAuth = () => (
  <>
    <h1>Yes</h1>
    <ul>
      <li>
        <Link to={ROUTES.HOME}>Home</Link>
      </li>
      <li>
        <Link to={ROUTES.ACCOUNT}>My Account</Link>
      </li>
      <li>
        <SignOutButton />
      </li>
    </ul>
  </>
);

const NavigationNonAuth = () => (
  <>
    <h1>Nope</h1>
    <nav>
      <ul>
        <li>
          <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
        </li>
        <li>
          <Link to={ROUTES.SIGN_IN}>Sign In</Link>
        </li>
      </ul>
    </nav>
  </>
);

export default Navigation;
