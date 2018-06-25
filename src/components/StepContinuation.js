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



export default class StepContinuation extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    continueClick () {
        this.props.handleContinueClick()
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress= {this.continueClick.bind(this)}>
                    <View style={styles.buttonPremium}>
                        <Text style={styles.buttonPremiumText}>{this.props.title}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        height: 40,
        justifyContent: 'center',
        alignSelf: 'stretch',
        backgroundColor:'white'
    },
    buttonPremium: {
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(222,118,80,1.0)',
    },
    buttonPremiumText: {
        color: 'white',
        fontSize: 15,
        textAlign: 'center',
        fontWeight: '600',
    },
});
