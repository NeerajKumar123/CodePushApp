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
    Button,
    Alert,
    TouchableOpacity
} from 'react-native';



export default class TWQuote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            insuerName: this.props.item.DisplayPlanName,
            IDVTitle: 'IDV',
            IDVValue: this.props.item.PriceBreakup.InsurerDeclaredValue ? this.props.item.PriceBreakup.InsurerDeclaredValue : 'N/A',
            withoutDiscountPrice: this.props.item.PriceBreakup.PremiumWithoutDiscount ? this.props.item.PriceBreakup.PremiumWithoutDiscount : '',
            totalPremium: this.props.item.PriceBreakup.TotalPremium ? this.props.item.PriceBreakup.TotalPremium : '',
            insuerImage: 'http://twowheelerqa.policybazaar.com/Application_Masters/IN/Images/Logo/General-Insurance/OrientalInsurance.gif',
        };
        this.handleQuoteSelection = this.handleQuoteSelection.bind(this)
    }

    handleQuoteSelection() {
        Alert.alert('Quote Selected');
    }

    render() {
        const IDVValue = this.props.item.PriceBreakup.InsurerDeclaredValue
        return (
            <View style={styles.container}>
                <View style={styles.leftContainer}>
                <Text style={styles.InsuerNameText}>{this.state.insuerName}</Text>
                </View>
                <View style={styles.middleContainer}>
                    <Text>{this.state.IDVTitle}</Text>
                    <Text>{this.state.IDVValue}</Text>
                </View>
                <View style={styles.rightContainer}>
                    <Text>{this.state.withoutDiscountPrice}</Text>
                    <TouchableOpacity onPress={this.handleQuoteSelection}>
                        <View style={styles.button}>
                            <Text style={styles.buttonText}>{this.state.totalPremium}</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 5,
        marginBottom: 5,
        marginRight: 10,
        marginLeft: 10,
        paddingTop: 10,
        paddingRight: 5,
        paddingLeft: 5,
        paddingBottom: 10,
        justifyContent: 'center',
        alignItems: 'flex-start',
        backgroundColor: '#FFFFFF',
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 0.5 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        borderRadius: 2,
    },

    leftContainer: {
        flex: 1,
        margin: 5,
        flexDirection: 'row',
        justifyContent: 'center',
        alignSelf: 'stretch',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
    },
    InsuerNameText: {
        color: '#000'
    },
    middleContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'stretch',
        backgroundColor: '#FFFFFF',
    },
    rightContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'stretch',
    },
    button: {
        width: 70,
        height: 30,
        borderRadius: 3,
        backgroundColor: 'green',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        padding: 7,
        color: 'white'
    },

});
