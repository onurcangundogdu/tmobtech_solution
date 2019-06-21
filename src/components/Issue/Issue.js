import React from 'react';
import classes from './Issue.module.css';

const issue = props => {
  return (
    <div className={classes.IssueItem}>
      <p>{props.title} <span className={classes.State}>{props.state}</span></p>
    </div>
  );
}

export default issue;