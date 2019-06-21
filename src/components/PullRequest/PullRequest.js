import React from 'react';
import classes from './PullRequest.module.css';

const pullRequest = props => {
  return (
    <div className={classes.PullRequestItem}>
      <p>{props.title} <span className={classes.State}>{props.state}</span></p>
    </div>
  );
}

export default pullRequest;