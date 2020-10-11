const env = require('dotenv').config()
const Express = require('express')();
const Http = require('http').Server(Express);
const Socketio = require('socket.io')(Http);

const socketBlockMover = require('./Helpers/socketBlockMover.js')
const socketTextSender = require('./Helpers/socketTextSender.js')

var position = {
    x: 200,
    y: 200,
}
var text = "";


Http.listen(env.PORT || 3000, () => {
    console.log('App listening on port 3000!');
});
socketTextSender(Socketio, text);
socketBlockMover(Socketio, position);