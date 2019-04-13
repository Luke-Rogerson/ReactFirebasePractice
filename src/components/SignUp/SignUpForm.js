import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';

import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';

const INITIAL_STATE = {
  username: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  error: null
};

const SignUpFormBase = props => {
  const [userDetails, setUserDetails] = useState({ ...INITIAL_STATE });

  const onSubmit = event => {
    const { email, passwordOne } = userDetails;

    props.firebase
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        setUserDetails({ ...INITIAL_STATE });
        props.history.push(ROUTES.HOME);
      })
      .catch(error => setUserDetails({ error }));
    event.preventDefault();
  };

  const onChange = event => {
    setUserDetails({ ...userDetails, [event.target.name]: event.target.value });
  };

  const { username, email, passwordOne, passwordTwo, error } = userDetails;

  const isInvalid =
    passwordOne !== passwordTwo ||
    passwordOne === '' ||
    email === '' ||
    username === '';

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          name='username'
          value={username}
          onChange={onChange}
          type='text'
          placeholder='Enter a username'
        />
        <input
          name='email'
          value={email}
          onChange={onChange}
          type='text'
          placeholder='Enter your email address'
        />
        <input
          name='passwordOne'
          value={passwordOne}
          onChange={onChange}
          type='password'
          placeholder='Choose a password'
        />
        <input
          name='passwordTwo'
          value={passwordTwo}
          onChange={onChange}
          type='password'
          placeholder='Confirm your password'
        />
        <button disabled={isInvalid} type='submit'>
          Sign Up
        </button>

        {error && <p>{error.message}</p>}
      </form>
    </div>
  );
};

const SignUpForm = compose(
  withRouter,
  withFirebase
)(SignUpFormBase);

export default SignUpForm;
