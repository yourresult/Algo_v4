import React, { useState, useEffect } from 'react';
const style = {

}
var component = {

}
function getCookie(cname, isArray = false) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            if (isArray == true) {
                var ar = c.substring(name.length, c.length);
                var newAr = ar.split(',');
                return newAr;
            }
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

/**
 * ? Ow = Order Window
*/
const Ow = (props) => {
    const [a, b] = useState(0);
    const [r1, r2] = useState();
    const handleWindowInput = (d) => {
        /**
         * iP = Input Action
         * @param  {} id
         * @param  {} action
         */
        var defaultCheck = (id = [], action, where) => {
            id.map((d) => {
                action ? document.getElementById(d).checked = true
                    : document.getElementById(d).checked = false;
            })
        }
        var hideR2 = (value) => {
            document.querySelector(".row.r2").style.display = value;
            value == "inherit" ? document.querySelector("#disCL").style.display = "none"
                : document.querySelector("#disCL").removeAttribute("style");
        }
        var iA = (id = [], action) => {
            id.map((d) => {
                action ? document.getElementById(d).setAttribute("disabled", "disabled")
                    : document.getElementById(d).removeAttribute("disabled");
            })
        }


        if (d[2] == "market") {
            defaultCheck(["marketRadio"], true, "market");
            iA(["price", "triggerPrice"], true);
        }
        else if (d[2] == "limit") {
            defaultCheck(["limitRadio"], true, "limit");
            iA(["price"], false);
            iA(["triggerPrice"], true);
        }
        else if (d[2] == "sl") {
            defaultCheck(["slRadio"], true, "sl");
            iA(["price", "triggerPrice"], false);
        }
        else if (d[2] == "slm") {
            d[3] == "bo" ? defaultCheck(["slmRadio"], false, "slm")
                : defaultCheck(["slmRadio"], true, "slm")

            iA(["price"], true);
            iA(["triggerPrice"], false);
        }

        if (d[3] == "regular") {
            hideR2("none");
            defaultCheck(["regularRadio"], true, "regular")
            d[1] == "mis" ? defaultCheck(["misRadio"], true, "regular")
                : defaultCheck(["cncRadio"], true, "regular")
            iA(["misRadio", "cncRadio", "marketRadio", "slRadio", "slmRadio"], false);
        } else if (d[3] == "bo") {
            iA(["misRadio", "cncRadio", "marketRadio", "slmRadio"], true);
            iA(["slRadio", "limitRadio"], false);
            defaultCheck(["boRadio", "misRadio", "limitRadio"], true, "bo");
            hideR2("inherit");
        } else if (d[3] == "co") {
            iA(["misRadio", "cncRadio", "slRadio", "slmRadio"], true);
            iA(["marketRadio"], false);
            defaultCheck(["misRadio", "marketRadio"], true, "co");
            hideR2("none");
            document.querySelector("#disCL").style.display = "none";
        } else if (d[3] == "amo") {
            iA(["misRadio", "cncRadio", "marketRadio", "slRadio", "slmRadio"], false);
            defaultCheck(["amoRadio"], true, "amo");
            hideR2("none");
        }

    }

    useEffect(() => {
        var radValue; // Radio Value
        var ele = document.querySelectorAll('.ordWindow input[type=radio]');
        var x = () => document.getElementById("formElem").elements;
        // orderWindow (ow) का cookie नहीं होने पर default cookie सेट करना है
        getCookie("oW", 1) ? ""
            : document.cookie = "oW=bse,mis,market,regular";

        // If the value of a is null or undefined then the value of a will be the orderWindow cookie
        radValue ? radValue
            : radValue = getCookie("oW", 1);

        ele.forEach((item, index) => {
            item.onchange = function () {
                var val = [
                    x().exchange.value,
                    x().product.value,
                    x().orderType.value,
                    x().variety.value,
                ];
                radValue = val;
                handleWindowInput(radValue);
                document.cookie = "oW=" + val;
            }
        })
        handleWindowInput(radValue);
    }, [a]);
    return (
        <div className="card-body">
            <div className="row">
                <div className="col-5 fw-light" style={{ fontSize: "small" }}>
                    <div className="form-check d-inline-block">
                        <input className="form-check-input my-auto" defaultChecked type="radio" value="mis" name="product" id="misRadio" />
                        <label className="form-check-label" htmlFor="misRadio"> MIS </label>
                    </div>
                    <div className="form-check d-inline-block ms-3">
                        <input className="form-check-input my-auto" type="radio" value="cnc" name="product" id="cncRadio" />
                        <label className="form-check-label" htmlFor="cncRadio"> CNC </label>
                    </div>
                </div>
                <div className="col fw-light text-end" style={{ fontSize: "small" }}>
                    <div className="form-check d-inline-block">
                        <input className="form-check-input my-auto" defaultChecked={(a[2]) == "market" ? true : false} type="radio" value="market" name="orderType" id="marketRadio" />
                        <label className="form-check-label" htmlFor="marketRadio"> MARKET  </label>
                    </div>
                    <div className="form-check d-inline-block ms-3">
                        <input className="form-check-input my-auto" defaultChecked={(a[2]) == "limit" ? true : false} type="radio" value="limit" name="orderType" id="limitRadio" />
                        <label className="form-check-label" htmlFor="limitRadio"> LIMIT </label>
                    </div>
                    <div className="form-check d-inline-block ms-3">
                        <input className="form-check-input my-auto" defaultChecked={(a[2]) == "sl" ? true : false} type="radio" value="sl" name="orderType" id="slRadio" />
                        <label className="form-check-label" htmlFor="slRadio"> SL </label>
                    </div>
                    <div className="form-check d-inline-block ms-3">
                        <input className="form-check-input my-auto" defaultChecked={(a[2]) == "slm" ? true : false} type="radio" value="slm" name="orderType" id="slmRadio" />
                        <label className="form-check-label" htmlFor="slmRadio"> SL-M </label>
                    </div>
                </div>
                {/* <div className="row mt-4">
                    <div className="col input d-inline-block">
                        <span>Qty</span><br />
                        <input type="number" className="w-100"></input>
                    </div>
                    <div className="col ps-2 input d-inline-block">
                        <span>Price</span><br />
                        <input type="number" className="w-100"></input>
                    </div>
                    <div className="col ps-2 input d-inline-block">
                        <span>Trigger price</span><br />
                        <input type="number" className="w-100"></input>
                    </div>
                    <div className="col ps-2 input d-inline-block">
                        <span>Disclosed qty.</span><br />
                        <input type="number" className="w-100"></input>
                    </div>
                </div> */}
                <div className="row r1 mt-4">
                    <div className="col input d-inline-block">
                        <span>Qty</span><br />
                        <input type="number" name="qty" id="qty" className="w-100"></input>
                    </div>
                    <div className="col ps-2 input d-inline-block">
                        <span>Price</span><br />
                        <input type="number" name="price" id="price" className="w-100"></input>
                    </div>
                    <div className="col ps-2 input d-inline-block">
                        <span>Trigger price</span><br />
                        <input type="number" name="triggerPrice" id="triggerPrice" className="w-100"></input>
                    </div>
                    <div className="col ps-2 input" id="disCL">
                        <span>Disclosed qty.</span><br />
                        <input type="number" name="disclosed" id="disclosed" className="w-100"></input>
                    </div>
                </div>
                <div className="row r2 mt-4">
                    <div className="col input d-inline-block">
                        <span>Stoploss</span><br />
                        <input type="number" className="w-100"></input>
                    </div>
                    <div className="col ps-2 input d-inline-block">
                        <span>Target</span><br />
                        <input type="number" className="w-100"></input>
                    </div>
                    <div className="col ps-2 input d-inline-block">
                        <span>Trailing stoploss</span><br />
                        <input type="number" className="w-100"></input>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-7 fw-light d-flex align-items-center" style={{ fontSize: "small" }}>
                        <div className="form-check d-inline-block">
                            <input className="form-check-input my-auto" defaultChecked type="radio" value="regular" name="variety" id="regularRadio" />
                            <label className="form-check-label" htmlFor="regularRadio"> REGULAR </label>
                        </div>
                        <div className="form-check d-inline-block ms-3">
                            <input className="form-check-input my-auto" type="radio" value="bo" name="variety" id="boRadio" />
                            <label className="form-check-label" htmlFor="boRadio"> BO </label>
                        </div>
                        <div className="form-check d-inline-block ms-3">
                            <input className="form-check-input my-auto" type="radio" value="co" name="variety" id="coRadio" />
                            <label className="form-check-label" htmlFor="coRadio"> CO </label>
                        </div>
                        <div className="form-check d-inline-block ms-3">
                            <input className="form-check-input my-auto" type="radio" value="amo" name="variety" id="amoRadio" />
                            <label className="form-check-label" htmlFor="amoRadio"> AMO </label>
                        </div>
                    </div>
                    <div className="col-5 text-end pe-3">
                        <button type="button" className="btn rounded-1 submit">{props.data.transType}</button>
                        <button type="button" className="btn rounded-1 btn-light ms-3">Close</button>
                    </div>
                </div>
            </div>
        </div>
    );

};
export default Ow;