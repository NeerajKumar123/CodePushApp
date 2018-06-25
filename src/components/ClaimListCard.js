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
} from 'react-native';


export default class ClaimListCard extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
      }
    
    render() {
        return (
            <View style={styles.container}>
                <View style={{ backgroundColor: '#FFFFFF', height: 20, width: 335, marginTop: 5, marginLeft: 5, marginRight: 5, flexDirection: 'row', alignItems: 'center', }}>
                    <Text style={{ color: '#808080',height: 20, width: 100 }}>Name:</Text>
                    <Text style={{ color: '#808080' }}>{this.props.item.Name}</Text>
                </View>
                <View style={{ backgroundColor: '#FFFFFF', height: 20, width: 335, marginTop: 5, marginLeft: 5, marginRight: 5, flexDirection: 'row', alignItems: 'center', }}>
                    <Text style={{ color: '#808080' ,height: 20, width: 100 }}>Mobile No:</Text>
                    <Text style={{ color: '#808080' }}>{this.props.item.Mobile}</Text>
                </View>
                <View style={{ backgroundColor: '#FFFFFF', height: 20, width: 335, marginTop: 5, marginLeft: 5, marginRight: 5, flexDirection: 'row', alignItems: 'center', }}>
                    <Text style={{ color: '#808080',height: 20, width: 100  }}>Reg No:</Text>
                    <Text style={{ color: '#808080' }}>{this.props.item.RegistrationNo}</Text>
                </View>
                <View style={{ backgroundColor: '#FFFFFF', height: 20, width: 335, marginTop: 5, marginLeft: 5, marginRight: 5, flexDirection: 'row', alignItems: 'center', }}>
                    <Text style={{ color: '#808080' ,height: 20, width: 100 }}>Claim ID:</Text>
                    <Text style={{ color: '#808080' }}>{this.props.item.ClaimID}</Text>
                </View>
                <View style={{ backgroundColor: '#FFFFFF', height: 20, width: 335, marginTop: 5, marginLeft: 5, marginRight: 5, flexDirection: 'row', alignItems: 'center', }}>
                    <Text style={{ color: '#808080',height: 20, width: 100  }}>Insurer:</Text>
                    <Text style={{ color: '#808080' }}>{this.props.item.InsurerName}</Text>
                </View>
                <View style={{ backgroundColor: '#FFFFFF', height: 20, width: 335, marginTop: 5, marginLeft: 5, marginRight: 5, flexDirection: 'row', alignItems: 'center', }}>
                    <Text style={{ color: '#808080',height: 20, width: 100  }}>Status:</Text>
                    <Text style={{ color: '#808080' }}>{this.props.item.StatusName}</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:'column',
        width: 345,
        height: 155,
        margin: 5,
        justifyContent: 'center',
        alignItems: 'flex-start',
        backgroundColor: '#FFFFFF',
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,
    },
});
