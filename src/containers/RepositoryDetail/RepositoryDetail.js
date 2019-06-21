import React, {Component, Fragment} from 'react';
import {NavLink, Route, Switch} from 'react-router-dom';
import axios from 'axios';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import {connect} from 'react-redux';
import Issues from '../Issues/Issues';
import PullRequests from '../PullRequests/PullRequests';
import classes from './RepositoryDetail.module.css';
import * as actions from '../../store/actions/index';

class RepositoryDetail extends Component {

  componentDidMount() {
    if(this.props.match.params.name){
      this.props.onFetchRepository(this.props.match.params.name);
    }
  }

  render() {
    let repositoryDetail = null;
    if(this.props.repository) {
      repositoryDetail = (
        <Fragment>
          <div>Repository Detail</div>
          <div className={classes.Container}>
            <p className={classes.Small}>SSH Url: {this.props.repository ? this.props.repository.sshUrl : null}</p>
            <p className={classes.Small}>Subscribers: {this.props.repository ? this.props.repository.subscribersCount : null}</p>
            <p className={classes.Small}>Stragazers: {this.props.repository ? this.props.repository.stargazersCount : null}</p>
          </div>
        </Fragment>
      );
    } else {
      if(this.props.error) {
        repositoryDetail = <p>Repository can not be fetched!</p>;
      } else {
        repositoryDetail = <Spinner />;
      }
    }

    return (
      <Fragment>
        {repositoryDetail}
        <nav className={classes.Nav}>
          <ul>
            <li>
              <NavLink to={this.props.match.url + '/issues'} exact activeStyle={{textDecoration: 'underline'}}>
                Issues
              </NavLink>
            </li>
            <li>
              <NavLink to={this.props.match.url + '/pulls'} exact activeStyle={{textDecoration: 'underline'}}>
                Pull Request
              </NavLink>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path={this.props.match.url + '/issues'} component={Issues} />
          <Route path={this.props.match.url + '/pulls'} component={PullRequests} />
        </Switch>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    repository: state.repository.repository,
    error: state.repository.error
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onFetchRepository: name => dispatch(actions.fetchRepository(name))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(RepositoryDetail, axios));