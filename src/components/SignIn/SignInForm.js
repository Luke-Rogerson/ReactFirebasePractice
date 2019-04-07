import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';

import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null
};

const SignInFormBase = props => {
  const [userDetails, setUserDetails] = useState({ ...INITIAL_STATE });
  const { email, password, error } = userDetails;

  const onSubmit = event => {
    props.firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        setUserDetails({ ...INITIAL_STATE });
        props.history.push(ROUTES.HOME);
      })
      .catch(error => setUserDetails({ error }));
    event.preventDefault();
  };

  const onChange = event => {
    setUserDetails({ ...userDetails, [event.target.name]: event.target.value });
  };

  const isInvalid = password === '' || email === '';

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          name='email'
          value={email || ''}
          onChange={onChange}
          type='text'
          placeholder='Enter your email address'
        />
        <input
          name='password'
          value={password || ''}
          onChange={onChange}
          type='password'
          placeholder='Enter your password'
        />
        <button disabled={isInvalid} type='submit'>
          Sign In
        </button>

        {error && <p>{error.message}</p>}
      </form>
    </div>
  );
};

const SignInForm = compose(
  withRouter,
  withFirebase
)(SignInFormBase);

export default SignInForm;
