const { app, BrowserWindow, Menu, nativeImage } = require('electron');

let mainWindow = null;

if (!app.requestSingleInstanceLock()) {
	app.quit();
} else {
	app.on('second-instance', (ev, cmd, dir) => {
		if (mainWindow) {
			if (mainWindow.isMinimized()) mainWindow.restore();
			mainWindow.focus();
		}
	});
}

Menu.setApplicationMenu(false);

function createWindow() {
	mainWindow = new BrowserWindow({
		width: 1280,
		height: 900,
		icon: nativeImage.createFromDataURL("data:image/png;base64,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"),
		resizable: true,
		webPreferences: {
			nodeIntegration: false
		}
	});

	//mainWindow.webContents.openDevTools();
	mainWindow.loadFile('index.html');
	mainWindow.on('closed', function () {
		mainWindow = null;
	});
}

app.whenReady().then(() => {
	createWindow();
});

app.on('activate', () => {
	if (mainWindow === null) createWindow();
});

app.on('window-all-closed', function () {
	if (process.platform !== 'darwin') app.quit();
});