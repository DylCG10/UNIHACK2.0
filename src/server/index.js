const httpServer = require("http").createServer();
const io = require("socket.io")(httpServer, {
  cors: {
    origin: "http://localhost:8080",
  }
})




// const app = require('express')();
// const http = require('http').Server(app);
// const io = require('socket.io')(http);


// const usernames = {}
// const rooms = ["Lobby"];

// app.get('/', (req, res) => {
//   res.sendFile(__dirname + '/index.html');
// });

// io.on('connection', (socket) => {
//   console.log('a user connected');

//   socket.on('adduser', function (username) {
//     socket.username = username;
//     socket.room = 'Lobby';
//     usernames[username] = username;
//     socket.join('Lobby');
//     socket.emit('join-room', 'SERVER', 'blah blah')
//     socket.broadcast.to('Lobby').emit('join-room', 'SErVER', username);
//     socket.emit('update-rooms', rooms, 'Lobby');


//     console.log(socket.username);
//   })

//   socket.on('disconnect', () => {
//     console.log('user disconnected');
//   })
// });

// http.listen(3000, () => {
//   console.log('listening on *:3000');
// });