import React from 'react';

import { PasswordResetLink } from '../PasswordForget';
import PasswordChangeForm from '../PasswordChange';

const Account = () => (
  <div>
    <h1>Account Page</h1>
    <PasswordResetLink />
    <PasswordChangeForm />
  </div>
);

export default Account;
