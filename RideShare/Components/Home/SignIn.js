import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
  StatusBar,
  TextInput,
  SafeAreaView,
  Keyboard,
  TouchableOpacity,
  KeyboardAvoidingView,
  AppRegistry
} from "react-native";
import firebase from 'react-native-firebase';

export default class SignIn extends Component {
  constructor(props) {
      super(props);
      this.state = {
          email: "",
          password: "",
          err: ""
      };
      this.ref = firebase.firestore().collection("NewUser");
  }
  authCheck = () => {
        this.ref.where("Email", "==", this.state.email).where("Password", "==", this.state.password).get()
        .then(snapshot => {
            if (snapshot.empty) {
                this.setState({err: "Email or password is incorrect. Try again."});
            }
            else {
              this.setState({err: ""});
                global.identifier = snapshot.docs[0].get("UserName");
                this.props.signIn();
            }
        });
  }
    render() {
    return (
          <TouchableWithoutFeedback
            onPress={Keyboard.dismiss}
          >
      <View>
                <Image
                style = {{resizeMode:'contain', top: 40, marginLeft: 20, width: 300}}

                source={require("../../assets/Logo2.png")}  />
                <TextInput
                  style={styles.input}
                  placeholder="Email"
                  placeholderTextColor="rgba(255,255,255,0.😎"
                  autoCorrect={false}
                  value={this.state.email}
                  onChangeText={(text) => this.setState({email: text})}
                />
                <TextInput
                  style={styles.input}
                  placeholder="Password"
                  placeholderTextColor="rgba(255,255,255,0.😎"
                  secureTextEntry
                  autoCorrect={false}
                  value={this.state.password}
                  onChangeText={(text) => this.setState({password: text})}
                />
                <TouchableOpacity style={styles.buttonContainer}>
                  <Text style={styles.buttonText} onPress={this.authCheck}>SIGN IN</Text>
                </TouchableOpacity>
                <Text>{this.state.err}</Text>
            </View>

              </TouchableWithoutFeedback>
    );
    }

  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  logoContainer: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    width: 300
  },
  logo: {
    width: 128,
    height: 56
  },
  infoContainer: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 200,
    padding: 20
    // backgroundColor: 'red'
  },
  input: {
    height: 40,
    backgroundColor: "rgba(255,255,255,0.2)",
    color: "#FFF",
    marginBottom: 20,
    paddingHorizontal: 10
  },
  buttonContainer: {
    backgroundColor: "#f7c744",
    paddingVertical: 15
  },
  buttonText: {
    textAlign: "center",
    color: "rgb(32, 53, 70)",
    fontWeight: "bold",
    fontSize: 18
  }
});

AppRegistry.registerComponent('SignIn', () => SignIn);