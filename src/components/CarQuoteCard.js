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



export default class CarQuoteCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            insuerName: this.props.item.SupplierName,
            IDVTitle: 'IDV',
            IDVValue: this.props.item.Idv ? this.props.item.Idv : 'N/A',
            totalPremium: this.props.item.FinalPremium ? 'Rs.' + this.props.item.FinalPremium : 'Rs.1111',
            insuerImage: this.props.item.ImagePath,
            zeroDepPremium: this.props.item.Breakup.ZeroDepPremium ? this.props.item.Breakup.ZeroDepPremium : '0',
            garageNear: this.props.item.GaragesInCity + ' Garage(s) near you'
        };
        this.quoteSelection = this.quoteSelection.bind(this)
        this.nearGarageclick = this.nearGarageclick.bind(this)
        this.addToCompare = this.addToCompare.bind(this)
        this.priceBreakup = this.priceBreakup.bind(this)

    }

    quoteSelection() {
        this.props.handleQuoteSelection(this.props.item)
    }

    nearGarageclick() {
        Alert.alert('handleNearGarageclick')
    }

    addToCompare() {
        Alert.alert('addToCompare')
    }

    priceBreakup() {
        this.props.handlePriceBreakups(this.props.item)
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.planBriefCntr}>
                    <View style={styles.leftCntr_PlanBrief}>
                        <Image
                            style={styles.ImageContainer}
                            source={{ uri: this.state.insuerImage }}
                        />
                        <TouchableOpacity onPress={this.nearGarageclick}>
                            <View style={styles.buttonBlueLink}>
                                <Text style={styles.buttonBlueLinkText}>{this.state.garageNear}</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.rightCntr_PlanBrief}>
                        <TouchableOpacity onPress={this.addToCompare.bind(this)}>
                            <View style={styles.buttonBlueLink}>
                                <Text style={styles.buttonBlueLinkText}>+ Add To Compare</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.quoteSelection.bind(this)}>
                            <View style={styles.buttonPremium}>
                                <Text style={styles.buttonPremiumText}>{this.state.totalPremium}</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.priceBreakup.bind(this)}>
                            <View style={styles.buttonBlueLink}>
                                <Text style={styles.buttonBlueLinkText}>Premium Breakup</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.planAddOnCntr}>
                    <View style={styles.leftCntr_planAddOn}>
                        <Text style={styles.greyedText}> {this.state.IDVTitle}</Text>
                        <Text style={styles.blackText}> {this.state.IDVValue}</Text>
                        <Text style={styles.hintLinkText}> Minimum Possible</Text>
                    </View>
                    <View style={styles.rightCntr_planAddOn}>
                        <Text style={styles.greyedText}> Zero Depreciation</Text>
                        <Text style={styles.blackText}> {this.state.zeroDepPremium}</Text>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        backgroundColor: '#FFFFFF',
        backgroundColor: 'white',
        marginTop: 10,
        shadowColor: '#cecece',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 1,
        elevation: 1,
    },
    planBriefCntr: {
        flex: 170,
        flexDirection: 'row',
    },
    ImageContainer: {
        flex: 1,
        marginTop: 10,
        width: 70,
        height: 35,
        resizeMode: 'contain'
    },

    leftCntr_PlanBrief: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    rightCntr_PlanBrief: {
        flex: 1,
    },
    planAddOnCntr: {
        flex: 70,
        padding: 5,
        flexDirection: 'row',
        backgroundColor: 'rgba(240,242,245,1.0)',

    },
    leftCntr_planAddOn: {
        flex: 1,
    },
    rightCntr_planAddOn: {
        flex: 1,
    },

    buttonBlueLink: {
        justifyContent: 'center',
        alignItems: 'center',

    },
    buttonBlueLinkText: {
        marginTop: 5,
        marginBottom: 5,
        color: 'rgba(103,149,251,1.0)',
        fontSize: 12,
        textAlign: 'center',
    },

    buttonPremium: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 30,
        marginRight: 30,
        backgroundColor: 'rgba(222,118,80,1.0)',
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 0.5 },
        shadowOpacity: 0.8,
        shadowRadius: 0.5,
        borderRadius: 2,
    },
    buttonPremiumText: {
        marginTop: 5,
        marginBottom: 5,
        color: 'white',
        fontSize: 13,
        textAlign: 'center',
        fontWeight: '800',
    },

    greyedText: {
        marginTop: 5,
        color: '#8fa0a9',
        fontSize: 10,
        textAlign: 'center',
        fontWeight: '500',
    },

    blackText: {
        marginTop: 5,
        color: 'black',
        fontSize: 10,
        textAlign: 'center',
        fontWeight: '700',
    },
    hintLinkText: {
        marginTop: 5,
        color: '#8fa0a9',
        fontSize: 9,
        textAlign: 'center',
        fontWeight: '500',
    },
});
