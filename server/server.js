const express = require('express')
const dotenv = require('dotenv')
const { chats } = require('./mock/chats-data')

const app = express()
dotenv.config()


const PORT_NUMBER = process.env.SERVER_PORT || 4000

app.get('/api/', (req, res) => {
  res.send('API is running')
})

app.get('/api/chats', (req, res) => {
  res.send(chats)
})

app.get('/api/chats/:id', (req, res) => {
  const singleChats = chats.find((chat) => chat._id === req.params.id)
  res.send(singleChats)
})

app.listen(PORT_NUMBER || 8000, console.log(`app is listening on ${PORT_NUMBER}`))