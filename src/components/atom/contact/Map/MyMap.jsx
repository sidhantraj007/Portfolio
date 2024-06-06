// src/MyMapComponent.js

import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import styles from './Map.module.css'

const containerStyle = {
  width: '100%',
  height: '40vh',
  // alignitem:'center',
  // justifycontent:'center'
};

const center = {
  lat: 26.2494521,
  lng: 78.1741388
}; // Coordinates for ABV-IIITM Gwalior

function MyMapComponent() {
  const [selected, setSelected] = useState(null);

  return (
    <div className={styles.container}>
       <LoadScript googleMapsApiKey="AIzaSyBbLzyqmTrMJo4I2o1EemcBtZQDHTPAZ0Y">
      <GoogleMap 
        mapContainerStyle={containerStyle}
        center={center}
        zoom={15}
      >
        <Marker
          position={center}
          onClick={() => setSelected(center)}
        />
        {selected && (
          <InfoWindow
            position={center}
            onCloseClick={() => setSelected(null)}
          >
            <div>
              <h2>ABV-IIITM Gwalior</h2>
              <p>Atal Bihari Vajpayee Indian Institute of Information Technology and Management Gwalior</p>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </LoadScript>

    </div>
   
  );
}

export default MyMapComponent;
