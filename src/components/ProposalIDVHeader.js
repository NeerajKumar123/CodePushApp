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



export default class ProposalIDVHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            insuerName: this.props.insuerName,
            IDVTitle: 'IDV',
            IDVValue: this.props.IDVValue,
            totalPremium: this.props.planPremium,
            insuerImage: this.props.insuerImage,
            policyWording: this.props.policyWordingUrl,
            isPolicyWording: this.props.policyWordingUrl ? true : false,
        };
    }

    policyWordingClicked() {
        Alert.alert('policyWordingClicked')
        this.props.policyWordingClicked('wording url')
    }

    render() {
        return (
            <View style={styles.mainContainer}>
                <View style={styles.top}>
                    <View style={styles.left}>
                        <Image
                            style={styles.ImageContainer}
                            source={{ uri: this.state.insuerImage }} />
                    </View>
                    <View style={styles.middle}>
                        <Text style = {styles.greyedText}> {this.state.IDVTitle}</Text>
                        <Text> {this.state.IDVValue}</Text>
                    </View>
                    <View style={styles.right}>
                        <Text style = {styles.premiumOrange}> Rs. {this.state.totalPremium}</Text>
                    </View>
                </View>
                <View style={styles.bottom}>
                    <TouchableOpacity onPress={this.policyWordingClicked.bind(this)}>
                        <View style={styles.buttonBlueLink}>
                            <Text style={styles.buttonBlueLinkText}> Download policy Wording</Text>
                        </View>
                    </TouchableOpacity> </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        flexDirection: 'column',
        height: 80,
        justifyContent: 'center',
        alignSelf: 'stretch',
        backgroundColor: 'white',
    },
    top: {
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'center',
        alignSelf: 'stretch',
        backgroundColor: 'white',
    },
    bottom: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent:'center',
        alignItems:'flex-end',
    },

    ImageContainer: {
        width: 70,
        height: 35,
        backgroundColor: '#cecece',
        resizeMode: 'contain',

    },
    left: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    middle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    right: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        
    },
    buttonBlueLink: {
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: .5,
        borderRadius: 20,
        color: 'rgba(247,249,250,1.0)',
        width:110,
        borderColor: '#8fa0a9',
        marginRight:20
        },
    buttonBlueLinkText: {
        marginTop: 4,
        marginBottom: 4,
        color: 'rgba(103,149,251,1.0)',
        fontSize: 7,
        fontWeight: '500',
        textAlign: 'center',
    },
    premiumOrange:{
        color:'rgba(222,118,80,1.0)',
        fontSize:13,
        fontWeight:"800"
    },
    greyedText: {
        marginTop: 5,
        color: '#8fa0a9',
        fontSize: 10,
        textAlign: 'center',
        fontWeight: '500',
    },
});
