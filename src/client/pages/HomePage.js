import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { fetchJobs } from '../actions';
import Header from '../components/Header'
import PinnedInstruments from '../components/cards/PinnedInstruments'
import MarketwatchSidebar from '../components/cards/MarketwatchSidebar'
import Orders from '../components/cards/OrderList'

const data = {
  marketWatchInstruments: {
    symbol: ['SBIN', 'GAIL', 'PNB', 'INFY', 'TATASTEEL']
  }
}

class JobsList extends Component {
  componentDidMount() {
    this.props.fetchJobs();
  }

  renderUsers() {
    // console.log("ttttttttttttttt", this.props.jobs);
  }

  head() {
    return (
      <Helmet>
        <title>Dashboard</title>
        <meta property="og:title" content="Users App" />
      </Helmet>
    );
  }

  render() {
    return (
      <div>
        
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { jobs: state.jobsNotification };
}

function loadData(store) {
  return store.dispatch(fetchJobs());
}

export default {
  loadData,
  component: connect(mapStateToProps, { fetchJobs })(JobsList)
};