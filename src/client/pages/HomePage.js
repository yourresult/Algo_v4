import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { fetchJobs } from '../actions';
import Header from '../components/Header'
import PinnedInstruments from '../components/cards/PinnedInstruments'
import MarketwatchSidebar from '../components/cards/MarketwatchSidebar'

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
        {this.head()}
        <div className="row navbar py-0">
          <div className="header-left col-md-3">
            <PinnedInstruments name="Nifty 50" />
            <PinnedInstruments name="sensex" />
          </div>
          <div className="header-right col-md-9 border-start">
            <Header />
          </div>
        </div>
        <div className="row py-0">
          <div className="col-md-3 shadow-2 pt-1 marketWatch">
            <MarketwatchSidebar data={data.marketWatchInstruments}/>
          </div>
          <div className="col-md-9 px-2">Right</div>
        </div>
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