import * as actionTypes from '../actions/actionTypes';

const initialState = {
  repositories: null,
  error: false
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.SET_REPOSITORIES:
      return {
        ...state,
        repositories: action.repositories,
        error: false
      };
    case actionTypes.FETCH_REPOSITORIES_FAILED:
      return {
        ...state,
        error: true
      };
    default:
      return state;
  }
};

export default reducer;