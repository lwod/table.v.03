const path = require('path')
const express = require('express')
const app = express()
const port = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, "/../", "client", "build")))
app.get('/', async (req,res)=>{
	res.sendFile('index.html')
})

app.listen(port, ()=>{
	console.log('server on port: ', port)
})

