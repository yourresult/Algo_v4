import React from 'react';
import { renderRoutes } from 'react-router-config';
import Header from './components/Header';
import PinnedInstruments from './components/cards/PinnedInstruments'
import MarketwatchSidebar from './components/cards/MarketwatchSidebar'
import { fetchCurrentUser } from './actions';

const data = {
  marketWatchInstruments: {
    symbol: ['SBIN', 'GAIL', 'PNB', 'INFY', 'TATASTEEL']
  }
}
const App = ({ route }) => {
  return (
    <div>
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
        <div className="col-md-3 shadow-2 pt-1 marketWatch d-none d-md-block">
          <MarketwatchSidebar data={data.marketWatchInstruments} />
        </div>
        <div className="col-md-9 px-2 p-5 ps-4">
          {renderRoutes(route.routes)}
        </div>
      </div>
    </div>
  );
};

export default {
  component: App,
  loadData: ({ dispatch }) => dispatch(fetchCurrentUser())
};
