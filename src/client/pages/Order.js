import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
// import { detailJobs } from '../actions';
import { matchRoutes } from 'react-router-config';
import Routes from '../../client/Routes';
import OrderList from '../components/cards/OrderList'
// const branch = matchRoutes(routes, location.pathname)

class Order extends Component {
  componentDidMount() {
    // this.props.detailJobs();
  }

  renderUsers() {
    // console.log(this.props.job);
    // console.log("lllllllllllllllllllllllllllll", this.props.match.params.slug);
  }

  head() {
    return (
      <Helmet>
        {/* <title>{`${this.props.job.length} Vivek Loaded`}</title> */}
        <title>Orders</title>
        <meta property="og:title" content="Users App" />
      </Helmet>
    );
  }

  render() {
    return (
      <div>
        {this.head()}
        <OrderList />
        {/* <ul>{this.renderUsers()}</ul> */}
      </div>
    );
  }
}

function mapStateToProps(state) {
//   return { job: state.detailJob };
}

function loadData(store) {
//   return store.dispatch(detailJobs());
}

// export default {
//   loadData,
//   component: connect(mapStateToProps, { detailJobs })(Order)
// };
export default {
  component: Order
};