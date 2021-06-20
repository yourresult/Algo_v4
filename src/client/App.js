import React, { useEffect } from 'react';
import { renderRoutes } from 'react-router-config';
import { useDispatch } from 'react-redux'
import Header from './components/Header';
import Ow from './components/cards/OrderWindow';
import PinnedInstruments from './components/cards/PinnedInstruments'
import MarketwatchSidebar from './components/cards/MarketwatchSidebar'
import { fetchCurrentUser, getSubscribe, getLTP } from './actions';
import { getRealData, setRealData } from './GlobalFunction';

// Kite websocket api integration



// Kite websocket api integration

const data = {
  marketWatchInstruments: {
    symbol: ['SBIN', 'GAIL', 'PNB', 'INFY', 'TATASTEEL']
  }
}
const App = (dat) => {
  // var database = firebase.database().ref().child('stock/name');
  const dispatch = useDispatch();

  useEffect(() => {
    getRealData('stock/name').once('value', snap => {
      var sName = snap.val();
      var c = {};
      getRealData('stock/price').on('value', pSnap => {
        var pA = pSnap.val(); // Price array
        pA.map((v,i) => {
          var a,b;
          a = sName[i];
          b = v;
          c[a] = b;
        })
        dispatch(getLTP(c));
      })
    })
  });
  return (
    <div>
      <div className="row navbar py-0">
        <div className="header-left col-md-3">
          <PinnedInstruments name="Nifty 50" />
          <PinnedInstruments name="Sensex" />
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
          {renderRoutes(dat.route.routes)}
          <Ow />
        </div>
      </div>
    </div>
  );
};
function relTest() {
  setInterval(function () {
    alert("Hello");
  },
    3000
  );
}
function loadData(store) {
  store.dispatch(getSubscribe(Math.random()));
  return store.dispatch(fetchCurrentUser());
}
export default {
  component: App,
  loadData
};
