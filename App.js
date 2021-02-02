import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Today from './Today';

const baseUri = 'http://api.weatherapi.com/v1';

const App = () => {

  const [ coords, setCoords ] = useState([]);

  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let long = position.coords.longitude;
      let coords = [lat, long];
      setCoords(coords);
    });
  }

  useEffect(() => {
    getCurrentLocation();
  }, []);

  console.log(coords);

  return (
    <View style={styles.container} >
      <Today />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  text: {
    textAlign: 'center'
  }
});

export default App;
