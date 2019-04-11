import React from 'react';
import { Link } from 'react-router-dom';

import PasswordForgetForm from './PasswordForgetForm';
import * as ROUTES from '../../constants/routes';

const PasswordForget = () => {
  return (
    <div>
      <h1>Reset your password</h1>
      <PasswordForgetForm />
    </div>
  );
};

const PasswordResetLink = () => (
  <p>
    <Link to={ROUTES.PASSWORD_FORGET}>Forgot password?</Link>
  </p>
);

export default PasswordForget;
export { PasswordResetLink };
