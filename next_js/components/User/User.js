import React from 'react'
import Style from './style';

const User = ({ name, age }) => (
  <div className="user">
    <h1>{name}</h1>
    <p>{age}</p>
    <Style jsx />
  </div>
);

export default User;
