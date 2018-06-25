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
    TouchableOpacity
} from 'react-native';



export default class ProgressStepHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={styles.container}>
            <Text style = {styles.whiteText}>{this.props.stepTitle}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        height: 30,
        justifyContent: 'center',
        alignSelf: 'stretch',
        backgroundColor: 'rgba(62,72,80,1.0)',
    },

    whiteText:{
        margin:5,
        color: 'white',
        fontSize: 15,
        textAlign: 'left',
        fontWeight: '500',
    },
   
});
