import React from 'react';
import { useFetch } from '../hooks';

export const UseFetch = () => {
  const [data, loading] = useFetch(
    'https://api.myjson.com/bins/ywkbk'
  );

  return (
    <div className='divide'>
      <h5>UseFetch</h5>
      {loading || data.hits[0].created_at}
    </div>
  );
}
