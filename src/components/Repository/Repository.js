import React from 'react';
import classes from './Repository.module.css';
import { Link } from 'react-router-dom';

const repository = props => {
  return (
    <div className={classes.RepositoryItem}>
      <Link to={{ pathname: props.name }} className={classes.Link}>
        {props.name}
      </Link>
      <p className={classes.Small}>{props.description}</p>
      <p className={classes.XSmall}>{props.language}</p>
    </div>
  );
}

export default repository;