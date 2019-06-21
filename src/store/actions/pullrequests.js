import * as actionTypes from './actionTypes';
import axios from 'axios';

export const setPullRequests = pullRequests => {
  return {
    type: actionTypes.SET_PULLREQUESTS,
    pullRequests
  };
};

export const fetchPullRequestsFailed = () => {
  return {
    type: actionTypes.FETCH_PULLREQUESTS_FAILED
  };
};

export const fetchPullRequests = url => {
  return dispatch => {
    axios.get(`/repos/reactjs${url}`)
      .then(res => {

        const pullRequests = res.data.map(pullRequest => {
          return {
            id: pullRequest.id,
            state: pullRequest.state,
            title: pullRequest.title
          };
        });

        dispatch(setPullRequests(pullRequests));
      })
      .catch(error => {
        dispatch(fetchPullRequestsFailed());
      });
  };
};