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
  TextInput,
  Button,
  Alert,
  Keyboard,
  TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback,
} from 'react-native';
import { Actions } from 'react-native-router-flux';


export default class Login extends Component {

  constructor(props) {
    super(props);
    this.state = { text: '' };
  }

  _onPressButton() {
    Alert.alert('You tapped the button!')
  }

  _onLongPressButton() {
    Alert.alert('You long-pressed the button!')
  }

  _handlePress() {
    Actions.prequote()
  }

  render() {
    return (

      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={styles.container}>
          <View style={styles.loginContainer}>
            <View style={{ backgroundColor: 'green' }}>
            </View>
            <View style={{}}>
              <TextInput
                style={styles.inputField}
                maxLength={10}
                autoCapitalize = "characters"
                onChangeText={(text) => this.setState({ text })}
                placeholder="Enter Registration Number."
              />

            </View>
            <TouchableOpacity onPress={this._handlePress}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>Get Details</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>

    );
  }
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  welconTextcontainer: {
    width: 300,
    height: 100,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'rgba(52, 52, 52, 0.0)',
    backgroundColor: 'green',

  },

  loginContainer: {
    width: 300,
    height: 200,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'rgba(235, 235, 235, 1.0)',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#fff',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
  },
  imageContainer: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
  },
  inputField: {
    margin: 10,
    width: 280,
    height: Platform.OS === 'ios' ? 40 : 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: '#FFFFFF',
    borderWidth: 0,
    borderColor: '#fff',
    textAlign: 'center',

  },
  button: {
    width: 200,
    height: 35,
    borderRadius: 3,
    backgroundColor: '#FF7F00',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    padding: 7,
    color: 'white'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#FFFFFF',
  },
  instructions: {
    textAlign: 'center',
    color: '#FFFFFF',
    marginBottom: 5,
  },
};
