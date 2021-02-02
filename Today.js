import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Today = () => {
    return(
        <View style={styles.todayContainer} >
            <Text>Today's temperature</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    todayContainer: {
        flex: 1
    },
});

export default Today;