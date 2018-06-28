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
    Picker,
    TouchableOpacity
} from 'react-native';



export default class PickerComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: this.props.pickerTitle,
            options: this.props.options,
            selectedItemIndex:0,
            selectedValue:2,
        };
    }

    renderPickerItems() {
        return this.state.options.map((item) => {
            return (
                <Picker.Item
                label={item.key}
                value={item.value}
                key={item.key || item.key}
                color='black'
            />
            );
        });
    }


    doneClicked() {
        //Prepare Selected Item
        this.props.doneClickedOnpicker(this.state.selectedItemIndex)
    }

    cancelled() {
        this.props.cancelClickedOnPicker()
    }

    render() {
        return (
            <Picker
            selectedValue={this.state.selectedValue}
            style={{ width: 300 }}
            onValueChange={(itemValue, itemIndex) => this.setState({selectedItemIndex: itemIndex , selectedValue:itemValue})}>
            {this.renderPickerItems()}
        </Picker>
        );
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        justifyContent: 'flex-end',
        alignItems: 'center',
        height: 251,
        backgroundColor:'transparent'
    },
    buttonsContainer: {
        height: 40,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignSelf: 'stretch',
        // backgroundColor: 'rgba(247,252,255,1.0)',
        backgroundColor: '#cecece',

    },
    cancelButtonText: {
        flex: 1,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        color: 'rgba(92,132,240,1.0)',
        fontWeight: '500',
        textAlign: 'center',
        textAlignVertical: 'center',
    },
    doneButtonText: {
        flex: 1,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        color: 'rgba(92,132,240,1.0)',
        fontWeight: '500',
        textAlign: 'center',
        textAlignVertical: 'center',
    },
    titleText: {
        width:200,
         height:40,
         paddingTop:10,
        justifyContent: 'center',
        alignItems: 'center',
        color: 'black',
        fontWeight: '700',
        textAlign: 'center',
        textAlignVertical: 'center',
    },
});