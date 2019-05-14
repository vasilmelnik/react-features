import React, { useState, useEffect } from 'react';

const Context = React.createContext();

const EmailProvider = ({ children }) => {
  const [emails, setEmails] = useState({
    emails: [],
    currentEmail: null,
    error: null,
    loading: false
  });

  useEffect(() => {
    const fetchData = async () => {
      await setEmails({ loading: true });
      await setTimeout(() => setEmails({ loading: false, emails: [1, 2, 3, 4, 5] }), 2000);
    };
    fetchData();
  }, []);

  const handleSelectEmail = email => setEmails(prev => ({ ...prev, currentEmail: email}));

  return (
    <Context.Provider value={{
      ...emails,
      onSelectEmail: handleSelectEmail
    }}>
      {children}
    </Context.Provider>
  );
};

export { EmailProvider, Context as EmailContext };