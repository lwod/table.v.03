const path = require('path')
const express = require('express')
const app = express()
const port = process.env.PORT || 5000;

const cors = require('cors')

const http = require('http')
const server = http.createServer(app)

const socketio = require('socket.io')
const io = socketio(server)

app.use(cors())
app.use(express.static(path.join(__dirname, "/../", "client", "build")))
app.get('/', async (req,res)=>{
	res.sendFile('index.html')
})


io.on('connection', socket => {
	console.log('connection')
	
	socket.on('message', ({name, message}) => {
		console.log(`${name}, ${message}`)
		name = name + ' : str'
		message = message + ' : str'
		io.emit('message', { name, message })
	})
})


server.listen(port, ()=>{
	console.log('server on port: ', port)
})

