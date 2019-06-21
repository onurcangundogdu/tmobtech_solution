import React, {Component, Fragment} from 'react';
import axios from 'axios';
import Repository from '../../components/Repository/Repository';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import {connect} from 'react-redux';
import * as actions from '../../store/actions/index';
import classes from './Repositories.module.css';

class Repositories extends Component {

  componentDidMount() {
    this.props.onFetchRepositories();
  }

  render() {
    let repositories = null;
    if(this.props.repositories) {
      repositories = this.props.repositories.map(repository => {
        return (
          <Repository 
            key={repository.id} 
            name={repository.name} 
            description={repository.description}
            language={repository.language}/>);
      });
    } else {
      if(this.props.error) {
        repositories = <p>Repositories can not be fetched!</p>
      } else {
        repositories = <Spinner />;
      }
    }

    return (
      <Fragment>
        <div>Repositories</div>
        <div className={classes.Container}>{repositories}</div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    repositories: state.repositories.repositories,
    error: state.repositories.error
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onFetchRepositories: () => dispatch(actions.fetchRepositories())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Repositories, axios));