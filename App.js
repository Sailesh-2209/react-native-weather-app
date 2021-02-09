import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Today from './Today';
import Navbar from './Navbar';
import Loading from './Loading';

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
    let url = baseUri + `/current.json?key=d441d4ac38c6447c847140210203011&q=${coords[0]},${coords[1]}`;
    let response = await fetch(url);
    let data = await response.json();
    if (todayData.current === undefined) {
      setTodayData(data);
    }
    if (todayData === {}) {
      setLoading(true);
    }
    else if (todayData.current === undefined) {
      setLoading(true);
    }
    else {
      setLoading(false);
    }
  }

  useEffect(() => {
    getCurrentLocation();
    fetchCurrentWeather();
    if (todayData.current === undefined) {
      fetchCurrentWeather();
    }
    console.log(todayData);
  }, [todayData]);

  if (isLoading) {
    return <Loading />
  }

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
