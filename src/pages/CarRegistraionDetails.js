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
    ActivityIndicator,
    Picker
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import PBTextInput from '../components/PBTextInput';
import ToggleSwitch from 'toggle-switch-react-native';
import { Thumbnail } from 'native-base';
import DateTimePicker from 'react-native-modal-datetime-picker';
import RNPickerSelect from 'react-native-picker-select';
import PickerComponent from '../components/PickerComponent';

const defaultMaxLength = 100;
var activeInputIndex = 0;
export default class CarRegistraionDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // List of All Items
            RTOsList: [],
            RegYearsList: [],
            MakeModalList: [],
            FuelTypesList: [],
            VariantsList: [],
            ExistingInsurersList: [],

            pickerOptions: [],

            text: '',
            productType: 'motor',
            carDetails: this.props.carDetails,
            enquiryId: 61521820,
            fields: [],
            loading: false,

            // Active Data (Objects)
            SelectedRTOModel: {},
            SelectedMakeModal: {},
            SelectedFuelType: '',
            SelectedVariant: {},
            SelectedExistingInsurer: {},
            SelectedPolicyExpDate: new Date(),

            // Strings
            SelectedRegYear: '',

            // boolean
            isClaimMadeLastYear: true,
            isDateTimePickerVisible: false,
            isPickerLoading: false,

            pickerTitle: '',
            uniqueValue: 1
        };

        this.getRTO = this.getRTO.bind(this)
        this.getRegYear = this.getRegYear.bind(this)
        this.getQuotesClicked = this.getQuotesClicked.bind(this);
        this.getVariantForMakeModal = this.getVariantForMakeModal.bind(this)
        this.getQuotes = this.getQuotes.bind(this);
        this.doneClickedOnpicker = this.doneClickedOnpicker.bind(this)
        this.cancelClickedOnPicker = this.cancelClickedOnPicker.bind(this)

    }

    componentWillMount() {
        this.getRTO()
        this.getRegYear()
        this.getMakeModalObject()
        this.getExistingInsurer()
        this.setState({ loading: false })
    }

    forceRemount(){
        this.setState({
            uniqueValue : this.state.uniqueValue + 1
        })
      }

    getQuotesClicked() {
        this.setState({
            loading: true
        })
        this.getQuotes()
    }

    getRTO() {
        var customData = require('../OtherResources/RegistraionRegion.json');
        this.setState({
            RTOsList: customData
        })
    }

    getRegYear() {
        var temp = []
        for (var i = 2018; i > 1997; i--) {
            temp.push({
                key: i.toString(),
                value: i.toString()
            });
        }
        this.setState({
            RegYearsList: temp
        })
    }

    getMakeModalObject() {
        var customData = require('../OtherResources/MakeModel.json');
        this.setState({
            MakeModalList: customData
        })
    }

    getVariantForMakeModal() {
        var customData = require('../OtherResources/Variant.json');
        var filteredVariants = []
        customData.map((userData) => {
            if (userData.ModelId == this.state.SelectedMakeModal.ModelId) {
                filteredVariants.push(userData)
            }
        });
        this.setState({
            VariantsList: filteredVariants
        })
    }

    getExistingInsurer() {
        var customData = require('../OtherResources/previousInsurer.json');
        this.setState({
            ExistingInsurersList: customData
        })
    }

    chooseExpiryDate() {
        this._showDateTimePicker()
    }

    setDate(newDate) {
        this.setState({ chosenDate: newDate })
    }

    _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });

    _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

    _handleDatePicked = (date) => {
        this._hideDateTimePicker();
        //Alert.alert('A date has been picked: ', date);
    };

    showPicker() {
        this.prepareOptionsForSelectorsAndPickers()
        this.setState({
            isPickerLoading: true
        })
    }

    prepareOptionsForSelectorsAndPickers() {
        switch (activeInputIndex) {
            case 1:
                var tempList = []
                this.state.RTOsList.map((data) => {
                    tempList.push({
                        key: data.Name,
                        value: data.RegionCode
                    });
                })

                this.setState({
                    pickerOptions: tempList,
                    pickerTitle: 'Select RTO'
                })
                break

            case 2:
                var tempList = []
                this.state.RegYearsList.map((data) => {
                    tempList.push({
                        key: data.key,
                        value: data.value
                    });
                })

                this.setState({
                    pickerOptions: tempList,
                    pickerTitle: 'Select Registration Year'

                })
                break

            case 3:
                var tempList = []
                this.state.MakeModalList.map((data) => {
                    tempList.push({
                        key: data.ModelName,
                        value: data.ModelId
                    });
                })

                this.setState({
                    pickerOptions: tempList,
                    pickerTitle: 'Select Make Modal'
                })
                break

            case 4:
                var tempList = []
                this.state.FuelTypesList.map((data) => {
                    tempList.push({
                        key: data.FuelName,
                        value: data.FuelTypeId
                    });
                })

                this.setState({
                    pickerOptions: tempList,
                    pickerTitle: 'Select Fuel Type'
                })
                break

            case 5:
                var tempList = []
                this.state.VariantsList.map((data) => {
                    tempList.push({
                        key: data.VariantName,
                        value: data.VariantId
                    });
                })

                this.setState({
                    pickerOptions: tempList,
                    pickerTitle: 'Select Variant'
                })
                break

            case 6:
                var tempList = []
                this.state.ExistingInsurersList.map((data) => {
                    tempList.push({
                        key: data.SupplierName,
                        value: data.SupplierId
                    });
                })

                this.setState({
                    pickerOptions: tempList,
                    pickerTitle: 'Select Previous Insurer'
                })
                break

        }
    }

    saveEnquiry() {
        var completeURL = 'http://ci.policybazaar.com/MVCController/prequote/SaveEnquiryDetails'
        fetch(completeURL, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                UtmSource: '',
                UtmTerm: '',
                VisitorToken: '',
                LandingPageName: 'carPreQuote',
                LeadSourceID: 10,
                LeadSource: 'PBMobileAPP',
                MakeId: '',
                ModelId: '',
                VariantId: 'http://ci.policybazaar.com/?utm_content=home_v3',
                PolicyType: '',
                RegisteredCityId: '',
                CityId: '',
                StateId: '',
                RegisteredStateId: 'http://ci.policybazaar.com/?utm_content=home_v3',
                RegistrationNumber: '',
                RegistrationCode: '',
                FuelTypeId: '',
                VehicleOwnedById: '',
                RegistrationDate: 'http://ci.policybazaar.com/?utm_content=home_v3',
                RegistrationRTOCode: '',
                ManufacturingDate: '',
                CustTrackId: '',
                VisitID: '',
                isPolicyBreakCase: 'http://ci.policybazaar.com/?utm_content=home_v3',
                EnquiryId: '',
                RegistrationYear: '',
                ReferalUrl: '',
                IsCNGFitted: '',
                TypeOfCNGKit: 'http://ci.policybazaar.com/?utm_content=home_v3',
                CNGAmount: '',
                PrevInsurerId: '',
                ChassisNumber: '',
                EngineNumber: '',
                InsurerName: 'http://ci.policybazaar.com/?utm_content=home_v3',
                IsClaimsMadeInExpPolicy: '',
                NotClaimedSince: '',
                ModelName: '',
                VariantName: '',
                MakeName: 'http://ci.policybazaar.com/?utm_content=home_v3',
                PreviousPolicyExpiryDate: '',
                displayPreviousPolicyExpiryDate: '',
                CustDeviceHeight: '',
                CustDeviceWidth: '',
                ReferrerUrl: 'http://ci.policybazaar.com/?utm_content=home_v3',
                FuelName: '',
            }),
        }).then((response) => response.json())
            .then((responseJson) => {
                this.state.VisitID = responseJson
                Alert.alert('Visit ID Created:' + this.state.VisitID.toString())
            })
            .catch((error) => {
                console.error(error);
            });
    }


    getQuotes() {
        var currentTimeStamp = '1528441314926'
        var completeURL = 'http://ci.policybazaar.com/MVCController/quote/getreceivedquotes?enquiryId=' + this.state.enquiryId + '&planId=&cs=&_=' + currentTimeStamp
        return fetch(completeURL)
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({ loading: false })
                Actions.carQuotes({ quotes: responseJson })
            })
            .catch((error) => {
                console.error(error);
            });
    }

    doneClickedOnpicker(selectedIndex) {
        Alert.alert('selectedIndex : ' + selectedIndex)
        switch (activeInputIndex) {
            case 1:
                this.setState({
                    SelectedRTOModel: this.state.RTOsList[selectedIndex]
                })
                this.forceRemount()
                break
            case 2:
                this.setState({
                    SelectedRegYear: this.state.RegYearsList[selectedIndex]
                })
                break
            case 3:
                this.setState({
                    SelectedMakeModal: this.state.MakeModalList[selectedIndex]
                })
                setTimeout(() => {
                    this.getVariantForMakeModal();
                  }, 3000);
                break
            case 4:
                this.setState({
                    SelectedFuelType: this.state.FuelTypesList[selectedIndex]
                })
                break
            case 5:
                this.setState({
                    SelectedVariant: this.state.VariantsList[selectedIndex]
                })
                break
            case 6:
                this.setState({
                    SelectedExistingInsurer: this.state.ExistingInsurersList[selectedIndex]
                })
                break
            default:
                break
        }
        this.setState({ isPickerLoading: false })
    }

    cancelClickedOnPicker() {
        Alert.alert('cancelClickedOnPicker Callback')
        this.setState({ isPickerLoading: false })
    }

    handleDropDownClick(item) {
        activeInputIndex = item.fieldID;
        switch (item.fieldID) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
                this.showPicker()
                break
            case 7:
                this.chooseExpiryDate()
                break
            default:
                break
        }
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
        fields = [
            // { fieldID: 1, name: 'Registration Area Code', errorCode: 'Enter valid Registration Area Code', maxLenght: defaultMaxLength, validRegex: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, currentValue: this.state.carDetails.RtoCode, isDropDown: true },
            // { fieldID: 2, name: 'Registration Year', errorCode: 'Select registration Year', maxLenght: defaultMaxLength, validRegex: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, currentValue: this.state.carDetails.RegistrationYear, isDropDown: true },
            // { fieldID: 3, name: 'Make Model', errorCode: 'Select a valid Model', maxLenght: defaultMaxLength, validRegex: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, currentValue: this.state.carDetails.Make + this.state.carDetails.Model, isDropDown: true },
            // { fieldID: 4, name: 'Fuel Type', errorCode: 'Select a valid fuel type', maxLenght: defaultMaxLength, validRegex: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, currentValue: this.state.carDetails.FuelType, isDropDown: true },
            // { fieldID: 5, name: 'Car Variant', errorCode: 'Select a valid Variant', maxLenght: defaultMaxLength, validRegex: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, currentValue: this.state.carDetails.RtoCode, isDropDown: true },
            // { fieldID: 6, name: 'Existing Insurer', errorCode: 'Select Existing Insurer if any', maxLenght: defaultMaxLength, validRegex: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, currentValue: this.state.carDetails.RtoCode, isDropDown: true },
            // { fieldID: 7, name: 'Policy Expiry Date', errorCode: 'Enter Policy Expiry Date', maxLenght: defaultMaxLength, validRegex: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, currentValue: this.state.carDetails.RtoCode, isDropDown: true },
            // { fieldID: 8, name: 'Is Claim made last year?', errorCode: '', maxLenght: defaultMaxLength, validRegex: '', currentValue: '', isSwitch: true },

            { fieldID: 1, name: 'Registration Area Code', errorCode: 'Enter valid Registration Area Code', maxLenght: defaultMaxLength, validRegex: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, currentValue: this.state.SelectedRTOModel.Name, isDropDown: true },
            { fieldID: 2, name: 'Registration Year', errorCode: 'Select registration Year', maxLenght: defaultMaxLength, validRegex: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, currentValue: this.state.SelectedRegYear, isDropDown: true },
            { fieldID: 3, name: 'Make Model', errorCode: 'Select a valid Model', maxLenght: defaultMaxLength, validRegex: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, currentValue: this.state.SelectedMakeModal.ModelName, isDropDown: true },
            { fieldID: 4, name: 'Fuel Type', errorCode: 'Select a valid fuel type', maxLenght: defaultMaxLength, validRegex: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, currentValue: this.state.SelectedFuelType.FuelType, isDropDown: true },
            { fieldID: 5, name: 'Car Variant', errorCode: 'Select a valid Variant', maxLenght: defaultMaxLength, validRegex: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, currentValue: this.state.SelectedVariant.VariantName, isDropDown: true },
            { fieldID: 6, name: 'Existing Insurer', errorCode: 'Select Existing Insurer if any', maxLenght: defaultMaxLength, validRegex: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, currentValue: this.state.SelectedExistingInsurer.SupplierName, isDropDown: true },
            { fieldID: 7, name: 'Policy Expiry Date', errorCode: 'Enter Policy Expiry Date', maxLenght: defaultMaxLength, validRegex: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, currentValue: this.state.SelectedPolicyExpDate, isDropDown: true },
            { fieldID: 8, name: 'Is Claim made last year?', errorCode: '', maxLenght: defaultMaxLength, validRegex: '', currentValue: this.isClaimMadeLastYear, isSwitch: true },

        ]

        let cellView = fields.map((item, key) => {
            return <View style={styles.CellContainer}>
                <Image
                    style={styles.ImageContainer}
                    source={require('../images/home.png')}
                />
                <TextInput
                    style={styles.inputField}
                    maxLength={item.maxLenght}
                    keyboardType='default'
                    textAlign='left'
                    onChangeText={(text) => this.setState({ text })}
                    onEndEditing={(text) => this.validate({ text }, { item })}
                    placeholder={item.name}
                    defaultValue=''
                />
                {item.isDropDown &&
                    <TouchableOpacity onPress={() => this.handleDropDownClick(item)}>
                        <Image
                            style={styles.ImageContainer}
                            source={require('../images/arrow_down.png')}
                        />
                    </TouchableOpacity>}
                {item.isSwitch &&
                    <ToggleSwitch
                        isOn={item.currentValue}
                        onColor='rgba(97,158,212,1.0)'
                        offColor='lightgray'
                        label=''
                        labelStyle={{ color: 'black', fontWeight: '900', }}
                        size='small'
                        onToggle={(isOn) => console.log('changed to : ', isOn)}
                    />
                }
            </View>
        });
        return (
            <View style={styles.container} key={this.state.uniqueValue}>
                <KeyboardAvoidingView style={{ flex: 1 }}
                    behavior='padding'
                    keyboardVerticalOffset={64}>
                    <ScrollView>
                        <View style={{ flex: 1, padding: 4, backgroundColor: 'rgba(248, 248, 248, 0.8)' }}>
                            {cellView}
                        </View>
                    </ScrollView>
                </KeyboardAvoidingView>
                {this.state.isPickerLoading &&
                    <PickerComponent
                        pickerTitle={this.state.pickerTitle}
                        options={this.state.pickerOptions}
                        doneClickedOnpicker={this.doneClickedOnpicker}
                        cancelClickedOnPicker={this.cancelClickedOnPicker}
                    />
                }
                <TouchableOpacity onPress={this.getQuotesClicked}>
                    <View style={styles.ButtonContainer}>
                        <Text style={styles.ButtonText}>GET QUOTES</Text>
                    </View>
                </TouchableOpacity>
                {this.state.loading &&
                    <View style={styles.loading}>
                        <ActivityIndicator size='large' />
                    </View>
                }
                <DateTimePicker
                    isVisible={this.state.isDateTimePickerVisible}
                    onConfirm={this._handleDatePicked}
                    onCancel={this._hideDateTimePicker}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        backgroundColor: 'white'
    },
    CellContainer: {
        flex: 1,
        flexDirection: 'row',
        height: 55,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10,
        justifyContent: 'flex-start',
        alignItems: 'center',
        alignSelf: 'stretch',
        backgroundColor: 'white',
        paddingRight: 10,
        paddingLeft: 10,
    },

    ButtonContainer: {
        width: 375,
        height: 50,
        flexDirection: 'row',
        backgroundColor: 'rgba(222,118,80,1.0)',
        justifyContent: 'center',
        alignItems: 'center',
        bottom: 0,
        paddingLeft: 10,
        paddingRight: 10
    },
    ButtonText: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        textAlignVertical: 'center',
    },
    inputField: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        textAlign: 'left',
        marginLeft: 10,
        marginRight: 10,
        marginTop: 5,
        marginBottom: 5,
    },
    ImageContainer: {
        width: 30,
        height: 30,
        resizeMode: 'center'
    },
    loading: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputIOS: {
        fontSize: 16,
        paddingTop: 13,
        paddingHorizontal: 10,
        paddingBottom: 12,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 4,
        backgroundColor: 'white',
        color: 'black',
    },
});
