import * as actionTypes from '../actions/actionTypes';

const initialState = {
  repository: null,
  error: false
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.SET_REPOSITORY:
      return {
        ...state,
        repository: action.repository,
        error: false
      };
    case actionTypes.FETCH_REPOSITORY_FAILED:
      return {
        ...state,
        error: true
      };
    default:
      return state;
  }
};

export default reducer;