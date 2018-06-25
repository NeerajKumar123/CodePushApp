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
  ScrollView,
  TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback,
} from 'react-native';
import { Actions } from 'react-native-router-flux';


export default class ProposalSummary extends Component {

  constructor(props) {
    super(props);
    this.state =
      {
       
      };

    this.GetRCDetails = this.GetRCDetails.bind(this)
    this.getDetailClicked = this.getDetailClicked.bind(this)
    this.dontKnowRegNoPressed = this.dontKnowRegNoPressed.bind(this)
  }


  getDetailClicked() {
    this.GetRCDetails()
    // Actions.carRegistraionDetails()
  }

  dontKnowRegNoPressed() {
    Alert.alert('Dont know Reg Number Clikced')
  }

  uploadMIR() {
    Alert.alert('uploadMIR')
  }


  GetRCDetails() {
    var currentTimeStamp = '1528357654023'
    var completeURL = 'http://ci.policybazaar.com/MVCController/fla/GetRCDetails?RegistrationNo=' + this.state.registrationNo + '&sumCode=&_=' + currentTimeStamp
    return fetch(completeURL)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({ enquiryID: responseJson.EnquiryId })
        this.getQuotePageDetailsV3()
      })
      .catch((error) => {
        console.error(error);
      });
  }


  render() {
    return (
      <ScrollView contentContainerStyle={styles.contentContainerStyle}>
        
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    // backgroundColor: 'rgba(248, 248, 248, 0.8)'
    backgroundColor: 'white'
  },
  contentContainerStyle: {
    flex: 1,
    flexGrow: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: 5,
    // backgroundColor: '#1DA2DA',
    backgroundColor: 'white'
  },
  headerCntr: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: 'white',
    padding: 10,
    alignSelf: 'stretch'
  },
  ImageContainer: {
    width: 70,
    height: 35,
    backgroundColor: 'yellow',
    resizeMode: 'contain'
  },

  breakupDetailsCntr: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'green',
    backgroundColor: 'white',
    alignSelf: 'stretch'
  },
  discountDetailsCntr: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    alignSelf: 'stretch'
  },
  addOnDetailsCntr: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    alignSelf: 'stretch'

  },
  premiumDetailCntr: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    alignSelf: 'stretch'
  },

  greyedTextBoldRight: {
    flex: 1,
    color: 'rgba(93,110,121,1.0)',
    fontSize: 10,
    textAlign: 'right',
    fontWeight: '800',
    paddingRight: 15
  },
  greyedTextBoldLeft: {
    flex: 1,
    paddingLeft: 10,
    color: 'rgba(93,110,121,1.0)',
    fontSize: 13,
    textAlign: 'left',
    fontWeight: '800',
    paddingRight: 20
  },
  greyedTextNormal: {
    flex: 1,
    color: 'rgba(93,110,121,1.0)',
    fontSize: 12,
    paddingLeft: 15,
    textAlign: 'left',
    fontWeight: '500',
  },
  buttonBlueLinkText: {
    flex: 1,
    color: '#1596fe',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
