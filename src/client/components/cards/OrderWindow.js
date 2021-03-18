import React, { useState, useEffect } from 'react';
import Body from './OrderWindow.body'
const style = {

}
var component = {

}
function drag() {
    const title = document.querySelector('.card-header'),
        text = document.querySelector('.card-text'),
        card = document.querySelector('.card')

    let dragging = false, px, py, cpx, cpy
    card.style.top = '10px'
    card.style.left = '10px'

    title.addEventListener('pointerdown', (e) => {
        dragging = true
        px = e.clientX
        py = e.clientY
    })

    title.addEventListener('pointerup', () => {
        px = undefined
        py = undefined
        dragging = false
    })

    title.addEventListener('pointerout', () => {
        px = undefined
        py = undefined
        dragging = false
    })

    title.addEventListener('pointermove', (e) => {
        if (dragging) {
            const diff_x = Math.round(px - e.clientX)
            const diff_y = Math.round(py - e.clientY)
            card.style.left = card.offsetLeft - diff_x < 1 ? '1px' : card.offsetLeft - diff_x + 'px'
            card.style.top = card.offsetTop - diff_y < 1 ? '1px' : card.offsetTop - diff_y + 'px'
            px = e.clientX
            py = e.clientY
        }
    })
}
/**
 * ? Ow = Order Window
*/
const Ow = (props) => {
    const [orderWindowType, setOrderWindowType] = useState("buy");
    function tog() {
        var tol = document.getElementById("windType").checked;
        console.log(tol);
        var a = tol ? 'sell' : "buy";
        setOrderWindowType(a)
    }

    var windClass = orderWindowType == "buy" ?
        {
            transType: "buy",
            class: "bg-primary"
        }
        : {
            transType: "sell",
            class: "bg-danger"
        };
    useEffect(() => {
        drag();
        var x = document.getElementById("formElem").elements;
        var val = {
            exchange: x.exchange.value,
            product: x.product.value,
            orderType: x.orderType.value,
            variety: x.variety.value,
        }
        // console.log(newState)
        // for (var ra in ele) {
        //     ele[ra].onchange = function() {
        //         console.log('val');
        //     }
        // }
    })
    return (
        <div className={"card ordWindow " + windClass.transType} style={{ width: "610px", position: "absolute", zIndex: 1000 }}>
            <form id="formElem" method="post">
                <div className="card-header py-3 text-light" style={{ cursor: "move" }}>
                    <div className="row">
                        <div className="col-9">
                            <div className="instrument" style={{ fontSize: "smaller", fontWeight: "bolder", marginLeft: "2px" }}>
                                <span className="transaction-type text-capitalize">{windClass.transType}</span>
                                <span className="ms-1 tradingsymbol">SBIN</span>
                            &nbsp;x
                            <span className="ms-1 qty">122</span>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="form-check form-switch float-end">
                                <input className="form-check-input" onClick={() => tog()} type="checkbox" id="windType" style={{ backgroundColor: "#ffffff5c" }} />
                            </div>

                        </div>
                        <div className="col-12 fw-light" style={{ fontSize: " small" }}>
                            <div className="form-check d-inline-block">
                                <input className="form-check-input my-auto" defaultChecked type="radio" value="bse" name="exchange" id="bseRadio" />
                                <label className="form-check-label" htmlFor="bseRadio"> BSE: <span className="last-price">₹395.80</span> </label>
                            </div>
                            <div className="form-check d-inline-block ms-3">
                                <input className="form-check-input my-auto" type="radio" value="nse" name="exchange" id="nseRadio" />
                                <label className="form-check-label" htmlFor="nseRadio"> NSE: <span className="last-price">₹395.65</span> </label>
                            </div>

                        </div>
                    </div>
                </div>
                <Body data={windClass} />
                <div className="card-footer">

                </div>
            </form>
        </div>

    );

};
export default Ow;