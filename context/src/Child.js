import React, { useContext } from 'react'
import { Context } from './Context';

export const Child = () => {
  
  const { name, age } = useContext(Context);
      
  return (
    <>
      <h1>{name}</h1>
      <h2>{age}</h2>
    </>
  );
};
