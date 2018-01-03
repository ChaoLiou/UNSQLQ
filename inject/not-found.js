var url_jp = '${url_jp}';

if (!document.getElementsByClassName('not-found')[0] && !document.getElementsByClassName('priceJPY')[0]) {
    var notFoundMsg_link = document.createElement("a");
    notFoundMsg_link.href = url_jp;
    notFoundMsg_link.target = "_blank";
    notFoundMsg_link.className = "not-found";
    notFoundMsg_link.textContent = "日本官網找無此商品";
    document.getElementsByClassName("container-inject")[0].appendChild(notFoundMsg_link);
}