module.exports = function (Socketio, position) {
  Socketio.on('connection', (socket) => {
    socket.emit('position', position);
    socket.on('move', (data) => {
      switch (data) {
        case 'left':
          position.x -= 5;
          Socketio.emit('position', position);
          break;
        case 'right':
          position.x += 5;
          Socketio.emit('position', position);
          break;
        case 'up':
          position.y -= 5;
          Socketio.emit('position', position);
          break;
        case 'down':
          position.y += 5;
          Socketio.emit('position', position);
          break;
      }
    });
  });
};
