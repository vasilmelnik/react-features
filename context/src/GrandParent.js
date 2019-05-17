import React from 'react'
import { Parent } from './Parent';

export const GrandParent = () => (
  <Parent>
    {
      data => (
        <>
          <h1>Hello</h1>
          <>
            {
              data
            }
          </>
        </>
      )
    }
  </Parent>
);
