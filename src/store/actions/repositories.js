import * as actionTypes from './actionTypes';
import axios from 'axios';

export const setRepositories = repositories => {
  return {
    type: actionTypes.SET_REPOSITORIES,
    repositories
  };
};

export const fetchRepositoriesFailed = () => {
  return {
    type: actionTypes.FETCH_REPOSITORIES_FAILED
  };
};

export const fetchRepositories = () => {
  return dispatch => {
    axios.get('/users/reactjs/repos')
      .then(res => {
        const repositories = res.data.map(repo => {
          return {
            id: repo.id,
            name: repo.name,
            description: repo.description,
            language: repo.language,
            licenseId: repo.license ? repo.license.spdx_id : null,
            forksCount: repo.forks_count,
            starGazersCount: repo.stargazers_count,
            openIssuesCount: repo.open_issues_count,
            updatedAt: repo.updated_at
          };
        });

        dispatch(setRepositories(repositories));
      })
      .catch(error => {
        dispatch(fetchRepositoriesFailed());
      });
  };
};