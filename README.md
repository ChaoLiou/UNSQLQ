# ![UNSQLQ](/assets/icons/png/64x64.png) UN$QLQ

這只是一個 [Electron APP](http://electron.atom.io/) 的小練習 勿戰

起源是有一天在 `Youtube` 上看到了這則影片 [台灣的UNIQLO太貴了！？台日物價大比較！](https://www.youtube.com/watch?v=23GKFZeFPTo)

然而，本人幾乎九成的衣服都是在 UNIQLO 買，其實看完後有點傷心，於是有了這個點子，做出 `UN $ QLQ`，還把 `UNIQLO` 的 LOGO 後半部改成 $ 和 哭臉

此程式只是單純載入 `UNIQLO` 的 **台灣官網**，當你逛到某樣商品頁面時，會即時將 **相同商品** 在 **日本官網** 的售價、匯率換算後售價等資訊加到 **頁面左側** (原售價之下方)，如果不相信價格，我也有在 **日本原價** 加上連至日本官網商品頁

- 綠底代表 **台灣售價** 比 **日本售價** 還便宜
![cheap](/demo/cheap.PNG)
- 紅底代表 **台灣售價** 比 **日本售價** 還貴
![expensive](/demo/expensive.PNG)
- 也有可能在台灣販售的商品在日本官網上找不到(?)
![none](/demo/none.PNG)

> 若你是純粹想玩、不碰程式碼的人，可以下載 [UNSQLQ_release_large](https://app.box.com/s/97ie767vjxk5q01yyk8vn7unp65179ks) (解壓縮後即可點擊程式使用)

> 若你的電腦能使用 `npm`，可以下載 [UNSQLQ_release](https://app.box.com/s/ckzjirv1j8y0od482kr9ehyqjns10crb) 
並在第一次開啟程式前，在 `global 層級` 安裝 `electron` (假如你已經安裝過省略此步驟):

```
npm install electron --global
```