const electron = require('electron')
// Module to control application life.
const app = electron.app
// Module to create native browser window.
const BrowserWindow = electron.BrowserWindow
const Menu = electron.Menu
const net = electron.net
const { ipcMain } = require('electron')

const path = require('path')
const url = require('url')
const fs = require('fs')

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow

function createWindow() {
  const options = {
    titleBarStyle: 'hidden',
    width: 1281,
    height: 800,
    minWidth: 1281,
    minHeight: 800,
    show: false,
    icon: path.join(__dirname, 'assets/icons/png/64x64.png')
  };
  // Create the browser window.
  mainWindow = new BrowserWindow(options)
  // and load the index.html of the app.
  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }))
  // Open the DevTools.
  // mainWindow.webContents.openDevTools()
  mainWindow.maximize()

  // Emitted when the window is closed.
  mainWindow.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null
  })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow()
  }
})

app.on('web-contents-created', (event, webContents) => {
  // console.log('web-contents-created');
  webContents.on('dom-ready', (event) => {
    // console.log('dom-ready');

    const url = event.sender.webContents.getURL();
    let parsingResult = /tw\/store\/goods\/(\d*)/.exec(url);
    if (parsingResult && parsingResult.length > 1) {
      const id = parsingResult[1];
      const url_jp = parsingResult.input.replace('/tw/', '/jp/');

      var defaultJS = fs.readFileSync(path.join(__dirname, '/inject/default.js')).toString();
      webContents.executeJavaScript(defaultJS);

      var defaultCSS = fs.readFileSync(path.join(__dirname, '/inject/default.css')).toString();
      webContents.insertCSS(defaultCSS);

      const request = net.request(url_jp);
      request.on('response', (response) => {
        response.on('data', (chunk) => requestJPCallback(chunk, webContents, url_jp, parsingResult))
      })
      request.end();
    } else {
      // console.log(parsingResult);
    }
  })
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.

const requestJPCallback = (chunk, webContents, url_jp, parsingResult) => {
  const data = chunk.toString('utf8');
  if (data) {
    parsingResult = /"priceCurrency":"(.*?)","price":"(\d*)"/.exec(data);
    if (parsingResult && parsingResult.length > 2) {

      const priceCurrency = parsingResult[1];
      if (priceCurrency.toUpperCase() == "JPY") {

        const exchange_rate = 0.2668;
        const priceJPY = parseInt(parsingResult[2]);
        const priceJPYToTWD = Math.ceil(priceJPY * exchange_rate);

        var foundJS = fs.readFileSync(path.join(__dirname, '/inject/found.js')).toString()
          .replace('${url_jp}', url_jp)
          .replace('\'${priceJPY}\'', priceJPY)
          .replace('\'${exchange_rate}\'', exchange_rate)
          .replace('\'${priceJPYToTWD}\'', priceJPYToTWD);

        webContents.executeJavaScript(foundJS);
        webContents.insertCSS('.loader,.not-found { display:none; }');
      } else {
        // console.log(parsingResult);
      }
    } else {
      // console.log(data);
      var notFoundJS = fs.readFileSync(path.join(__dirname, '/inject/not-found.js')).toString()
        .replace('${url_jp}', url_jp);
      webContents.executeJavaScript(notFoundJS);
      webContents.insertCSS('.loader { display:none; }');
    }
  } else {
    // console.log('no chunk');
  }
}