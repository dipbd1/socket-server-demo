module.exports = function (Socketio, text) {
  Socketio.on('connection', (socket) => {
    socket.emit('textFromServer', text);
    socket.on('textFromServer', (data) => {
      text = data;
      Socketio.emit('textFromServer', text);
      return;
    });
  });
};
