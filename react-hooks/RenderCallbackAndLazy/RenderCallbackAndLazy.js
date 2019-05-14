import React, { lazy, Suspense } from 'react';

const Counter = lazy(() => import ('./Counter'));
/**
 * ONLY DEFAULT EXPORT FOR SUSPENSE
 */

export const RenderCallbackAndLazy = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Counter>
      {
        state => <div>{state}</div>
      }
    </Counter>
  </Suspense>
);

