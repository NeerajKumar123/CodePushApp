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
  TextInput,
  Button,
  Alert,
  FlatList,
  TouchableHighlight,
  ActivityIndicator
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import ClaimListCard from '../components/ClaimListCard';
import SegmentControl from 'react-native-segment-controller';

export default class ClaimList extends Component {

  constructor() {
    super();
    this.state = {
      claims: [],
      types: ['Not Shown', 'Estimate Approval Pending', 'Approved for Repair', 'Invoice Pending', 'Payment Pending', 'Settled Cases'],
      allClaims: [],
      index: 0,
      isLoadingData: true,
      hasData:false
    }
    this.handlePress = this.handlePress.bind(this);
  }

  componentWillMount() {
    this.fetchData()
  }

  onPressAction(item) {
    Actions.claimDetails({ selectedClaimModal: item })
  }

  renderClaim = ({ item }) => {
    return (
      <TouchableHighlight onPress={() => this.onPressAction(item)}>
        <ClaimListCard item={item} />
      </TouchableHighlight>
    );

  }

  fetchData = async () => {
    return fetch('http://claimapi.policybazaar.com/Claim/GetGarageClaimDetails/8/1')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({ allClaims: responseJson.Data });
        this.setState({ isLoadingData: false })
        this.handlePress(0)
      })
      .catch((error) => {
        console.error(error);
      });
  };

  handlePress(index) {
    this.setState({ content: `Segment ${index + 1} selected !!!`, index });
    var typeName = this.state.types[index];
    var filteredClaims = [];
    for (let i = 0; i < this.state.allClaims.length; i++) {
      var claimModal = this.state.allClaims[i]
      if (claimModal.ProgressStatus == typeName) {
        filteredClaims.push(claimModal);
      }
    }

    this.setState({
      claims: filteredClaims
    })

  }

  render() {
    return (
      <View style={styles.container}> {
        this.state.isLoadingData ?
          <View>
            <ActivityIndicator color='#FFFFFF' />
            <Text style={{ marginTop: 30, color: '#FFFFFF' }}> Loading Data</Text>
          </View>
          :
          this.state.claims.length ?
            <View>
              <SegmentControl
                values={this.state.types}
                badges={[]}
                selectedIndex={this.state.index}
                height={50}
                width={280}
                onTabPress={this.handlePress}
                borderRadius={5}
              />
              <FlatList style={styles.list}
                data={this.state.claims}
                keyExtractor={(item, index) => index}
                renderItem={this.renderClaim}
              />
            </View>
            :
            <View style={{flex:1,justifyContent:'flex-start',alignItems:'center'}}>
              <SegmentControl
                values={this.state.types}
                badges={[]}
                selectedIndex={this.state.index}
                height={50}
                width={280}
                onTabPress={this.handlePress}
                borderRadius={5}
              />
             <Text style={{marginTop:200, color:'#FFFFFF',marginLeft:30,marginRight:30,fontSize: 20,textAlign:'center'}} > No corresponding data. Please go back and check again.</Text>
            </View>

      }

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1DA2DA',
  },
  list: {
    flex: 1,
    backgroundColor: '#1DA2DA',
    margin: 10,
    width: 355,
  },
});
