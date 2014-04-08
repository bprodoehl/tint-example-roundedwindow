/* Launch our main window with the following options */
global.mainWindow = TIWindow.create(
	{
		url:'index.html',
		title:'Rounded Window',
		width:316,
		height:316,
		position:"center",
		frame:"transparent"
	});

/* Ensure the application closes when the user closes the window */
global.mainWindow.onClose(function(e) {
	Application.getCurrentProcess().exit({code:0});
});
