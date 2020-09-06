/*
 * fileName: useLatLong.ts
 * description: this file contains the custom hook to access user location inside any FC.
 */
import * as React from 'react';
import Geolocation from '@react-native-community/geolocation';

const useCurrentLatLong = () => {
  const [location, setLocation] = React.useState<{
    lat: number | null;
    lon: number | null;
  }>({
    lat: null,
    lon: null,
  });

  React.useEffect(() => {
    Geolocation.getCurrentPosition(({coords}) => {
      setLocation({
        lat: coords.latitude,
        lon: coords.longitude,
      });
    });
  }, []);

  return [location];
};

export default useCurrentLatLong;
