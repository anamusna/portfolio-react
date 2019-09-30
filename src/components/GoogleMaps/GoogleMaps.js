import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';

import './GoogleMaps.css';

export default class GoogleMap extends Component {
	state = {
		lat  : 52.515816,
		lng  : 13.454293,
		zoom : 12
	};

	render() {
		/* 	console.log('state', this.state); */
		const position = [ this.state.lat, this.state.lng ];
		console.log('position', position);
		return (
			<div className="google-map">
				<GoogleMapReact
					bootstrapURLKeys={{ key: 'AIzaSyCsK_poRxIKkQziTVC-qdKe6N5vCmFouz8' }}
					defaultCenter={position}
					defaultZoom={this.state.zoom}
				>
					<Map
						center={position}
						zoom={13}
						maxZoom={15}
						attributionControl={true}
						zoomControl={true}
						doubleClickZoom={true}
						scrollWheelZoom={true}
						dragging={true}
						animate={true}
						easeLinearity={0.35}
					>
						<TileLayer
							url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
							attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
						/>
						<Marker position={position}>
							<Popup>10243, Berlin.</Popup>
						</Marker>
					</Map>
				</GoogleMapReact>
			</div>
		);
	}
}
