import React, { useContext } from 'react';
import { UserContext } from '../../UserContext';

export const MessageList = () => {
  const { currentUser } = useContext(UserContext);

  return (
    <header className="messageList">
      <div className="no-messages">
        Your mailbox is empty, {currentUser.firstName}
      </div>
    </header>
  )
};

// 1689