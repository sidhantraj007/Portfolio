// src/MyMapComponent.js

import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px'
};

const center = {
  lat: 26.2495,
  lng: 78.1741
};

function MyMap() {
  const onLoad = marker => {
    console.log('marker: ', marker);
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyBbLzyqmTrMJo4I2o1EemcBtZQDHTPAZ0Y">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onClick={(event) => {
          console.log('Map clicked:', event.latLng.lat(), event.latLng.lng());
        }}
      >
        <Marker
          position={center}
          onLoad={onLoad}
        />
      </GoogleMap>
    </LoadScript>
  );
}

export default MyMap;
