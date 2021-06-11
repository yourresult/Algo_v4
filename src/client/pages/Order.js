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
    console.log("check", this.props.orders);
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
        {this.props.subscribe}
        <OrderList data={this.props.orders}/>
        <ul>{this.renderUsers()}</ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
    console.log("state",state);
    return { orders: state.order, subscribe: state.subscribe };
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