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
  TouchableOpacity
} from 'react-native';

import codePush from "react-native-code-push";

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


export default class App extends Component {
  onButtonPress() {
    codePush.sync({
      updateDialog: true,
      installMode: codePush.InstallMode.IMMEDIATE
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.boxContainer}>
          <Text> Hello World</Text>
        </View>
        <TouchableOpacity onPress={this.onButtonPress}>
          <Text style={styles.doneButtonText}>Check for updates</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  boxContainer: {
    flex: 1,
    backgroundColor: 'red',
  },

  doneButtonText: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    color: 'rgba(26,127,172,1.0)',
    fontWeight: '800',
    textAlign: 'center',
    fontSize: 20,
    textAlignVertical: 'center',
    backgroundColor: 'red',
  },
});
