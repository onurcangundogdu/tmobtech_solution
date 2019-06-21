import * as actionTypes from '../actions/actionTypes';

const initialState = {
  pullRequests: null,
  error: false
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.SET_PULLREQUESTS:
      return {
        ...state,
        pullRequests: action.pullRequests,
        error: false
      };
    case actionTypes.FETCH_PULLREQUESTS_FAILED:
      return {
        ...state,
        error: true
      };
    default:
      return state;
  }
};

export default reducer;