import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
import './GoogleMaps.css'

export default class GoogleMap extends Component {
  state = {
    center: { lat: 52.519143, lng: 13.398713 },
    zoom: 12
  }

  render() {
    const position = this.state.center;
    return (
      <div className='google-map'>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyCsK_poRxIKkQziTVC-qdKe6N5vCmFouz8' }}
          defaultCenter={this.state.center}
          defaultZoom={this.state.zoom}>
          <Map center={position} zoom={13}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
            />
            <Marker position={position}>
              <Popup>A pretty CSS3 popup.<br />Easily customizable.</Popup>
            </Marker>
          </Map>
        </GoogleMapReact>
      </div>
    )
  }
}