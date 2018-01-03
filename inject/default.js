var container = document.createElement("div");
container.className = "container-inject";
document.getElementById("prodInfo").appendChild(container);

var loader = document.createElement("img");
loader.src = "/jp/css/lib/images/bx_loader.gif";
loader.className = "loader";
container.appendChild(loader);