import React, {Component, Fragment} from 'react';
import axios from 'axios';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import Spinner from '../../components/UI/Spinner/Spinner';
import {connect} from 'react-redux';
import * as actions from '../../store/actions/index';
import Issue from '../../components/Issue/Issue';

class Issues extends Component {

  componentDidMount() {
    if(this.props.match.url) {
      this.props.onFetchIssues(this.props.match.url);
    }
  }

  render() {
    let issues = null;
    if(this.props.issues) {
      issues = this.props.issues.map(issue => <Issue key={issue.id} state={issue.state} title={issue.title} />);
    } else {
      if(this.props.error) {
        issues = <p>Issues can not be fetched!</p>;
      } else {
        issues = <Spinner />;
      }
    }

    return (
      <Fragment>
        {issues}
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    issues: state.issues.issues,
    error: state.issues.error
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onFetchIssues: url => dispatch(actions.fetchIssues(url))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Issues, axios));