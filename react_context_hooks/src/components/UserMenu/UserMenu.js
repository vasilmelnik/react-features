import React, { useEffect, useContext, memo } from 'react';
import { UserContext } from '../../UserContext';
import { EmailContext }from '../../EmailContext';

export const UserMenu = memo(() => {

  const { handleLogout } = useContext(UserContext);
  const { loading, emails, currentEmail, onSelectEmail } = useContext(EmailContext);

  const hideMenu = e => console.log('hide');

  const handleClick = () => onSelectEmail('_________________');

  useEffect(() => {
    document.addEventListener('click', hideMenu);
    return () => document.removeEventListener('click', hideMenu);
  }, []);

  
  return (
    loading ? 
      'Loading...' : 
      <header className="userMenu" onClick={hideMenu}>
        <h2>UserMenu</h2>
        <ul>
          {emails.map((item, i) => <li key={i} onClick={handleClick}>{item}</li>)}
          <li onClick={handleClick}>{currentEmail}</li>
        </ul>
        <button onClick={handleLogout}>Log out</button>
      </header>
  );
}, (prev, next) => prev === next);
