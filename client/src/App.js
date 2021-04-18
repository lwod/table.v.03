import io from 'socket.io-client'
// const socket = io('http://localhost:5000', {transports: ['websocket']});
const host = {domain: ''}
if (window.location.href.includes('localhost')) {
	host.domain = 'http://localhost:5000'
} else {
	host.domain = 'https://lwod.herokuapp.com/'
}

const socket = io.connect(host.domain, {transports: ['websocket']})

const App = () => {
	
	const clickHandler = () => {
		console.log('click')
		const name = 'some name';
		const message = 'some message'
		socket.emit("message", {name, message})
		// socket.send(JSON.stringify({a:1,b:2}))
	}
	
	socket.on('message', msg => {
		console.log(msg)
	})
	
	return (
		<div className={'div'}>
			<button onClick={clickHandler}>Send data</button>
		</div>
	)
}

export default App