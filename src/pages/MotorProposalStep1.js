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

import ProposalIDVHeader from '../components/ProposalIDVHeader'
import ProgressStepHeader from '../components/ProgressStepHeader'
import StepContinuation from '../components/StepContinuation'

export default class MotorProposalStep1 extends Component {

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
                roadSideAssistance: this.props.selectedItem.AddOnFilters && this.props.selectedItem.AddOnFilters.isRSA ? 'Included' : 'N/A', //Roadside Assistance

                dailyAllownce: this.props.selectedItem.Breakup.DailyAllowancePremium, // Daily Allowance
                electAccCover: this.props.selectedItem.Breakup.ElecAccessoriesPremium,//Electrical Accessories Cover
                nonElectAccCover: this.props.selectedItem.Breakup.NonElecAccessoriesPremium, //Non Electrical Accessories Cover
                bifuelKitPremium: this.props.selectedItem.Breakup.BiFuelKitPremium,//Bi Fuel Kit Premium
                bifuelKitLibilityPremium: this.props.selectedItem.Breakup.BiFuelKitLiabilityPremium, //Bi Fuel Liability Premium

                //Premium Details
                packagePremium: this.props.selectedItem.PackagePremium, // Package Premium
                gstPremium: '714', //GST@18%
                finalPremium: this.props.selectedItem.FinalPremium //Final Premium 
            };

    }


    policyWordingClicked() {
        console.log('policyWordingClicked inside Page')
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

    handleContinueClick(){
        console.log('continueClicked proposal page')
        Actions.proposalStep2()
    }

    render() {
        return (
            <View style={styles.container}>
                <ProposalIDVHeader
                    insurerName='United India'
                    insurerImage='ProposalIDVHeader'
                    IDVValue='Rs. 789555'
                    policyWordingUrl='policywordingurl'
                    planPremium='10000'
                    policyWordingClicked={this.policyWordingClicked}
                />
                <ProgressStepHeader
                stepTitle = 'Proposal Form: Step 1/3'
                />
                <ScrollView contentContainerStyle={styles.contentContainerStyle}>
                <View style = {styles.scrollbleContainer}> 
                </View>
                </ScrollView>
                <StepContinuation
                handleContinueClick = {this.handleContinueClick}
                title = 'CONTINUE TO STEP 2/3'
                />
            </View>


        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        alignSelf: 'stretch',
        backgroundColor: 'red'
    },

    scrollbleContainer:{
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        alignSelf: 'stretch',
        backgroundColor: 'green'
    },
    contentContainerStyle: {
        flex: 1,
        flexGrow: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        backgroundColor: 'white'
    },


});
