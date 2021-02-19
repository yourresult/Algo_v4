import React from 'react';
const Home = (props) => {
    return (
        <span>
            <nav className="pinned-instruments navbar-expand-lg bg-white border-start px-3 d-inline-block">
                <div className="instrument-widget">
                    <span className="symbol text-uppercase">{props.name}</span>
                    <span className="last-price ps-2 text-uppercase">15109.50</span>
                </div>
                <div className="instrument-widget"></div>
            </nav>
        </span>
    );

};
export default Home;