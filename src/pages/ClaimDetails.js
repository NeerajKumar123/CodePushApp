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
  Dimensions,
  ScrollView
} from 'react-native';


import DetailsCard from '../components/DetailsCard';
import { Actions } from 'react-native-router-flux';
import SegmentControl from 'react-native-segment-controller';

export default class ClaimDetails extends Component {
  constructor(props) {
    super(props);
    Alert.alert(this.props.selectedClaimModal.Name);
    this.state = {
      index: 0,
      content: '',
      video: { width: undefined, height: undefined, duration: undefined },
      thumbnailUrl: undefined,
      videoUrl: undefined,
    }
    this.handlePress = this.handlePress.bind(this);
  }

  componentDidMount() {

  }

  handlePress(index) {
    Alert.alert(`Selected Index is :${index}`)
    this.setState({ content: `Segment ${index + 1} selected !!!`, index});
  }
  render() {
    return (

      <View style={{ backgroundColor: '#1DA2DA',flex:1,flexDirection:'row'}}>
       <ScrollView contentContainerStyle={styles.contentContainerStyle}>
        <SegmentControl
          values={['       Video(s)         ','         Image(s)      ']}
          badges={[1, 5]}
          selectedIndex={this.state.index}
          height={50}
          width= {300}
          onTabPress={this.handlePress}
          borderRadius={5}
        />
        <View style={styles.moviePlayer}></View>
        <DetailsCard item = {this.props.selectedClaimModal}/>
      </ScrollView>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  contentContainerStyle: {
    flex: 1,
    flexDirection:'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding:10,
    backgroundColor: '#1DA2DA',
  },
  moviePlayer:{
    alignItems: 'center',
    justifyContent:'center',
    backgroundColor: 'red',
    height:180,
    marginTop:5,
    marginLeft:20,
    width: Dimensions.get('window').width - 10,
    marginRight:20,
    }
});
