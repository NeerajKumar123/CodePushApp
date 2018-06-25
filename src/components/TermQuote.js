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



export default class ClaimListCard extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.topContainer}>
                    <View style={styles.LeftTopContainer}>
                        <Image
                            style={styles.ImageContainer}
                            source={require('../images/if_youtube_14726.png')}
                        />
                        <Text style={styles.PlanNameContainer}> Left Top Container Left Top Container</Text>
                    </View>
                    <View style={styles.MiddleTopContainer}>
                        <View style={styles.TopMiddleTopContainer}>
                            <View style={{ backgroundColor: '#fff', flex: 1, margin: 1, marginTop: 1 }}>
                                <Text style={{ textAlign: 'center', fontSize: 11, fontWeight: '800', color: '#363535', }}> 7 Lacs  </Text>
                                <Text style={{ textAlign: 'center', fontSize: 11, fontWeight: '600', color: '#363535', marginTop: 5 }}>Total Payout</Text>
                            </View >
                            <View style={{ flex: 1, margin: 1, marginTop: 1 }}>
                                <Text style={{ textAlign: 'center', fontSize: 11, fontWeight: '800', color: '#363535', }}> 58 Years  </Text>
                                <Text style={{ textAlign: 'center', fontSize: 11, fontWeight: '600', color: '#363535', marginTop: 5 }}>Coverage Upto</Text>
                            </View >
                        </View >
                        <View style={styles.BottomMiddleTopContainer}>
                            <View style={styles.TopMiddleTopContainer}>
                                <View style={{ backgroundColor: '#fff', flex: 1, margin: 1, marginTop: 1 }}>
                                    <Text style={{ textAlign: 'center', fontSize: 11, fontWeight: '800', color: '#363535', }}> 7 Lacs  </Text>
                                    <Text style={{ textAlign: 'center', fontSize: 11, fontWeight: '600', color: '#363535', marginTop: 5 }}>Total Payout</Text>
                                </View >
                                <View style={{ flex: 1, margin: 1, marginTop: 1 }}>
                                    <Text style={{ textAlign: 'center', fontSize: 11, fontWeight: '800', color: '#363535', }}> 58 Years  </Text>
                                    <Text style={{ textAlign: 'center', fontSize: 11, fontWeight: '600', color: '#363535', marginTop: 5 }}>Coverage Upto</Text>
                                </View >
                            </View >                        </View >
                    </View>
                    <View style={styles.RightTopContainer}>
                        <Text style={{ textAlign: 'center', fontSize: 14, color: 'rgba(221, 118, 80, 1.0)', textAlign: 'right', marginTop: 10 }}> 45545 <Text style={{ textAlign: 'center', fontSize: 11, color: '#000', textAlign: 'left' }}> /month  </Text> </Text>
                        <View style={{ flexDirection: 'row', marginTop: 5 }}>
                            <Image
                                style={styles.ChangePrrmImageContainer}
                                source={require('../images/if_youtube_14726.png')}
                            />
                            <Text style={{ textAlign: 'center', fontSize: 10, fontWeight: '700', color: 'rgba(98, 166, 251, 1.0)' }}> 6272 anually  </Text>
                        </View>
                        <TouchableOpacity onPress={this._handlePress}>
                            <View style={{ backgroundColor: '#FF7F00',borderRadius:3}}>
                                <Text style={styles.buttonText}>Get Details</Text>
                            </View>
                        </TouchableOpacity>

                    </View>
                </View>
                <View style={styles.middleContainer}>
                    <View style={styles.LeftMiddleContainer}> <Text style={{ textAlign: 'left', fontWeight: '600' }}> AddOn's</Text> </View>
                    <View style={styles.RightMiddleContainer}> <Text style={{ textAlign: 'right', fontWeight: '600', color: 'rgba(98, 166, 251, 1.0)' }}> View More</Text></View>
                </View>
                <View style={styles.bottomContainer}>
                    <View style={styles.TopMiddleTopContainer}>
                            <View style={{flex: 1,flexDirection:'row'}}>
                            <Image
                                style={styles.ChangePrrmImageContainer}
                                source={require('../images/if_youtube_14726.png')}
                            />
                            <Text style={{ textAlign: 'center', fontSize: 10, fontWeight: '700', color: 'rgba(98, 166, 251, 1.0)' }}> 6272 anually  </Text>
                            </View >
                            <View style={{flex: 1,flexDirection:'row'}}>
                            <Image
                                style={styles.ChangePrrmImageContainer}
                                source={require('../images/if_youtube_14726.png')}
                            />
                            <Text style={{ textAlign: 'center', fontSize: 10, fontWeight: '700', color: 'rgba(98, 166, 251, 1.0)' }}> 6272 anually  </Text>
                            </View >
                        </View >
                </View>

            </View >
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        margin: 5,
        justifyContent: 'center',
        alignItems: 'flex-start',
        backgroundColor: '#FFFFFF',
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        borderRadius: 5,
        elevation: 1,
    },
    buttonText: {
        padding: 7,
        color: 'white',
        fontSize:10,
        fontWeight:'bold'
      },
    topContainer: {
        flex: 1,
        flexDirection: 'row',
        alignSelf: 'stretch',
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    LeftTopContainer: {
        flex: 28,
        alignSelf: 'stretch',
        justifyContent: 'center',
        alignItems: 'center'
    },
    ImageContainer: {
        flex: 1,
        width: 70,
        height: 40,
        marginTop: 10,
    },
    ChangePrrmImageContainer: {
        width: 10,
        height: 10,
    },
    PlanNameContainer: {
        marginLeft: 5,
        marginRight: 5,
        marginBottom: 10,
        marginTop: 10,
        textAlign: 'center',
        color: '#363535',
        fontSize: 10,
        fontWeight: '700'
    },

    MiddleTopContainer: {
        flex: 44,
        alignSelf: 'stretch',

        justifyContent: 'center',
        alignItems: 'center'
    },
    TopMiddleTopContainer: {
        flex: 1,
        flexDirection: 'row',
        paddingTop: 10,
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
    },
    BottomMiddleTopContainer: {
        flex: 1,
        alignSelf: 'stretch',
        justifyContent: 'center',
        alignItems: 'center'
    },
    RightTopContainer: {
        flex: 28,
        justifyContent: 'space-around',
        // backgroundColor: 'green',
        alignItems: 'center',
        alignSelf: 'stretch',
        padding: 10
    },
    middleContainer: {
        flex: 1,
        paddingTop: 10,
        paddingBottom: 10,
        flexDirection: 'row',
        alignSelf: 'stretch',
        justifyContent: 'center',
        alignItems: 'center'
    },
    LeftMiddleContainer: {
        flex: 1,
        flexDirection: 'row',
        alignSelf: 'stretch',
        // backgroundColor:'green',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    RightMiddleContainer: {
        flex: 1,
        paddingRight: 10,
        flexDirection: 'row',
        alignSelf: 'stretch',
        // backgroundColor:'orange',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    bottomContainer: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: 'orange',
        justifyContent: 'center',
        alignItems: 'center'
    }
});
