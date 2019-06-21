import * as actionTypes from './actionTypes';
import axios from 'axios';

export const setRepository = repository => {
  return {
    type: actionTypes.SET_REPOSITORY,
    repository
  };
};

export const fetchRepositoryFailed = () => {
  return {
    type: actionTypes.FETCH_REPOSITORY_FAILED
  };
};

export const fetchRepository = name => {
  return dispatch => {

    axios.get(`/repos/reactjs/${name}`)
    .then(res => {

      const repository = {
        subscribersCount: res.data.subscribers_count,
        stargazersCount: res.data.stargazers_count,
        sshUrl: res.data.ssh_url
      };

      dispatch(setRepository(repository));

    })
    .catch(error => {
      dispatch(fetchRepositoryFailed());
    });

  };
};