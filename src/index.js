import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import axios from 'axios';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import repositoriesReducer from './store/reducers/repositories';
import repositoryReducer from './store/reducers/repository';
import issuesReducer from './store/reducers/issues';
import pullRequestsReducer from './store/reducers/pullrequests';

axios.defaults.baseURL = 'https://api.github.com';
axios.defaults.headers.common['Accept'] = 'application/vnd.github.v3+json';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  repositories: repositoriesReducer,
  repository: repositoryReducer,
  issues: issuesReducer,
  pullRequests: pullRequestsReducer
});

const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(thunk)
));

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
