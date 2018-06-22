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
import CodePush from 'react-native-code-push';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = { logs: [] };
  }
  onButtonPress() {
    this.setState({ logs: ['Update Statred at' + new Date().getTime()] });
    codePush.sync({
      updateDialog: true,
      installMode: codePush.InstallMode.IMMEDIATE
    }, (status) => {
      for (var key in CodePush.SyncStatus) {
        if (status === CodePush.SyncStatus[key]) {
          this.setState(prevState => ({ logs: [...prevState.logs, key.replace(/_/g, '')] }));
          break;

        }
      }
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Hello World!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit App.js
        </Text>
        <Text style={styles.instructions}>
          {instructions}
        </Text>
        <TouchableOpacity onPress={this.onButtonPress}>
          <Text>Check for updates</Text>
        </TouchableOpacity>
        <Text style={styles.instructions}>
          {JSON.stringify(this.state.logs)}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
