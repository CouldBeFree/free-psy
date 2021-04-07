const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const cors = require('cors');
const multerSettings = require('./utils/multer');
// const socket = require("socket.io");

require('dotenv').config();

// Multer middleware
app.all('*', multerSettings);

//Body parser
app.use(express.json());

// Enable CORS
app.use(cors({
  credentials: true,
  origin: 'http://localhost:8080'
}));

// app.use(cors())

//Cookie parser
app.use(cookieParser());

//Dev logging middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

app.use('/uploads', express.static('uploads'));

mongoose.connect('mongodb://localhost:27017/psy', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Database connected')
});

// Routes
const auth = require('./routes/auth');
const users = require('./routes/users');

//Mount routes
app.use('/api/v1/auth', auth);
app.use('/api/v1/users', users);

const port = 5050;
const server = app.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
});

// Socket setup
const io = require('socket.io')(server, {
  cors: {
    origin: 'http://localhost:8080',
    methods: ['GET', 'POST']
  }
});

const sessionsMap = [];

io.on("connection", async function (socket) {
  console.info('socket connected', socket.id)

  socket.on('user', async (user) => {
    if (user) {
      sessionsMap.push({
        socketId: socket.id,
        name: user.name
      })
    }
    sessionsMap.forEach(el => {
      console.log(`name ${el.name} id ${el.socketId}`)
    })
    console.info('length', sessionsMap.length)
  })

  socket.on('message', async (msg) => {
    const targetSocket = sessionsMap.find(socket => socket.name === msg.to)
    const fromSocket = sessionsMap.find(ses => ses.socketId === socket.id)
    if (targetSocket && targetSocket.socketId && fromSocket) {
      io.to(targetSocket.socketId).emit('messageResponse', {
        message: msg.message,
        from: fromSocket.name
      });
    }
  })

  socket.on('typing', async(name) => {
    socket.broadcast.emit('userTyping', name)
  })

  socket.on('disconnect',  async () => {
    const index = sessionsMap.findIndex(el => el.socketId === socket.id)
    if (sessionsMap[index]) {
      console.log(`user ${sessionsMap[index].name} left the chat`)
      sessionsMap.splice(index, 1)
    }
  })
});

// Handle unhandled promise rejection
process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`);
  // Close server and exit process
  server.close(() => process.exit(1));
});
