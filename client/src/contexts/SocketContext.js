import React, {createContext, useContext, useState, useEffect} from 'react'
import io from 'socket.io-client'

const SocketContext = createContext()
export const useSocket = () => (useContext(SocketContext))

export const SocketProvider = ({children}) => {
	
	const [socket, setSocket] = useState(null)
	
	useEffect(() => {
		
		const host = {domain: ''}
		if (window.location.href.includes('localhost')) {
			host.domain = 'http://localhost:5000'
		} else {
			host.domain = 'https://lwod.herokuapp.com/'
		}
		setSocket(io.connect(host.domain, {transports: ['websocket']}))
	}, [])
	
	return (
		<SocketContext.Provider value={{
			socket
		}}>
			{children}
		</SocketContext.Provider>
	)
}



