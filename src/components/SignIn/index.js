import React from 'react';

import SignInForm from './SignInForm';
import SignUpLink from '../SignUp/SignUpLink';
import { PasswordResetLink } from '../PasswordForget';

const SignInPage = () => {
  return (
    <div>
      <h1>Sign In</h1>
      <SignInForm />
      <SignUpLink />
      <PasswordResetLink />
    </div>
  );
};

export default SignInPage;
