import React, {Component, Fragment} from 'react';
import axios from 'axios';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import Spinner from '../../components/UI/Spinner/Spinner';
import {connect} from 'react-redux';
import * as actions from '../../store/actions/index';
import PullRequest from '../../components/PullRequest/PullRequest';

class PullRequests extends Component {

  componentDidMount() {
    if(this.props.match.url) {
      this.props.onFetchPullRequests(this.props.match.url);
    }
  }

  render() {
    let pullRequests = null;
    if(this.props.pullRequests) {
      pullRequests = this.props.pullRequests.map(issue => <PullRequest key={issue.id} state={issue.state} title={issue.title} />);
    } else {
      if(this.props.error) {
        pullRequests = <p>Pull Requests can not be fetched!</p>;
      } else {
        pullRequests = pullRequests = <Spinner />;
      }
    }

    return (
      <Fragment>
        {pullRequests}
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    pullRequests: state.pullRequests.pullRequests,
    error: state.pullRequests.error
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onFetchPullRequests: url => dispatch(actions.fetchPullRequests(url))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(PullRequests, axios));