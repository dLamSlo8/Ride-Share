/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Header from './Components/Home/Header';
import SignIn from './Components/Home/SignIn';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './Components/Home/HomeScreen';
import MakePost from './Components/MainFeed/MakePost';
import Main from './Components/MainFeed/Main';
import SignUp from './Components/Home/SignUp';
import ForgotPassword from './Components/Home/ForgotPassword';
export default class App extends Component {

  render() {
    return (
      <AppContainer />
    );
  }
}

const AppStackNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen},
  Post: {
    screen: MakePost},
  Feed: {
    screen: Main},
  Sign: {
    screen: SignUp},
  ForgotPass: {
    screen: ForgotPassword}

},
{
  initialRouteName: "Home"
}   );

const AppContainer = createAppContainer(AppStackNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
