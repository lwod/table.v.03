import {SocketProvider} from "./contexts/SocketContext";
import Map from "./components/Map/Map";

const App = () => {
	return (
		<SocketProvider>
			<div className={'div'}>
				<Map/>
			</div>
		</SocketProvider>
	)
}

export default App