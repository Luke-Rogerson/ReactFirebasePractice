import React, { useState } from 'react';

import { withFirebase } from '../Firebase';

const INITIAL_STATE = {
  passwordOne: '',
  passwordTwo: '',
  error: null
};
const PasswordChangeForm = ({ firebase }) => {
  const [formState, setFormState] = useState({ ...INITIAL_STATE });
  const { passwordOne, passwordTwo, error } = formState;

  const onSubmit = e => {
    e.preventDefault();
    firebase
      .doPasswordUpdate(passwordOne)
      .then(() => {
        setFormState({ ...INITIAL_STATE });
      })
      .catch(error => setFormState({ error }));
  };

  const onChange = e => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const isInvalid = passwordOne !== passwordTwo || passwordOne === '';

  return (
    <form onSubmit={onSubmit}>
      <input
        name='passwordOne'
        value={formState.passwordOne}
        onChange={onChange}
        type='password'
        placeholder='New Password'
      />
      <input
        name='passwordTwo'
        value={formState.passwordTwo}
        onChange={onChange}
        type='password'
        placeholder='Confirm New Password'
      />
      <button disabled={isInvalid} type='submit'>
        Reset My Password
      </button>

      {error && <p>{error.message}</p>}
    </form>
  );
};

export default withFirebase(PasswordChangeForm);
