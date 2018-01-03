# ![UNSQLQ](/assets/icons/png/64x64.png) UN$QLQ

這只是一個 [Electron APP](http://electron.atom.io/) 的小練習 勿戰

起源是有一天在 `Youtube` 上看到了這則影片 [台灣的UNIQLO太貴了！？台日物價大比較！](https://www.youtube.com/watch?v=23GKFZeFPTo)

然而，本人幾乎九成的衣服都是在 UNIQLO 買，其實看完後有點傷心，於是有了這個點子，做出 `UN $ QLQ`，還把 `UNIQLO` 的 LOGO 後半部改成 $ 和 哭臉

此程式只是單純載入 `UNIQLO` 的 **台灣官網**，當你逛到某樣商品頁面時，會即時將 **相同商品** 在 **日本官網** 的售價、匯率換算後售價等資訊加到 **頁面左側** (原售價之下方)

- 綠底代表 **台灣售價** 比 **日本售價** 還便宜
![cheap](/demo/cheap.PNG)
- 紅底代表 **台灣售價** 比 **日本售價** 還貴
![expensive](/demo/expensive.PNG)
- 也有可能在台灣販售的商品在日本官網上找不到(?)
![none](/demo/none.PNG)

若你是純粹要玩、不碰程式碼的人，可以到 [UNSQLQ_release](https://github.com/ChaoLiou/UNSQLQ_release) 的 repository 下載 `可執行程式`
> 提醒你！下載的壓縮檔有 25X MB，至於為何，可能還要研究 Electron 打包工作