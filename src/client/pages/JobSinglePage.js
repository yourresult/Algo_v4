import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { detailJobs } from '../actions';
import { matchRoutes } from 'react-router-config';
import Routes from '../../client/Routes';
// const branch = matchRoutes(routes, location.pathname)
class UsersList extends Component {
  componentDidMount() {
    this.props.detailJobs();
  }

  renderUsers() {
    console.log(this.props.job);
    console.log("lllllllllllllllllllllllllllll", this.props.match.params.slug);
  }

  head() {
    return (
      <Helmet>
        <title>{`${this.props.job.length} Vivek Loaded`}</title>
        <meta property="og:title" content="Users App" />
      </Helmet>
    );
  }

  render() {
    return (
      <div>
        {this.head()}
        Here's a big list of users:
        <ul>{this.renderUsers()}</ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { job: state.detailJob };
}

function loadData(store) {
  return store.dispatch(detailJobs());
}

export default {
  loadData,
  component: connect(mapStateToProps, { detailJobs })(UsersList)
};
