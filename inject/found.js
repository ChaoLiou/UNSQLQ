var url_jp = '${url_jp}', priceJPY = '${priceJPY}', exchange_rate = '${exchange_rate}', priceJPYToTWD = '${priceJPYToTWD}';

var container = document.getElementsByClassName("container-inject")[0];

var price_container = document.getElementById("price");
var priceTWD = parseInt(price_container.textContent.replace("NT$", "").replace(",", ""));
var comparison = priceTWD > priceJPYToTWD ? 'expensive' : 'cheap';
price_container.className += " " + comparison;

var priceJPY_link = document.createElement("a");
priceJPY_link.className = "priceJPY";
priceJPY_link.href = url_jp;
priceJPY_link.target = "_blank";
priceJPY_link.textContent = "日本原價 JPY$" + priceJPY;
container.appendChild(priceJPY_link);

var exchange_rate_container = document.createElement("div");
exchange_rate_container.className = "exchange-rate";
exchange_rate_container.textContent = "匯率(JPY:NT) 1:" + exchange_rate;
container.appendChild(exchange_rate_container);

var priceJPYToTWD_container = document.createElement("div");
priceJPYToTWD_container.className="priceJPYToTWD";
priceJPYToTWD_container.textContent = "匯率換算 NT$" + priceJPYToTWD;
container.appendChild(priceJPYToTWD_container);

var price_difference_container = document.createElement("div");
var difference = Math.abs(priceTWD - priceJPYToTWD);
price_difference_container.className="price-difference " + comparison ;
price_difference_container.textContent = "差價 NT$" + difference + " " + (comparison == "cheap" ? "賺" : "虧");
container.appendChild(price_difference_container);