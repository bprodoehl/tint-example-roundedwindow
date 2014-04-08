function handleClose() {
  try {
    Application.getCurrentProcess().exit({code:0});
    global.mainWindow.close();
  } catch (err) {
    console.log(err.message);
  }
}

function handleMinimize() {
  try {
    global.mainWindow.setWindowState({state:'minimized'});
  } catch (err) {
    console.log(err.message);
  }
}

function addListeners() {
  document.getElementById('main_div').addEventListener('mousedown', mouseDown, false);
  global.mainWindow.getDOMWindow().addEventListener('mouseup', mouseUp, false);
}

function mouseUp() {
  window.removeEventListener('mousemove', windowMove, true);
}

var dragStartX, dragStartY;

function mouseDown(e) {
  dragStartX = e.clientX;
  dragStartY = e.clientY;
  window.addEventListener('mousemove', windowMove, true);
}

function windowMove(e) {
  var currentWindowLocation = global.mainWindow.getLocation();
  var newLocX, newLocY;
  newLocX = currentWindowLocation.x + (e.clientX - dragStartX);
  newLocY = currentWindowLocation.y + (e.clientY - dragStartY);
  global.mainWindow.setLocation({x:newLocX, y:newLocY});
}

function onloadHandler() {
  addListeners();
}

function showDevTools() {
  global.mainWindow.showDebugWindow();
}
