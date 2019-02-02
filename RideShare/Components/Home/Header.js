import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet } from 'react-native';
export  default class Header extends Component {
  render() {
    return (
      <View>
          <Text style={styles.header}>Ride Share</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    header: {
        
        fontSize: 50,
        color: 'white',
        textAlign: 'center'
    }
});

AppRegistry.registerComponent("Header", () => Header);