import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { reducers } from './reducers';

export const getName = async(dispatch, action) => {
  const data = await fetch(action.url);
  const parsedData = await data.json();

  dispatch({
    type: 'GET_DATA',
    payload: parsedData
  });
};

export const middleware = store => dispatch => action => {
  switch(action.type) {
    case 'ADD_DATA': dispatch({ ...action });
      break;
    case 'GET_DATA': getName(dispatch, action)
      break;
    default: return;
  }
};

export const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(middleware))
);
