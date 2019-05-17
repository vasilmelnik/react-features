import React from 'react';
import { Context } from './Context';
import { GrandParent } from './GrandParent';

export const App = () => (
  <Context.Provider value={{
    name: 'Pit',
    age: 19
  }}>
    <GrandParent />
  </Context.Provider>
);
