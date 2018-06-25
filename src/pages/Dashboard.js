import React, { Component } from 'react'

import {
  StyleSheet,
  View,
  Text,
  Alert,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  Image
} from 'react-native'
import { Actions } from 'react-native-router-flux';
import Carousel from 'react-native-banner-carousel';
import GridView from 'react-native-super-grid';
const BannerWidth = Dimensions.get('window').width;
const BannerHeight = 260;
import codePush from "react-native-code-push";

const images = [
  "https://tineye.com/images/widgets/mona.jpg",
  "https://www.gstatic.com/webp/gallery3/1.sm.png",
  "https://www.gstatic.com/webp/gallery/4.sm.jpg"
];

export default class Pin extends Component {

  constructor(props) {
    super(props);
    // Taken from https://flatuicolors.com/
    this.state = {
      banners: ['Not Shown', 'Estimate Approval Pending', 'Approved for Repair', 'Invoice Pending', 'Payment Pending', 'Settled Cases'],
    };
   }

  handlePressNotication() {
    Alert.alert('Hello this clcked');
  }

  handlePressProduct(item) {
    // Alert.alert(`Selected Product is :${item.name}`)
    switch (item.name) {
      case 'TERM LIFE':
      Alert.alert(`Under Development`) 
      break
      case 'HEALTH':
      Alert.alert(`Comming Soon`)
      break
      case 'LIFE INSURANCE - INVESTMENT':
      Alert.alert(`Comming Soon`)
      break
      case 'CAR':
      Actions.carLandingPage()
      break
      case 'TWO WHEELER':
      Actions.twlandingPage()
      break
      case 'CANCER':
      Alert.alert(`Comming Soon`)
      break
      case 'MY ACCOUNT':
      Alert.alert(`Comming Soon`)
      break
      default:
      Actions.twlandingPage()
      break
    }
  }

  componentWillMount(props){
    codePush.sync({
      updateDialog: true,
      installMode: codePush.InstallMode.IMMEDIATE
  });
  }

  renderPage(image, index) {
    return (
      <View key={index}>
        <Image style={{ width: BannerWidth, height: BannerHeight }} source={{ uri: image }} resizeMode='contain' />
      </View>
    );
  }

  onButtonPress() {
    codePush.sync({
        updateDialog: true,
        installMode: codePush.InstallMode.IMMEDIATE
    });
}

  render() {
    let width = Dimensions.get('window').width;
    const items = [
      { name: 'TERM LIFE INSURANCE', code: '#1abc9c'},
      { name: 'HEALTH', code: '#2ecc71'},
      { name: 'LIFE INSURANCE - INVESTMENT', code: '#3498db'},
      { name: 'CAR', code: '#9b59b6' },
      { name: 'TRAVEL', code: '#34495e',},
      { name: 'TWO WHEELER', code: '#16a085',  },
      { name: 'CANCER', code: '#27ae60',  },
      { name: 'MY ACCOUNT', code: '#2980b9', },
    ]

    return (
      <View style={styles.MainContainer}>
        <View style={styles.BannerMainContainer}>
          <View style={styles.NavContainer}>
            <TouchableOpacity onPress={this.handlePressNotication.bind(this)}>
              <View>
                <Text></Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.BannerContainer}>
            <Carousel
              autoplay
              autoplayTimeout={5000}
              loop
              index={0}
              pageSize={BannerWidth}
            >
              {images.map((image, index) => this.renderPage(image, index))}
            </Carousel>
          </View>
        </View>
        <View style={styles.ProductListContainer}>
          <GridView
            itemDimension={115}
            items={items}
            style={styles.gridView}
            renderItem={item => (
              <TouchableOpacity onPress={this.handlePressProduct.bind(this, item)}>
                <View style={[styles.itemContainer, { backgroundColor: item.code }]}>
                  <Text style={styles.itemName}>{item.name}</Text>
                  <Text style={styles.itemCode}>{item.code}</Text>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
        {/* <View style={{backgroundColor:'white',height:40,alignSelf:'stretch', justifyContent:'flex-end'}}>
            <TouchableOpacity onPress={this.onButtonPress}>
                <Text style = {{textAlign:'center',textAlignVertical:'center',backgroundColor:'white',height:40,paddingTop:10, fontSize:15,fontWeight:'800'}}>Check Update</Text>
            </TouchableOpacity>
        </View> */}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: 'rgba(248, 248, 248, 0.8)'
  },
  NavContainer: {
    flexDirection: 'row',
    height: 50,
    alignSelf: 'stretch',
    backgroundColor: '#FFFFFF',
    opacity: 0.1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  },
  BannerMainContainer: {
    flex: 35,
    alignSelf: 'stretch',
  },
  BannerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
    backgroundColor: '#000000',
  },
  ProductListContainer: {
    flex: 65,
    alignSelf: 'stretch',
  },
  gridView: {
    flex: 1,
  },
  itemContainer: {
    justifyContent: 'flex-end',
    borderRadius: 5,
    padding: 10,
    height: 150,
  },
  itemName: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
  },
  itemCode: {
    fontWeight: '600',
    fontSize: 12,
    color: '#fff',
  },

})
