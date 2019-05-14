export const getDataRemote = dispatch => url => dispatch({ type: "GET_DATA", url });
export const onInput = dispatch => (type, value) => dispatch({ type, payload: value });
