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
  changes:'This change has been pushed via CodePush',  
});

export default class App extends Component {

  codeSynch() {
    codePush.sync({ updateDialog: true, installMode: codePush.InstallMode.IMMEDIATE });
  }


  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.welcome}>
          Edited using codePush!
        </Text>
        {/* <Text style={styles.welcome}>
          Feeling frustated with Karan Dua!
        </Text>
        <Text style={styles.welcome}>
          Anshita is scolding Dua for the same!
        </Text>
        <Text style={styles.welcome}>
          Now both frustating me with their ill-logical conversation!
        </Text> */}
        <Text style={styles.instructions}>
          To get started, edit App.js
        </Text>
        <Text style={styles.instructions}>
          {instructions}
        </Text>
        <TouchableOpacity onPress={this.codeSynch}>
          <Text style={{ color: 'black' }}>Check Updates</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: 'red',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
