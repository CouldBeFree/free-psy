const Message = require('../models/Message');

module.exports = function (io) {
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
        await Message.create({
          message: msg.message,
          from: fromSocket.name,
          to: msg.to
        })
        io.to(targetSocket.socketId).emit('messageResponse', {
          message: msg.message,
          from: fromSocket.name,
          to: msg.to
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
        console.info('length', sessionsMap.length)
      }
    })
  });
}
