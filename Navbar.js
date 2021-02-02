import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';

const windowWidth = Dimensions.get('window').width;

function Navbar() {


    return(
        <View style={styles.navbar} >
            <Icon
                name="navicon"
                color="black"
                size={30}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    navbar: {
        height: 50,
        width: windowWidth,
        backgroundColor: 'white',
        alignItems: 'center'
    },
});

export default Navbar;