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
    this.state =
      {
        text: '',
        registrationNo: 'PB11AB4440',
        enquiryID: '',
        carDetails: '',
        visitID: ''
      };

    this.GetRCDetails = this.GetRCDetails.bind(this)
    this.getDetailClicked = this.getDetailClicked.bind(this)
    this.dontKnowRegNoPressed = this.dontKnowRegNoPressed.bind(this)
  }

  componentWillMount() {
    this.createvisit()
    
  }

  getDetailClicked() {
    Actions.carRegistraionDetails({ carDetails: this.state.carDetails, enquiryID: this.state.enquiryID })
    // this.GetRCDetails()
    // Actions.carRegistraionDetails()
  }

  dontKnowRegNoPressed() {
    Alert.alert('Dont know Reg Number')
  }

  newCarClicked(){
  Alert.alert('Got new Car Clicked.')
  }

  uploadMIR() {
    Alert.alert('Under Development')
  }

  createvisit() {
    return
    var completeURL = 'http://ci.policybazaar.com/MVCController/prequote/CreateVisit'
    fetch(completeURL, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        UtmSource: '',
        UtmTerm: '',
        VisitorToken: '',
        LandingPageName: 'carPreQuote',
        LeadSourceID: 10,
        LeadSource: 'PBMobileApp',
        UtmCampaign: '',
        UtmMedium: '',
        ReferalUrl: 'http://ci.policybazaar.com/?utm_content=home_v3',
        VisitID: '',
      }),
    }).then((response) => response.json())
      .then((responseJson) => {
        this.state.VisitID = responseJson
        Alert.alert('Visit ID Created:' + this.state.VisitID.toString())
      })
      .catch((error) => {
        console.error(error);
      });
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

  getQuotePageDetailsV3() {
    var currentTimeStamp = '1528357654023'
    var completeURL = 'http://ci.policybazaar.com/MVCController/quote/GetQuotePageDetailsV3/enquiry/' + this.state.enquiryID + '?_=' + currentTimeStamp
    return fetch(completeURL)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({ carDetails: responseJson.CarDetails })
        Actions.carRegistraionDetails({ carDetails: this.state.carDetails, enquiryID: this.state.enquiryID })
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={styles.container}>
          <View style={styles.WelcomeTextContainer}>
            <Text style={styles.WelcomeTextBlackBold}>Car Insurance Made Easy{"\n"}
              <Text style={[styles.WelcomeTextBlackBold, styles.WelcomeTextGrayNormal]}>{"\n"}Book in less than 3 minutes{"\n"}{"\n"}Self Video Inspection for break in cases{"\n"}{"\n"}Plans starting from Rs. 800/month upto 80% discount
            </Text>
            </Text>
          </View>
          <View style={styles.InputFieldContainer}>
            <TextInput
              style={styles.inputField}
              maxLength={10}
              autoCapitalize="characters"
              onChangeText={(registrationNo) => this.setState({ registrationNo })}
              placeholder="Enter Registration Number."
            />
            <TouchableOpacity style={styles.button} onPress={this.getDetailClicked}>
              <View>
                <Text style={styles.buttonText}>GET DETAILS</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.LinksContainer}>
          <TouchableOpacity onPress={this.dontKnowRegNoPressed}>
                    <View style={{marginTop:10,marginBottom:10}}>
                        <Text style={{color:'rgba(87,149,251,1.0)', fontSize:13,fontWeight:'600'}}>Don't know registration number? Click here.</Text>
                    </View>
          </TouchableOpacity>
           <TouchableOpacity onPress={this.newCarClicked}>
                    <View style={{marginTop:10,marginBottom:10}}>
                        <Text style={{color:'rgba(87,149,251,1.0)', fontSize:13,fontWeight:'600'}}>Got a new car? Awesome! Click here.</Text>
                    </View>
            </TouchableOpacity>
          </View>
          <View style={styles.MIRContainer}>
            <View style={{ backgroundColor: 'grey', height: 1.0, alignSelf: 'stretch', marginLeft:20,marginRight:20 }}>
            </View>
            <TouchableOpacity onPress={this.uploadMIR}>
                    <View style={{marginTop:10,marginBottom:10}}>
                        <Text style={{color:'#A9A9A9', fontSize:13,fontWeight:'600'}}>Have policy/RC copy handy with you?</Text>
                    </View>
              </TouchableOpacity>
            <View style={{ backgroundColor: 'grey', height: 1.0, alignSelf: 'stretch', marginLeft:20,marginRight:20 }}>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  WelcomeTextContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    alignSelf: 'stretch'
  },
  WelcomeTextBlackBold: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
    textAlign: 'center',
    color: 'black',
    fontWeight: '600',
    fontSize: 13
  },
  WelcomeTextGrayNormal: {
    color: '#A9A9A9',
    fontWeight: '500',
  },
  InputFieldContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
  },
  inputField: {
    margin: 10,
    alignSelf: 'stretch',
    height: Platform.OS === 'ios' ? 40 : 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: 'white',
    borderWidth: 0,
    borderColor: '#fff',
    textAlign: 'center',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.5,
    shadowRadius: 1,
  },
  button: {
    margin: 10,
    alignSelf: 'stretch',
    height: 35,
    borderRadius: 3,
    backgroundColor: 'rgba(222,118,80,1.0)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 13,
    textAlign: 'center',
    fontWeight: '800',
  },
  LinksContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    alignSelf: 'stretch',
  },
  MIRContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    alignSelf: 'stretch',
  }
});
