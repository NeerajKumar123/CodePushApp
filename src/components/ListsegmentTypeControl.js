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
    ScrollView
} from 'react-native';


export default class ListsegmentTypeControl extends Component {

    constructor(props) {
        super(props);
        this.state = {
            names: [
                { 'name': 'Estimate Pending', 'id': 1 },
                { 'name': 'Estimate Approval Pending', 'id': 2 },
                { 'name': 'Approved for Repair', 'id': 3 },
                { 'name': 'Invoiced Cases', 'id': 4 },
                { 'name': 'Payment Pending', 'id': 5 },
                { 'name': 'Settled Cases', 'id': 6 }
            ]
        };
    }

    render() {
        return (

            <View style={{height:50,}}>
                <ScrollView contentContainerStyle={styles.contentContainer} horizontal={true} >
                    {
                    this.state.names.map((item, index) => (
                     <View key={item.id} style={styles.item}>
                        <Text style={{color: 'white',fontSize:10,alignSelf:'center',textAlign:'center'}} >{item.name}</Text>
                    </View>
                    ))
                    }
            </ScrollView>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    contentContainer: {
        paddingVertical: 5
    },
    item: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderColor: '#FFFFFF',
        borderWidth: .5,
        backgroundColor: '#1DA2DA',
        
    }
});
