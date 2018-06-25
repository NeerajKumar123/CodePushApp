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
    Dimensions,
    TouchableOpacity
} from 'react-native';

export default class DetailsCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    _handlePress() {
        Alert.alert("Alert Clicked");
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={{  height: 200, }}>
                    <Text style={{ color: '#808080', marginTop: 5, marginLeft: 5, marginRight: 5, height: 20, fontSize: 15, fontWeight: 'bold' }}>Claim Details:</Text>
                    <View style={{ backgroundColor: '#FFFFFF', height: 20, width: 335, marginTop: 5, marginLeft: 5, marginRight: 5, flexDirection: 'row', alignItems: 'center', }}>
                        <Text style={{ color: '#808080', height: 20, width: 100 }}>Name:</Text>
                        <Text style={{ color: '#808080' }}>{this.props.item.Name}</Text>
                    </View>
                    <View style={{ backgroundColor: '#FFFFFF', height: 20, width: 335, marginTop: 5, marginLeft: 5, marginRight: 5, flexDirection: 'row', alignItems: 'center', }}>
                        <Text style={{ color: '#808080', height: 20, width: 100 }}>Mobile No:</Text>
                        <Text style={{ color: '#808080' }}>{this.props.item.Mobile}</Text>
                    </View>
                    <View style={{ backgroundColor: '#FFFFFF', height: 20, width: 335, marginTop: 5, marginLeft: 5, marginRight: 5, flexDirection: 'row', alignItems: 'center', }}>
                        <Text style={{ color: '#808080', height: 20, width: 100 }}>Reg No:</Text>
                        <Text style={{ color: '#808080' }}>{this.props.item.RegistrationNo}</Text>
                    </View>
                    <View style={{ backgroundColor: '#FFFFFF', height: 20, width: 335, marginTop: 5, marginLeft: 5, marginRight: 5, flexDirection: 'row', alignItems: 'center', }}>
                        <Text style={{ color: '#808080', height: 20, width: 100 }}>Claim ID:</Text>
                        <Text style={{ color: '#808080' }}>{this.props.item.ClaimID}</Text>
                    </View>
                    <View style={{ backgroundColor: '#FFFFFF', height: 20, width: 335, marginTop: 5, marginLeft: 5, marginRight: 5, flexDirection: 'row', alignItems: 'center', }}>
                        <Text style={{ color: '#808080', height: 20, width: 100 }}>Insurer:</Text>
                        <Text style={{ color: '#808080' }}>{this.props.item.InsurerName}</Text>
                    </View>
                    <View style={{ backgroundColor: '#FFFFFF', height: 20, width: 335, marginTop: 5, marginLeft: 5, marginRight: 5, flexDirection: 'row', alignItems: 'center', }}>
                        <Text style={{ color: '#808080', height: 20, width: 100 }}>Status:</Text>
                        <Text style={{ color: '#808080' }}>{this.props.item.StatusName}</Text>
                    </View>
                </View>
                <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'space-between',alignItems:'center',padding:20,marginBottom:10 }}>
                    <TouchableOpacity style={{height: 35 }} onPress={this._handlePress}>
                        <View style={styles.buttonOrangeContainer}>
                            <Text style={styles.buttonText}>Attach Estimate Image</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{height: 35}} onPress={this._handlePress}>
                        <View style={styles.buttonBlueTypeContainer}>
                            <Text style={styles.buttonText}>Upload Damaged Car Video</Text>
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
        marginTop:10,
        flexDirection: 'column',
        width: Dimensions.get('window').width - 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,
    },
    buttonOrangeContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FF7F00',
        borderRadius: 2,
        height: 35,
        width: 280,
      },
      buttonBlueTypeContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1DA2DA',
        borderRadius: 2,
        height: 35,
        width: 280,
      },
    buttonText: {
        padding: 7,
        color: 'white'
    },
});