import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet } from 'react-native';
import Header from './Header';
import SignIn from './SignIn';
export default class HomeScreen extends Component {
  static navigationOptions = {
    headerStyle: {
      display: "none"
    }
  }
    render() {
        return (
            <View style={styles.main}>
                <Header />
                <SignIn />
            </View>
        );
    }
}


const styles = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "skyblue"
    }
});

AppRegistry.registerComponent('HomeScreen', () => HomeScreen);
