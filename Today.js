import React from 'react';
import { StyleSheet, Image, View, Text } from 'react-native';

const Today = ({ todayData }) => {

    const { location, current } = todayData;

    return(
        <View style={styles.todayContainer} >
            <Text style={styles.todayTemp} >{current.temp_c}&deg;</Text>
            <Image source={{uri: `https:${current.condition.icon}`}} style={styles.icon}/>
        </View>
    );
};

const styles = StyleSheet.create({
    todayContainer: {
        flex: 1
    },
    todayTemp: {
        color: 'white',
        fontSize: 80,
        fontWeight: 'bold',
        marginTop: 40
    },
    icon: {
        width: 100,
        height: 100,
        alignItems: 'center',
    }
});

export default Today;