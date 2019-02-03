import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Header from './Header';
import SignIn from './SignIn';
import ForgotPass from './ForgotPassword';
import firebase from 'react-native-firebase';
export default class HomeScreen extends Component {
  static navigationOptions = {
    headerStyle: {
      display: "none"
    }
  }
  constructor(props) {
      super(props);
      this.state = {
          signedIn: false
      };
      this.ref = firebase.firestore().collection("Rides");
  }
    signIn = () => {

        
        this.props.navigation.navigate('Feed');
    }

    render() {
        return (
            <View style={styles.main}>
                <SignIn signIn={this.signIn}/>
                <TouchableOpacity style={styles.signUp} underlayColor="white" onPress={() => this.props.navigation.navigate('Sign')}><Text>Don't have an account? Sign up here!</Text></TouchableOpacity>
                <TouchableOpacity style={styles.signUp} underlayColor="white" onPress={() => this.props.navigation.navigate('ForgotPass')}><Text>Forgot Password? Click here!</Text></TouchableOpacity>
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
    },
    signUp: {
        marginTop: 30,
        fontWeight: "bold"

    }
});

AppRegistry.registerComponent('HomeScreen', () => HomeScreen);
