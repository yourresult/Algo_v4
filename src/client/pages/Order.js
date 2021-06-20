import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { getOrders } from '../actions';
import { matchRoutes } from 'react-router-config';
import Routes from '../../client/Routes';
import OrderList from '../components/cards/OrderList'
// const branch = matchRoutes(routes, location.pathname)

class Order extends Component {
  componentDidMount() {
    this.props.getOrders();
  }

  renderUsers() {
    // console.log("check", this.props.ltp);
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
        {this.props.ltp['SBIN']}
        <OrderList data={this.props.orders} ltp={this.props.ltp.data}/>
        <ul>{this.renderUsers()}</ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
    return { orders: state.order, subscribe: state.subscribe, ltp: state.ltp };
}

function loadData(store) {
  return store.dispatch(getOrders());
}

export default {
  loadData,
  component: connect(mapStateToProps, { getOrders })(Order)
};
// export default {
//   component: Order
// };