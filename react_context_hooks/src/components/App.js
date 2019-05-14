import React, { useState } from 'react';
import { UserContext, SimpleContext } from '../UserContext';
import { EmailProvider }from '../EmailContext';
import { MainPage } from './MainPage/MainPage';
import { LoginPage } from './LoginPage/LoginPage';

export const App = () => {
  const [currentUser, setCurrentUser] = useState({ firstName: 'Pit' });

  const handleLogin = user => setCurrentUser(prevState => ({...prevState, ...user}));

  const handleLogout = () => setCurrentUser(null);

  return (
    currentUser ? 
    <EmailProvider>
      <UserContext.Provider value={{ currentUser, handleLogout }}>
        <MainPage />
      </UserContext.Provider>
    </EmailProvider> : 
    <SimpleContext.Provider value={{ handleLogin }}>
      <LoginPage />
    </SimpleContext.Provider>
  );
};