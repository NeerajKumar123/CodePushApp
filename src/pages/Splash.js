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
    Alert,
    TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback,
} from 'react-native';
import { Actions } from 'react-native-router-flux';


export default class Login extends Component {

    constructor(props) {
        super(props);
        this.state = { text: '' };
    }

    _onLongPressButton() {
        Alert.alert('You long-pressed the button!')
    }

    _handlePress() {
        Actions.dashboard()
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
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1DA2DA'
    }
});
