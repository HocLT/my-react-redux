import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

export default function Login() {
  const [username, setUsername] = useState('');
  const history = useHistory;

  function handleLogin() {
    history.push('/dashboard');
  }

  return (
    <>
      <h1>Login</h1>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(evt) => setUsername(evt.target.value)}
      />{' '}
      <button onClick={handleLogin}>Login</button>
    </>
  );
}
