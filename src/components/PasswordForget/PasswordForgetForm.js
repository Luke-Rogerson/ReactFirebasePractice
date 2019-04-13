import React, { useState } from 'react';
import { withFirebase } from '../Firebase';

const PasswordForgetFormBase = props => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState(null);

  const isInvalid = email === '';

  const onChange = e => {
    setEmail(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    props.firebase
      .doPasswordReset(email)
      .then(() => {
        setEmail('');
        setError(null);
      })
      .catch(error => {
        setError({ error });
      });
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        name='email'
        value={email}
        onChange={onChange}
        type='text'
        placeholder='Enter your email'
      />
      <button disabled={isInvalid} type='submit'>
        Reset My Password
      </button>
      {error && <p>{error.message}</p>}
    </form>
  );
};

const PasswordForgetForm = withFirebase(PasswordForgetFormBase);

export default PasswordForgetForm;
