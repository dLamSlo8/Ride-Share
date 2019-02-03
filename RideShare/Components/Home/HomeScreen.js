import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Header from './Header';
import SignIn from './SignIn';
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
  }
    signIn = () => {
        this.props.navigation.navigate('Feed');
    }

    render() {
        return (
            <View style={styles.main}>
                <Header />
                <SignIn signIn={this.signIn}/>
                <TouchableOpacity style={styles.signUp} underlayColor="white"><Text>Don't have an account? Sign up here!</Text></TouchableOpacity>
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
