import React, { Component } from 'react'
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';

export class MapContainer extends Component {
  render() {
    const {lat, lng, name} = this.props
    return (
      <Map
        google={this.props.google}
        zoom={14}
        initialCenter={{
          lat: lat,
          lng: lng,
        }}
        >
        <Marker
          name={name}
          position={{lat: lat, lng: lng}}
          />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ("AIzaSyD0-K9CwOTifoNW8tlSDGlSzXFW5dL4-RI")
})(MapContainer)
