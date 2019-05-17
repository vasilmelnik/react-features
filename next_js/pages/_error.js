import React from 'react';
import Link from 'next/link';
import Router from 'next/router';

const errorPage = () => (
  <p>
    Oops, something went wrong
    <Link href={{pathname: '/'}}>
      =)
    </Link>
  </p>
);

export default errorPage;
