import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Today from './Today';
import Navbar from './Navbar';

const axios = require('axios').default;

navigator.geolocation = require('@react-native-community/geolocation');

const baseUri = 'http://api.weatherapi.com/v1';

const App = () => {

  const [ coords, setCoords ] = useState([]);
  const [ isLoading, setLoading ] = useState(true);
  const [ todayData, setTodayData ] = useState({});

  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let long = position.coords.longitude;
      let coords = [lat, long];
      setCoords(coords);
    });
  }

  const fetchCurrentWeather = async () => {
    let data = {};
    try {
      let response = await axios.get(baseUri, {
        params: {
          key: d441d4ac38c6447c847140210203011,
          q: `${coords[0]},${coords[1]}`
        }
      });
      data = await response.json();
    } catch (error) {
      console.log(error);
    }
    setTodayData(data);
    setLoading(false);
  }

  useEffect(() => {
    getCurrentLocation();
    fetchCurrentWeather();
  }, []);

  return (
    <View style={styles.container} >
      <Navbar />
      <Today todayData={todayData} />
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
