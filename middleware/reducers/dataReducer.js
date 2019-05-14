export const dataReducer = (state = {}, action) => {
  switch(action.type) {
    case 'ADD_DATA': return {
      ...state,
      data: action.payload
    };
    case 'NEW_ADD_DATA': return {
      ...state,
      data: action.payload
    };
    case 'GET_DATA': return {
      ...state,
      name: action.payload
    };
    default: return state;
  }
}
