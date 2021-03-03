import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
// import { detailJobs } from '../actions';
import { matchRoutes } from 'react-router-config';
import Routes from '../Routes';
// const branch = matchRoutes(routes, location.pathname)

const data = {
  users: {
    name: "Vivek"
  },
  margin: {
    equity: {
      enabled: true,
      marginUsed: 1968.99,
      marginUsed: 0,
      live_balance: 1968.99,
      openingBalance: 1968.99
    },
    commodity: {
      enabled: false,
      marginUsed: 0,
      marginUsed: 0,
      live_balance: 1968.99,
      openingBalance: 0
    }
  },
  holdings: {
    currentValue: 219.4,
    investment: 246.4
  }

}
class Order extends Component {
  componentDidMount() {
    // this.props.detailJobs();
  }

  nFormatter(num) {
    if (num >= 1000000000) {
      return (num / 1000000000).toFixed(2) + 'B';
    }
    if (num >= 1000000) {
      return (num / 1000000).toFixed(2) + 'M';
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(2) + 'k';
    }
    return num;
  }
  pnl() {
    var a = data.holdings;
    var b = a.currentValue - a.investment;
    var c = (b/a.investment)*100;
    return [b, c.toFixed(2)+"%"];
  }

  renderUsers() {
    // console.log(this.props.job);
    // console.log("lllllllllllllllllllllllllllll", this.props.match.params.slug);
  }

  head() {
    return (
      <Helmet>
        {/* <title>{`${this.props.job.length} Vivek Loaded`}</title> */}
        <title>Dashboard</title>
        <meta property="og:title" content="Users App" />
      </Helmet>
    );
  }

  render() {
    return (
      <section className="px-2 ps-lg-5 pe-lg-4">
        {this.head()}
        <h4 className="fw-normal">Hi, {data.users.name}</h4>
        <hr />
        <div className="row mt-4">
          <div className="col-sm-6">
            <div className="mt-5 mb-4"><i className="fas fa-chart-pie"></i> &nbsp;Equity</div>
            <div className="row">
              <div className="col border-end">
                <h3 style={{ fontSize: "2.4rem", fontWeight: "100" }}>{this.nFormatter(data.margin.equity.live_balance)}</h3>
                <span style={{ fontWeight: "lighter", fontSize: "small" }}>Margin available</span>
              </div>
              <div className="col col-7">
                <table className="table table-borderless w-auto my-auto">
                  <tbody>
                    <tr>
                      <td className="ps-1 pe-0 ps-md-4">Margin Used</td>
                      <th className="pe-0">0</th>
                    </tr>
                    <tr>
                      <td className="p-1 pe-0 ps-md-4 pt-0">Opening balance</td>
                      <th className="pt-0 pe-0">{this.nFormatter(data.margin.equity.openingBalance)}</th>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="mt-5 mb-4"><i className="fas fa-chart-pie"></i> &nbsp;Commodity</div>
            <div className="row">
              <div className="col border-end">
                <h3 style={{ fontSize: "2.4rem", fontWeight: "100" }}>0</h3>
                <span style={{ fontWeight: "lighter", fontSize: "small" }}>Margin available</span>
              </div>
              <div className="col col-7">
                <table className="table table-borderless w-auto my-auto">
                  <tbody>
                    <tr>
                      <td className="ps-1 pe-0 ps-md-4">Margin Used</td>
                      <th className="pe-0">{this.nFormatter(data.margin.commodity.openingBalance)}</th>
                    </tr>
                    <tr>
                      <td className="p-1 pe-0 ps-md-4 pt-0">Opening balance</td>
                      <th className="pt-0 pe-0">{this.nFormatter(data.margin.commodity.openingBalance)}</th>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <hr className="mt-5" />
        <div className="row">
          <div className="col-8">
            <div className="row">
              <div className="mt-5 mb-4"><i className="fas fa-suitcase"></i> &nbsp;Holdings (1)</div>
              <div className="col border-end">
                <h3 className="text-red" style={{ fontSize: "2.4rem", fontWeight: "100" }}>{this.pnl()[0]} <small className="text-small">{this.pnl()[1]}</small></h3>
                <small className="text-small">P&L</small>
              </div>
              <div className="col">
                <h4>
                  <table className="table table-borderless w-auto mx-auto">
                    <tbody>
                      <tr>
                        <td className="ps-1 pe-0 ps-md-4">Current Value</td>
                        <th className="pe-0">{this.nFormatter(data.holdings.currentValue)}</th>
                      </tr>
                      <tr>
                        <td className="p-1 pe-0 ps-md-4 pt-0">Opening balance</td>
                        <th className="pt-0 pe-0">{this.nFormatter(data.holdings.investment)}</th>
                      </tr>
                    </tbody>
                  </table>
                </h4>
              </div>
            </div>
          </div>
          <div style={{ borderStyle: "dotted" }} className="col border-primary d-flex align-items-center justify-content-center">
            Your ad here!
          </div>
        </div>
      </section>
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