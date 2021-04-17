const path = require('path')
const express = require('express')
const app = express()
const port = process.env.PORT || 5000;

const http = require('http')
const server = http.createServer(app)

app.use(express.static(path.join(__dirname, "/../", "client", "build")))
app.get('/', async (req,res)=>{
	res.sendFile('index.html')
})

server.listen(port, ()=>{
	console.log('server on port: ', port)
})

const WebSocket = require('ws')
const wss = new WebSocket.Server({server})

wss.on('connection', (ws)=>{
	console.log('socket connected')
	ws.on('message', msg=>{
		console.log(JSON.parse(msg))
	})
})

