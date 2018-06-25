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
    Alert,
    TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback,
    ScrollView,
    TextInput,
    KeyboardAvoidingView,
    ActivityIndicator
} from 'react-native';
import { Actions } from 'react-native-router-flux';

const defaultMaxLength = 100;
export default class PreQuote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            productType: 'motor',
        };

        this.getQuotesClicked = this.getQuotesClicked.bind(this);
        this.getRegDetails = this.getRegDetails.bind(this);
        this.getQuotes = this.getQuotes.bind(this);
    }

    _onLongPressButton() {
        Alert.alert('You long-pressed the button!')
    }

    _handlePress() {
        Actions.dashboard()
    }

    getQuotesClicked() {
        this.getRegDetails();
    }

    getRegDetails() {
        return fetch('https://twowheelerqa.policybazaar.com/MVCController/PreQuote/GetRegistrationNoDetails?RegistrationNo=PB11AB4440&isQuote=true&_=1528198186878n')
            .then((response) => response.json())
            .then((responseJson) => {
                this.getQuotes()
            })
            .catch((error) => {
                console.error(error);
            });
    }

    getQuotes() {
        return fetch('http://twowheeler.policybazaar.com/MVCController/Quote/GetQuoteFromDB?enquiryId=odFUAqlUr5MYnnU2PHR9VZiT83jo%2BBiMSiJhyAutTU0%3D&_=1528267930058')
            .then((response) => response.json())
            .then((responseJson) => {
                Actions.quotes({ QuotesData: responseJson })
            })
            .catch((error) => {
                console.error(error);
            });
    }


    validate = (text, item) => {
        var reg = item.item.validRegex;
        console.log(reg);
        if (reg.test(text) === false) {
            Alert.alert(`Please enter valid ${item.errorCode}`)
            item.currentValue = text;
            return false;
        }
        else {
            item.currentValue = text;
            console.log("Email is Correct");
        }
    }

    render() {
        var fields = [];
        if (this.state.productType === 'motor') {
            fields = [
                { name: 'Motor Total Life Cover Desired', errorCode: 'Please enter valid Cover Amount', maxLenght: defaultMaxLength, validRegex: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, currentValue: '' },
                { name: 'Select Annual Income', errorCode: 'Select Annual Income', maxLenght: defaultMaxLength, validRegex: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, currentValue: '' },
                { name: 'Date Of Birth', errorCode: 'Date Of Birth', maxLenght: defaultMaxLength, validRegex: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, currentValue: '' },
                { name: 'Full Name', errorCode: 'Full Name', maxLenght: defaultMaxLength, validRegex: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, currentValue: '' },
                { name: 'Enter Country', errorCode: 'Country', maxLenght: defaultMaxLength, validRegex: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, currentValue: '' },
                { name: 'Enter City', errorCode: 'Enter City', maxLenght: defaultMaxLength, validRegex: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, currentValue: '' },
                { name: 'Enter Mobile Number', errorCode: 'Enter Mobile Number', maxLenght: defaultMaxLength, validRegex: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, currentValue: '' },
                { name: 'Enter Email ID', errorCode: 'Email ID', maxLenght: defaultMaxLength, validRegex: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, currentValue: '' },
            ]
        } else if (this.state.productType === 'term') {
            fields = [
                { name: 'Total Life Cover Desired', errorCode: 'Please enter valid Cover Amount', maxLenght: defaultMaxLength, validRegex: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, currentValue: '' },
                { name: 'Select Annual Income', errorCode: 'Select Annual Income', maxLenght: defaultMaxLength, validRegex: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, currentValue: '' },
                { name: 'Date Of Birth', errorCode: 'Date Of Birth', maxLenght: defaultMaxLength, validRegex: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, currentValue: '' },
                { name: 'Full Name', errorCode: 'Full Name', maxLenght: defaultMaxLength, validRegex: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, currentValue: '' },
                { name: 'Enter Country', errorCode: 'Country', maxLenght: defaultMaxLength, validRegex: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, currentValue: '' },
                { name: 'Enter City', errorCode: 'Enter City', maxLenght: defaultMaxLength, validRegex: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, currentValue: '' },
                { name: 'Enter Mobile Number', errorCode: 'Enter Mobile Number', maxLenght: defaultMaxLength, validRegex: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, currentValue: '' },
                { name: 'Enter Email ID', errorCode: 'Email ID', maxLenght: defaultMaxLength, validRegex: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, currentValue: '' },
            ]
        }
        else if (this.state.productType === 'health') {
            fields = [
                { name: 'health Total Life Cover Desired', errorCode: 'Please enter valid Cover Amount', maxLenght: defaultMaxLength, validRegex: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, currentValue: '' },
                { name: 'Select Annual Income', errorCode: 'Select Annual Income', maxLenght: defaultMaxLength, validRegex: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, currentValue: '' },
                { name: 'Date Of Birth', errorCode: 'Date Of Birth', maxLenght: defaultMaxLength, validRegex: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, currentValue: '' },
                { name: 'Full Name', errorCode: 'Full Name', maxLenght: defaultMaxLength, validRegex: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, currentValue: '' },
                { name: 'Enter Country', errorCode: 'Country', maxLenght: defaultMaxLength, validRegex: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, currentValue: '' },
                { name: 'Enter City', errorCode: 'Enter City', maxLenght: defaultMaxLength, validRegex: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, currentValue: '' },
                { name: 'Enter Mobile Number', errorCode: 'Enter Mobile Number', maxLenght: defaultMaxLength, validRegex: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, currentValue: '' },
                { name: 'Enter Email ID', errorCode: 'Email ID', maxLenght: defaultMaxLength, validRegex: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, currentValue: '' },
            ]

        } else if (this.state.productType === 'investment') {
            fields = [
                { name: 'investment Total Life Cover Desired', errorCode: 'Please enter valid Cover Amount', maxLenght: defaultMaxLength, validRegex: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, currentValue: '' },
                { name: 'Select Annual Income', errorCode: 'Select Annual Income', maxLenght: defaultMaxLength, validRegex: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, currentValue: '' },
                { name: 'Date Of Birth', errorCode: 'Date Of Birth', maxLenght: defaultMaxLength, validRegex: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, currentValue: '' },
                { name: 'Full Name', errorCode: 'Full Name', maxLenght: defaultMaxLength, validRegex: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, currentValue: '' },
                { name: 'Enter Country', errorCode: 'Country', maxLenght: defaultMaxLength, validRegex: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, currentValue: '' },
                { name: 'Enter City', errorCode: 'Enter City', maxLenght: defaultMaxLength, validRegex: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, currentValue: '' },
                { name: 'Enter Mobile Number', errorCode: 'Enter Mobile Number', maxLenght: defaultMaxLength, validRegex: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, currentValue: '' },
                { name: 'Enter Email ID', errorCode: 'Email ID', maxLenght: defaultMaxLength, validRegex: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, currentValue: '' },
            ]

        } else if (this.state.productType === 'motor') {
            fields = [
                { name: 'Motor Total Life Cover Desired', errorCode: 'Please enter valid Cover Amount', maxLenght: defaultMaxLength, validRegex: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, currentValue: '' },
                { name: 'Select Annual Income', errorCode: 'Select Annual Income', maxLenght: defaultMaxLength, validRegex: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, currentValue: '' },
                { name: 'Date Of Birth', errorCode: 'Date Of Birth', maxLenght: defaultMaxLength, validRegex: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, currentValue: '' },
                { name: 'Full Name', errorCode: 'Full Name', maxLenght: defaultMaxLength, validRegex: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, currentValue: '' },
                { name: 'Enter Country', errorCode: 'Country', maxLenght: defaultMaxLength, validRegex: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, currentValue: '' },
                { name: 'Enter City', errorCode: 'Enter City', maxLenght: defaultMaxLength, validRegex: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, currentValue: '' },
                { name: 'Enter Mobile Number', errorCode: 'Enter Mobile Number', maxLenght: defaultMaxLength, validRegex: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, currentValue: '' },
                { name: 'Enter Email ID', errorCode: 'Email ID', maxLenght: defaultMaxLength, validRegex: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, currentValue: '' },
            ]

        } else if (this.state.productType === 'travel') {
            fields = [
                { name: 'Travel Total Life Cover Desired', errorCode: 'Please enter valid Cover Amount', maxLenght: defaultMaxLength, validRegex: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, currentValue: '' },
                { name: 'Select Annual Income', errorCode: 'Select Annual Income', maxLenght: defaultMaxLength, validRegex: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, currentValue: '' },
                { name: 'Date Of Birth', errorCode: 'Date Of Birth', maxLenght: defaultMaxLength, validRegex: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, currentValue: '' },
                { name: 'Full Name', errorCode: 'Full Name', maxLenght: defaultMaxLength, validRegex: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, currentValue: '' },
                { name: 'Enter Country', errorCode: 'Country', maxLenght: defaultMaxLength, validRegex: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, currentValue: '' },
                { name: 'Enter City', errorCode: 'Enter City', maxLenght: defaultMaxLength, validRegex: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, currentValue: '' },
                { name: 'Enter Mobile Number', errorCode: 'Enter Mobile Number', maxLenght: defaultMaxLength, validRegex: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, currentValue: '' },
                { name: 'Enter Email ID', errorCode: 'Email ID', maxLenght: defaultMaxLength, validRegex: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, currentValue: '' },
            ]

        } else if (this.state.productType === 'tw') {
            fields = [
                { name: 'TwoWheeler Total Life Cover Desired', errorCode: 'Please enter valid Cover Amount', maxLenght: defaultMaxLength, validRegex: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, currentValue: '' },
                { name: 'Select Annual Income', errorCode: 'Select Annual Income', maxLenght: defaultMaxLength, validRegex: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, currentValue: '' },
                { name: 'Date Of Birth', errorCode: 'Date Of Birth', maxLenght: defaultMaxLength, validRegex: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, currentValue: '' },
                { name: 'Full Name', errorCode: 'Full Name', maxLenght: defaultMaxLength, validRegex: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, currentValue: '' },
                { name: 'Enter Country', errorCode: 'Country', maxLenght: defaultMaxLength, validRegex: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, currentValue: '' },
                { name: 'Enter City', errorCode: 'Enter City', maxLenght: defaultMaxLength, validRegex: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, currentValue: '' },
                { name: 'Enter Mobile Number', errorCode: 'Enter Mobile Number', maxLenght: defaultMaxLength, validRegex: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, currentValue: '' },
                { name: 'Enter Email ID', errorCode: 'Email ID', maxLenght: defaultMaxLength, validRegex: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, currentValue: '' },
            ]

        } else if (this.state.productType === 'cancer') {
            fields = [
                { name: 'Cancer Total Life Cover Desired', errorCode: 'Please enter valid Cover Amount', maxLenght: defaultMaxLength, validRegex: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, currentValue: '' },
                { name: 'Select Annual Income', errorCode: 'Select Annual Income', maxLenght: defaultMaxLength, validRegex: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, currentValue: '' },
                { name: 'Date Of Birth', errorCode: 'Date Of Birth', maxLenght: defaultMaxLength, validRegex: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, currentValue: '' },
                { name: 'Full Name', errorCode: 'Full Name', maxLenght: defaultMaxLength, validRegex: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, currentValue: '' },
                { name: 'Enter Country', errorCode: 'Country', maxLenght: defaultMaxLength, validRegex: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, currentValue: '' },
                { name: 'Enter City', errorCode: 'Enter City', maxLenght: defaultMaxLength, validRegex: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, currentValue: '' },
                { name: 'Enter Mobile Number', errorCode: 'Enter Mobile Number', maxLenght: defaultMaxLength, validRegex: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, currentValue: '' },
                { name: 'Enter Email ID', errorCode: 'Email ID', maxLenght: defaultMaxLength, validRegex: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, currentValue: '' },
            ]

        } else if (this.state.productType === 'mc') {
            fields = [
                { name: 'My Account Cancer Total Life Cover Desired', errorCode: 'Please enter valid Cover Amount', maxLenght: defaultMaxLength, validRegex: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, currentValue: '' },
                { name: 'Select Annual Income', errorCode: 'Select Annual Income', maxLenght: defaultMaxLength, validRegex: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, currentValue: '' },
                { name: 'Date Of Birth', errorCode: 'Date Of Birth', maxLenght: defaultMaxLength, validRegex: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, currentValue: '' },
                { name: 'Full Name', errorCode: 'Full Name', maxLenght: defaultMaxLength, validRegex: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, currentValue: '' },
                { name: 'Enter Country', errorCode: 'Country', maxLenght: defaultMaxLength, validRegex: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, currentValue: '' },
                { name: 'Enter City', errorCode: 'Enter City', maxLenght: defaultMaxLength, validRegex: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, currentValue: '' },
                { name: 'Enter Mobile Number', errorCode: 'Enter Mobile Number', maxLenght: defaultMaxLength, validRegex: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, currentValue: '' },
                { name: 'Enter Email ID', errorCode: 'Email ID', maxLenght: defaultMaxLength, validRegex: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, currentValue: '' },
            ]

        }
        let cellView = fields.map((item, key) => {
            return <View style={styles.CellContainer}>
                <TextInput
                    style={styles.inputField}
                    maxLength={item.maxLenght}
                    keyboardType='default'
                    textAlign='left'
                    onChangeText={(text) => this.setState({ text })}
                    onEndEditing={(text) => this.validate({ text }, { item })}
                    placeholder={item.name}
                    defaultValue={item.currentValue}
                />

            </View>
        });

        return (
            <View style={styles.container}>
                <KeyboardAvoidingView style={{ flex: 1 }}
                    behavior='padding'
                    keyboardVerticalOffset={64}>
                    <ScrollView>
                        <View style={{ flex: 1, padding: 4, backgroundColor: 'rgba(248, 248, 248, 0.8)' }}>
                            {cellView}
                        </View>
                    </ScrollView>
                </KeyboardAvoidingView>
                <TouchableOpacity onPress={this.getQuotesClicked}>
                    <View style={styles.ButtonContainer}>
                        <Text style={styles.ButtonText}>GET QUOTES</Text>
                        <ActivityIndicator style = {{flex:1}} color='#FFFFFF' />
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        backgroundColor: 'rgba(248, 248, 248, 0.8)'
    },
    CellContainer: {
        flex: 1,
        height: 60,
        margin: 5,
        borderRadius: 3,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'stretch',
        backgroundColor: '#FFF',
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 0
        },
        shadowRadius: 1,
        shadowOpacity: .5
    },
    ButtonContainer: {
        width: 375,
        height: 50,
        flexDirection:'row',
        backgroundColor: '#FF7F00',
        justifyContent: 'center',
        alignItems: 'center',
        bottom: 0,
        paddingLeft:10,
        paddingRight:10
    },
    ButtonText: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'right',
        textAlignVertical: 'center', 
    },
    inputField: {
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        textAlign: 'left',
        marginLeft: 10,
        marginRight: 10,
        marginTop: 5,
        marginBottom: 5,
    },
});
