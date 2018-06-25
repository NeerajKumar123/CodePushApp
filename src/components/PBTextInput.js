/**
* Sample React Native App
* https://github.com/facebook/react-native
* @flow
*/

import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    Button,
    Alert,
} from 'react-native';



export default class PBTextInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
           <View style = {styles.container}> </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        width: 345,
        height: 155,
        margin: 5,
        justifyContent: 'center',
        alignItems: 'flex-start',
        // backgroundColor: '#FFFFFF',
        backgroundColor: 'red',
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,
    },
});