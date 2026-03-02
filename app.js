const {app, BrowserWindow } = require('electron')
const shell = require('electron').shell;

let appWindow
  
  function createWindowMain() {
    appWindow = new BrowserWindow({
      width: 500,
      height: 500,
      autoHideMenuBar: true, 
      transparent: true,
      frame: false, 
      alwaysOnTop: true,
      icon: 'logo/water_api.png'
    })
    appWindow.loadFile('src/assets/splash.html');
    setTimeout(()=>{
      appWindow.close();
      appWindow = new BrowserWindow({
        width: 1600,
        height: 900,
        autoHideMenuBar: true,
        transparent: false,
        frame: true, 
        alwaysOnTop: false,
        icon: 'logo/water_api.png'
      })
      appWindow.loadFile('dist/water-api/index.html');
    },5000)

    appWindow.on('closed', function () {
      appWindow = null
    })
  }



  app.whenReady().then(() => {
    createWindowMain()
  })