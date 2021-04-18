import React, {useState, useEffect} from "react";
import GoogleMapReact from 'google-map-react'
import './index.css'
import {useSocket} from "../../contexts/SocketContext";

const Map = () => {
	
	const {socket} = useSocket()
	
	const [marker, setMarker] = useState({
		lat: 42.3265,
		lng: -122.8756,
	})
	
	
	const [map, setMap] = useState({
		key: 'AIzaSyBdDXrVbMRNQ67za2Ci2P_MYDX1OCy7LXE',
		center: {
			lat: 42.3265,
			lng: -122.8756,
		},
		zoom: 10,
	})
	
	const clickHandler = (event) => {
		const location = {
			lat: event.lat,
			lng: event.lng
		}
		
		socket.emit('message', location)

		socket.on('setMarker', location=>{
			setMarker(location)
		})
		console.log(event)
	}
	
	
	return (
		<div className={'map'}>
			<GoogleMapReact
				bootstrapURLKeys={{key: map.key}}
				defaultCenter={map.center}
				defaultZoom={map.zoom}
				onClick={clickHandler}
			>
				<div className={'marker'}
				     style={{
					     width: '15px',
					     height: '15px',
					     backgroundColor:'black'
					
				     }}
				     lat={marker.lat}
				     lng={marker.lng}
				>
				
				</div>
			</GoogleMapReact>
		</div>
	)
}

export default Map