import React, { Component } from 'react';

import { AppRegistry, StyleSheet, FlatList, Text, View, Alert, TouchableHighlight } from 'react-native';
import CarQuoteCard from '../components/CarQuoteCard'
import { Actions } from 'react-native-router-flux';

export default class CarQuotes extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 0,
      quotes: this.props.quotes
    }
  }

  componentWillMount() {
  }
  thridpartySelected(){
    this.setState({ selectedTab: tab });
    var filteredQuotes = [];
    for (let i = 0; i < this.props.QuotesData.length; i++) {
      var quote = this.props.QuotesData[i]
      if (quote.PlanType == tab + 1) {
        filteredQuotes.push(quote);
      }
    }
    this.setState({
      quotes: filteredQuotes
    })

    // this.handleQuoteSelection = this.handleQuoteSelection.bind(this)
  }

  handleQuoteSelection(selectedItem){
    console.log(selectedItem.ImagePath)
    Actions.proposalStep1({selectedItem:selectedItem})
  }

  handlePriceBreakups(selectedItem){
    console.log(selectedItem.ImagePath)
    Actions.priceBreakup({selectedItem:selectedItem})
  }


  getQuotesbyEnquiryID() {
    var currentTimeStamp = '1528357654023'
    var completeURL = 'http://ci.policybazaar.com/MVCController/quote/getreceivedquotes?enquiryId=' + this.props.enquiryID + '&planId=&cs=&_=' + currentTimeStamp
    return fetch(completeURL)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({quotes:responseJson})
      })
      .catch((error) => {
        console.error(error);
      });
  }

  renderQuote = ({ item }) => {
    return (
      <CarQuoteCard item={item} 
      handleQuoteSelection={this.handleQuoteSelection}
      handlePriceBreakups={this.handlePriceBreakups}
      />
    );
  }

  render() {
    return (
      <View style={styles.MainContainer}>
        <FlatList
          data={this.state.quotes}
          keyExtractor={(item, index) => index}
          renderItem={this.renderQuote}
        />
      </View>

    );
  }
}

const styles = StyleSheet.create({

  MainContainer: {
    // Setting up View inside content in Vertically center.
    justifyContent: 'center',
    flex: 1,
    margin: 0,
    padding:5,
     backgroundColor: 'rgba(247,252,255,1.0)',
    // backgroundColor: 'white'
  },

  Tab: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    alignSelf: 'stretch',

  },
  TextStyle: {
    fontSize: 10,
    fontWeight: "500",
    padding: 2,
  },

  TabbedContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    height: 50,
    backgroundColor: 'rgba(84, 110, 122, 1.0)',
    alignSelf: 'stretch'
  },

  List: {
    // Setting up View inside content in Vertically center.
    justifyContent: 'center',
    flex: 1,
    margin: 10,
    backgroundColor: 'rgba(248, 248, 248, 0.8)'

  },


  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },

});
