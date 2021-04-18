import React, {useState, useEffect} from "react";
import GoogleMapReact from 'google-map-react'
import './index.css'
// import LocationMarker from "../LocationMarker/LocationMarker";
// import {useMap} from "../../contexts/MapContext";
// import LocationInfoBox from "../LocationInfoBox/LocationInfoBox";

import io from 'socket.io-client'
// const socket = io('http://localhost:5000', {transports: ['websocket']});
const host = {domain: ''}
if (window.location.href.includes('localhost')) {
	host.domain = 'http://localhost:5000'
} else {
	host.domain = 'https://lwod.herokuapp.com/'
}

const socket = io.connect(host.domain, {transports: ['websocket']})


const Map = () => {
	
	// const {trackingEvents} = useMap()
	//
	// const [markers, setMarkers] = useState([])
	//
	// const [locationInfo, setLocationInfo] = useState(null)
	//
	// useEffect(()=>{
	// 	setMarkers(
	// 		trackingEvents.map(trackingEvent => {
	// 			return <LocationMarker
	// 				eventType={trackingEvent.type}
	// 				lat = {trackingEvent.lat}
	// 				lng = {trackingEvent.lng}
	// 				key = {trackingEvent.id}
	// 				onClick={()=>{
	// 					setLocationInfo(trackingEvent)
	// 					console.log(trackingEvent)
	// 				}}
	//
	//
	// 			/>
	// 		})
	// 	)
	// }, [trackingEvents])
	
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
	
	
	// useEffect(()=>{
	//
	// }, [marker])
	
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
				{/*{markers}*/}
			</GoogleMapReact>
			{/*{locationInfo && <LocationInfoBox info={locationInfo}/>}*/}
		</div>
	)
}

export default Map