import React, { useState } from 'react';

const Counter = props => {
  const [counter, incrementCounter] = useState(0);

  const getNewCounter = () => incrementCounter(counter + 1);

  return (
    <div onClick={getNewCounter} className='divide'>
      <h5>RenderCallback</h5>
      {
        props.children(counter)
      }
    </div>
  );
};

export default Counter;
