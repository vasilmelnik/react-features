import React from 'react';
import Link from 'next/link';
import Router from 'next/router';

const indexPage = () => {

  const handleClick = () => Router.push('/auth');
 
  return (
    <div>
      <h1>The main page</h1>
      <p>
        <Link href={{ pathname: "/auth" }}>Auth</Link>
        <button onClick={handleClick}>Click</button>
      </p>
    </div>
  )
};

export default indexPage;
