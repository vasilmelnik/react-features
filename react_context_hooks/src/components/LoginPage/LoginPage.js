import React, { useState, useContext } from 'react';
import { SimpleContext } from '../../UserContext';

export const LoginPage = () => {
  const { handleLogin } = useContext(SimpleContext);
  const [user, setUser] = useState({});

  const handleClick = () => handleLogin({ ...user });

  const handleChange = e => setUser({ firstName: e.target.value });

  return (
    <form>
      <label>name: <input onChange={handleChange}/></label>
      <br />
      <label>password: <input /></label>
      <br />
      <button onClick={handleClick}>Login</button>
    </form>
  )
};
