import React, { Component } from 'react';

import { AppRegistry, StyleSheet, FlatList, Text, View, Alert, TouchableHighlight } from 'react-native';
import TermQuote from '../components/TermQuote'
import TWQuote from '../components/TWQuote'
import MaterialTabs from 'react-native-material-tabs';

export default class QuotesPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 0,
      quotes: [],
    }
  }

  componentWillMount() {
    this.onTabPress(0)
  }

  onTabPress(tab) {
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
  }

  renderClaim = ({ item }) => {
    return (
      <TouchableHighlight onPress={() => this.onPressAction(item)}>
        <TWQuote item={item} />
      </TouchableHighlight>
    );
  }

  render() {
    return (
      <View style={styles.MainContainer}>
        <MaterialTabs
          items={['Comprehensive', 'Zero Dep', 'Third Party Only']}
          selectedIndex={this.state.selectedTab}
          onChange={this.onTabPress.bind(this)}
          barColor="rgba(84, 110, 122, 1.0)"
          indicatorColor="#1dce6c"
          activeTextColor="#FFF"
          textStyle={styles.TextStyle}
        />
        <FlatList
          data={this.state.quotes}
          keyExtractor={(item, index) => index}
          renderItem={this.renderClaim}
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
    backgroundColor: 'rgba(248, 248, 248, 0.8)'
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
