import React, { useReducer } from 'react';
import { UserMenu } from '../UserMenu/UserMenu';
import { useBattery } from '../../hooks/useBattery';

export const Header = () => {
  const battery = useBattery();
  console.log(battery);

  const [data = {}, dispatch] = useReducer((state = {}, action) => {
    switch(action.type) {
      case 'ADD_DATA': 
        return { 
          ...state, 
          data: action.payload 
        };
      default: return { ...state }
    }
  });

  const handleClick = () => dispatch({ type: 'ADD_DATA', payload: 'Some new header' });

  console.log(data.data);
  return (
    <header className="header">
      <h2>My mail (Header)</h2>
      {data.data || <button onClick={handleClick}>Click</button>}
      <UserMenu />
    </header>
  )
};
