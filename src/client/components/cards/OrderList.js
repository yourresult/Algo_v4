import React, { useState } from 'react';
import Buy from '../cards/OrderTypeComponent';
const orderDemoData = [
  {
    t: "06:32:06", // Time
    ty: "BUY", // Type
    inst: "SBIN", // Instrument
    pt: "MIS", // Product Type
    qty: "100", // Qutenty
    ltp: "407.25", // LTP
    pri: "407.25", // Price
    st: "AMO REQ RECIVED" // Aftermarket Order Recived
  },
  {
    t: "06:32:06", // Time
    ty: "BUY", // Type
    inst: "RELIANCE", // Instrument
    pt: "MIS", // Product Type
    qty: "100", // Qutenty
    ltp: "407.25",
    pri: "407.25", // Price
    st: "AMO REQ RECIVED" // Aftermarket Order Recived
  },
  {
    t: "06:32:06", // Time
    ty: "BUY", // Type
    inst: "GAIL", // Instrument
    pt: "MIS", // Product Type
    qty: "100", // Qutenty
    ltp: "407.25",
    pri: "407.25", // Price
    st: "AMO REQ RECIVED" // Aftermarket Order Recived
  }
]
const MarketWatch = (props) => {
  const ltp = props.ltp;
  if(props.data)  
  if(ltp)
  var orderList = props.data.data.map((d, i) => {
    var da = new Date(d.date);
    var time = da.getHours() + ":" + da.getMinutes() + ":" + da.getSeconds();
    return (
      <tr key={i}>
        <td>{time}</td>
        <td><Buy massage={d.transaction_type} class={"blue"}/></td>
        <td>{d.tradingsymbol}</td>
        <td>{d.product}</td>
        <td>{d.quantity}</td>
        <td>{ltp[d.tradingsymbol]}</td>
        <td>{d.price}</td>
        <td><Buy massage={d.status} class={"order-status"}/></td>
      </tr>
    )
  })

  return (
    <div className="complite-order px-4 pt-4">
      <div className="tableHeader">
        <h5 className="d-inline">Executed orders</h5>
        <span className="float-end" style={{ fontSize: "x-small" }}>
          <input type="text" className="search ps-4"></input>
          <a href="#" className="ps-4">@ View reports</a>
          <a href="#" className="ps-4">Download</a>
        </span>
      </div>
      <table className="table table-hover mt-4">
        <thead>
          <tr>
            <th scope="col">Time</th>
            <th scope="col">Type</th>
            <th scope="col">Instrument</th>
            <th scope="col">Product</th>
            <th scope="col">Qty</th>
            <th scope="col">LTP</th>
            <th scope="col">Price</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          {orderList}
        </tbody>
      </table>
    </div>
  );

};
export default MarketWatch;