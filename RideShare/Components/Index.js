import React, { Component } from 'react';
import { View, Text, AppRegistry, Picker, AppState, Button } from 'react-native';
import firebase from 'react-native-firebase';
export default class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            seconds: 0
        };
        this.ref = firebase.firestore().collection('NewUser');
    }

    addUser = () => {
        this.ref.add({
            Email: "asd",
            FirstName: "Derek",
            LastName: "Lam",
            Password: "asdd",
            UserName: "asdddd"
        })
    }

    render() {
        return(
            <View>
                <Text>Hello World</Text>
                <Button onPress={this.addUser} title="asd"></Button>
            </View>
        );
    }
}

AppRegistry.registerComponent("Index", () => Index);