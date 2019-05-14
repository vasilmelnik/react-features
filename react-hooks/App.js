import React from 'react';
import { withStyles } from 'react-with-styles';
import { UseFetch } from './UseFetch/UseFetch';
import { RenderCallbackAndLazy } from './RenderCallbackAndLazy/RenderCallbackAndLazy';
import { style } from './style.css';
import { LiveSearch } from './LiveSearch/LiveSearch';

const App = () => (
  <React.Fragment>
    <RenderCallbackAndLazy />
    <UseFetch />
    <LiveSearch />
  </React.Fragment>
);

export default withStyles(style)(App);
