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

export default class MotorProposalStep3 extends Component {

    constructor(props) {
        super(props);
        this.state =
            {
               
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
        Actions.proposalSummary()
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
                stepTitle = 'Proposal Form: Step 3/3'
                />
                <ScrollView contentContainerStyle={styles.contentContainerStyle}>
                <View style = {styles.scrollbleContainer}> 
                </View>
                </ScrollView>
                <StepContinuation
                handleContinueClick = {this.handleContinueClick}
                title = 'SAVE & VIEW SUMMARY'
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
        backgroundColor: 'white'
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
