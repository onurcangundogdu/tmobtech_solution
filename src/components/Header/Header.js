import React from 'react';
import classes from './Header.module.css';

const header = () => {
  return (
    <header className={classes.Header}>
      <h1 className={classes.Heading}>React Community</h1>
      <p><small>Quality code from the React community</small></p>
    </header>
  );
}

export default header;