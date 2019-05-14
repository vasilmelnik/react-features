let _state = (new Array(10)).fill((new Array(10)).fill('*'));
let _log = [];

export const state = {
  getState() {
    return _state.slice(0);
  },
  setState(newState) {
    Promise.resolve()
      .then(() => _state = newState)
      .then(() => _log.push(_state))
  },

  getLog() {
    return _log.slice(0);
  }
};