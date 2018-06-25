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


export default class PriceBreakupUI extends Component {

  constructor(props) {
    super(props);
    this.state =
      {
        registrationNo: 'DL13',
        insurerImage: this.props.selectedItem.ImagePath,
        makeModelVariant: 'MARUTI 800 DUO AC LPG',
        fuelType: 'CNG',
        year: '2015 Model',

        // Premium Breakup
        ///Base Cover
        basicODP: this.props.selectedItem.Breakup.BasePremium, //Basic Own Damage Premium
        thirdPartyDamage: this.props.selectedItem.Breakup.TPPDLiabilityPremium, //Third Party Property Damage
        ownerDriverCover: this.props.selectedItem.Breakup.CompulsaryPACoverForOwnerDriverPremium, //Owner Driver Cover
        paCoverPass: '0', //PA cover for Unnamed Passengers
        paCoverSelf: '10', //Personal Accident Cover
        paidDriverCover: '20', //Paid Driver Cover

        // Discounts
        ncb: this.props.selectedItem.Breakup.NcbDiscount, // No-Claim Bonus
        voluntDedDiscount: this.props.selectedItem.Breakup.VoluntaryDiscount, // Voluntary Deductible Discount
        otherDiscount: '0',//Other Discounts

        // Addons & Accessories
        roadSideAssistance: this.props.selectedItem.AddOnFilters  && this.props.selectedItem.AddOnFilters.isRSA? 'Included':  'N/A', //Roadside Assistance
        
        dailyAllownce: this.props.selectedItem.Breakup.DailyAllowancePremium, // Daily Allowance
        electAccCover: this.props.selectedItem.Breakup.ElecAccessoriesPremium ,//Electrical Accessories Cover
        nonElectAccCover: this.props.selectedItem.Breakup.NonElecAccessoriesPremium, //Non Electrical Accessories Cover
        bifuelKitPremium: this.props.selectedItem.Breakup.BiFuelKitPremium,//Bi Fuel Kit Premium
        bifuelKitLibilityPremium: this.props.selectedItem.Breakup.BiFuelKitLiabilityPremium, //Bi Fuel Liability Premium

        //Premium Details
        packagePremium: this.props.selectedItem.PackagePremium, // Package Premium
        gstPremium: '714', //GST@18%
        finalPremium: this.props.selectedItem.FinalPremium //Final Premium 
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
        <View style={styles.headerCntr}>
          <Image
            style={styles.ImageContainer}
            source={{ uri: this.state.insuerImage }}
          />
          <Text style={styles.greyedTextNormal}> {this.state.registrationNo}</Text>
          <Text style={styles.greyedTextNormal}> {this.state.makeModelVariant}</Text>
          <Text style={styles.greyedTextNormal}> {this.state.fuelType}</Text>
          <Text style={styles.greyedTextNormal}> {this.state.year}</Text>
        </View>
        <View style={styles.breakupDetailsCntr}>
          <View style={{ alignSelf: 'stretch', flex: 1 }}>
            <Text style={styles.buttonBlueLinkText} > Premium Breakup</Text>
          </View>
          <View style={{ alignSelf: 'stretch', flex: 1 }}>
            <Text style={styles.greyedTextBoldLeft}>Base Cover</Text>
          </View>
          <View style={{ alignSelf: 'stretch', flex: 1, flexDirection: 'row' }}>
            <Text style={styles.greyedTextNormal}>Basic Own Damage Premium</Text>
            <Text style={styles.greyedTextBoldRight}> {this.state.basicODP}</Text>
          </View>
          <View style={{ alignSelf: 'stretch', flex: 1, flexDirection: 'row' }}>
            <Text style={styles.greyedTextNormal}>Third Party Property Damage</Text>
            <Text style={styles.greyedTextBoldRight}> {this.state.thirdPartyDamage}</Text>
          </View>
          <View style={{ alignSelf: 'stretch', flex: 1, flexDirection: 'row' }}>
            <Text style={styles.greyedTextNormal}>Owner Driver Cover</Text>
            <Text style={styles.greyedTextBoldRight}> {this.state.ownerDriverCover}</Text>
          </View>
          <View style={{ alignSelf: 'stretch', flex: 1, flexDirection: 'row' }}>
            <Text style={styles.greyedTextNormal}>PA cover for Unnamed Passengers</Text>
            <Text style={styles.greyedTextBoldRight}> {this.state.paCoverPass}</Text>
          </View>
          <View style={{ alignSelf: 'stretch', flex: 1, flexDirection: 'row' }}>
            <Text style={styles.greyedTextNormal}>Personal Accident Cover</Text>
            <Text style={styles.greyedTextBoldRight}> {this.state.paCoverSelf}</Text>
          </View>
          <View style={{ alignSelf: 'stretch', flex: 1, flexDirection: 'row' }}>
            <Text style={styles.greyedTextNormal}>Paid Driver Cover</Text>
            <Text style={styles.greyedTextBoldRight}> {this.state.paidDriverCover}</Text>
          </View>
        </View>
        <View style={styles.discountDetailsCntr}>
          <View style={{ alignSelf: 'stretch', flex: 1 }}>
            <Text style={styles.greyedTextBoldLeft}>Discounts</Text>
          </View>
          <View style={{ alignSelf: 'stretch', flex: 1, flexDirection: 'row' }}>
            <Text style={styles.greyedTextNormal}>No-Claim Bonus</Text>
            <Text style={styles.greyedTextBoldRight}> {this.state.ncb}</Text>
          </View>
          <View style={{ alignSelf: 'stretch', flex: 1, flexDirection: 'row' }}>
            <Text style={styles.greyedTextNormal}>Voluntary Deductible Discount</Text>
            <Text style={styles.greyedTextBoldRight}> {this.state.voluntDedDiscount}</Text>
          </View>
          <View style={{ alignSelf: 'stretch', flex: 1, flexDirection: 'row' }}>
            <Text style={styles.greyedTextNormal}>Other Discounts</Text>
            <Text style={styles.greyedTextBoldRight}> {this.state.otherDiscount}</Text>
          </View>
        </View>
        <View style={styles.addOnDetailsCntr}>
          <View style={{ alignSelf: 'stretch', flex: 1 }}>
            <Text style={styles.greyedTextBoldLeft}>Addons & Accessories</Text>
          </View>
          <View style={{ alignSelf: 'stretch', flex: 1, flexDirection: 'row' }}>
            <Text style={styles.greyedTextNormal}>Roadside Assistance</Text>
            <Text style={styles.greyedTextBoldRight}> {this.state.roadSideAssistance}</Text>
          </View>
          <View style={{ alignSelf: 'stretch', flex: 1, flexDirection: 'row' }}>
            <Text style={styles.greyedTextNormal}>Daily Allowance</Text>
            <Text style={styles.greyedTextBoldRight}> {this.state.dailyAllownce}</Text>
          </View>
          <View style={{ alignSelf: 'stretch', flex: 1, flexDirection: 'row' }}>
            <Text style={styles.greyedTextNormal}>Electrical Accessories Cover</Text>
            <Text style={styles.greyedTextBoldRight}> {this.state.electAccCover}</Text>
          </View>
          <View style={{ alignSelf: 'stretch', flex: 1, flexDirection: 'row' }}>
            <Text style={styles.greyedTextNormal}>Non Electrical Accessories Cover</Text>
            <Text style={styles.greyedTextBoldRight}> {this.state.nonElectAccCover}</Text>
          </View>
          <View style={{ alignSelf: 'stretch', flex: 1, flexDirection: 'row' }}>
            <Text style={styles.greyedTextNormal}>Bi Fuel Kit Premium</Text>
            <Text style={styles.greyedTextBoldRight}> {this.state.bifuelKitPremium}</Text>
          </View>
          <View style={{ alignSelf: 'stretch', flex: 1, flexDirection: 'row' }}>
            <Text style={styles.greyedTextNormal}>Bi Fuel Liability Premium</Text>
            <Text style={styles.greyedTextBoldRight}> {this.state.bifuelKitLibilityPremium}</Text>
          </View>
        </View>
        <View style={styles.premiumDetailCntr}>
          <View style={{ alignSelf: 'stretch', flex: 1 }}>
            <Text style={styles.greyedTextBoldLeft}>Premium Details</Text>
          </View>
          <View style={{ alignSelf: 'stretch', flex: 1, flexDirection: 'row' }}>
            <Text style={styles.greyedTextNormal}>Package Premium</Text>
            <Text style={styles.greyedTextBoldRight}> {this.state.packagePremium}</Text>
          </View>
          <View style={{ alignSelf: 'stretch', flex: 1, flexDirection: 'row' }}>
            <Text style={styles.greyedTextNormal}>GST@18%</Text>
            <Text style={styles.greyedTextBoldRight}>{this.state.gstPremium}</Text>
          </View>
          <View style={{ alignSelf: 'stretch', flex: 1, flexDirection: 'row' }}>
            <Text style={styles.greyedTextBoldLeft}>Final Premium</Text>
            <Text style={styles.greyedTextBoldRight}> {this.state.finalPremium}</Text>
          </View>
        </View>
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
