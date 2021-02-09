import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

function Loading() {
    return(
        <View style={styles.loadingContainer}>
            <Text style={styles.loadingText} >Loading...</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    loadingContainer: {
        flex: 1,
        backgroundColor: 'black',
        textAlign: 'center',
        margin: 'auto'
    },
    loadingText: {
        fontSize: 40,
        fontWeight: 'bold',
        marginTop: 50,
        color: 'white',
        textAlign: 'center'
    }
});

export default Loading;