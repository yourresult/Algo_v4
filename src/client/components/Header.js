import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Header = ({ auth }) => {
  const authButton = auth ? (
    <a className="nav-link px-3" href="/api/logout">Logout</a>
  ) : (
      <a className="nav-link px-3" href="/api/auth/google">Login</a>
    );

  return (
    <nav className="navbar navbar-expand-lg bg-white shadow-0">
  <div className="container-fluid">
    <button
      className="navbar-toggler"
      type="button"
      data-mdb-toggle="collapse"
      data-mdb-target="#navbarTogglerDemo03"
      aria-controls="navbarTogglerDemo03"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i className="fas fa-bars"></i>
    </button>
    <Link to="/" className="navbar-brand brand-logo mx-5" aria-current="page" href="#">
    <img
        src="/images/kite-logo.svg"
        height="20"
        alt=""
        loading="lazy"
      />
                </Link>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
              <Link className="nav-link px-3" to="/dashboard">Dashboard</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link px-3" to="/orders">Orders</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link px-3" to="/holdings">Holdings</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link px-3" to="/positions">Positions</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link px-3" to="/funds">Funds</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link px-3" to="/users">Apps</Link>
            </li>
          {/* </ul>
          <ul className="navbar-nav me-auto mb-Ordersg-0"> */}
            <li className="nav-item">
              {authButton}
            </li>
      </ul>
    </div>
  </div>
</nav>
  );
};

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
