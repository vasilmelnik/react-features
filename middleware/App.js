import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { onInput, getDataRemote } from './actions';


const App = ({ data, name, onInput, getData }) => {
  const handleInput = e => onInput('ADD_DATA', e.target.value);

  useEffect(() => {
    getData('https://api.myjson.com/bins/1bwkgw')
  }, []);

  return (
    <div className="App">
      <input type="text" onChange={handleInput} />
      <div>{name && name.name}</div>
      <div>{data}</div>
    </div>
  );
}

export const mapStateToProps = state => ({
  ...state.dataReducer
});

export const mapDispatchToProps = dispatch => ({
  onInput: onInput(dispatch),
  getData: getDataRemote(dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
