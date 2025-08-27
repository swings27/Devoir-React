import React from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '450px',
}

const center = {
  lat: 45.778275,
  lng: 4.799576,
}

export default function MyMap() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyClDfO0FoeA2LnRDKi7JK2My753icK75eU',
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center)
    map.fitBounds(bounds)

    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={14.5}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
    <Marker
      position={center}
    />
    </GoogleMap>
  ) : (
    <></>
  )
};

