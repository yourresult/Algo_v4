// Kite websocket api integration

const kitSoc = require('./web2');
var ticker = new kitSoc();
var instruments = [738561,779521,151040];

  // ticker.autoReconnect(true, 30, 2);
  ticker.connect();
  ticker.on("ticks", onTicks);
  ticker.on("order_update", onOrderUpdate);
  ticker.on("noreconnect", () => {
    var indiaTime = new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" });
    // console.log("Ws not connected", this.nowDate() + "T" + this.nowTime());
  });
  ticker.on("connect", subscribe);

  ticker.on("reconnecting", function (reconnect_interval, reconnections) {
    console.log("Reconnecting: attempt - ", reconnections, " innterval - ", reconnect_interval);
  });


  function onOrderUpdate(message) {
	console.log(message)
}

function onTicks(ticks) {
	// var kf = new kFun(ticks);
	console.log(ticks);
	if (ticks.type == 'order') {
		console.log(ticks.order_id);
	}
	// console.log(ticks);
    // app.listen(4000);
}

function subscribe() {
	var items = [779521];
	ticker.subscribe(items);
	ticker.setMode(ticker.modeFull, items);
}

function connection() {
  
}

// Kite websocket api integration