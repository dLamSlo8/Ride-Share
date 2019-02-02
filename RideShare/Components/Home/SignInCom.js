import React, { Component } from 'react';
import { AppRegistry, TextInput, View, StyleSheet } from 'react-native';

export default class SignInCom extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        };
    }
    render() {
        return (
        <View>
        <TextInput
         placeholder="Email"
         onChangeText={(text) => this.setState({email: text})}
          />
        <TextInput
         placeholder="Password"
         onChangeText={(text) => this.setState({password: text})}
         secureTextEntry
        /></View>);        

    }
}

AppRegistry.registerComponent('SignInCom', () => SignInCom);