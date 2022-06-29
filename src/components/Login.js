import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

export default function Login() {
  const [username, setUsername] = useState("");
  const history = useHistory();

  function handleLogin() {
    history.push('/dashboard');
  }

  return (
    
  );
}