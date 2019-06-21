import * as actionTypes from './actionTypes';
import axios from 'axios';

export const setIssues = issues => {
  return {
    type: actionTypes.SET_ISSUES,
    issues
  };
};

export const fetchIssuesFailed = () => {
  return {
    type: actionTypes.FETCH_ISSUES_FAILED
  };
};

export const fetchIssues = url => {
  return dispatch => {
    axios.get(`/repos*-0*-965-7/reactjs${url}`)
      .then(res => {

        const issues = res.data.map(issue => {
          return {
            id: issue.id,
            state: issue.state,
            title: issue.title
          };
        });

        dispatch(setIssues(issues));
      })
      .catch(error => {
        dispatch(fetchIssuesFailed());
      });
  };
};