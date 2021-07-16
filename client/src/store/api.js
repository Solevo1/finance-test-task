import openSocket from 'socket.io-client';
const  socket = openSocket('http://localhost:4000');
function startConnection(cb,interval) {
  socket.emit('clear');
  socket.emit('start',interval);
  socket.on('ticker', quotes => cb(null, quotes));
}

function stopConnection(cb,interval) {
  socket.emit('clear');
}
export { startConnection,stopConnection };