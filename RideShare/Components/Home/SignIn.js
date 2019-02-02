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

export default class SignIn extends Component {
  render() {
    return (
          <TouchableWithoutFeedback
            onPress={Keyboard.dismiss}
          >
      <View>

                <Image
                style = {{resizeMode:'contain', top: 40, marginLeft: 20, width: 200}}

                source={require("../../assets/Logo1.png")}  />

                <TextInput
                  style={styles.input}
                  placeholder="Emil"
                  placeholderTextColor="rgba(255,255,255,0.😎"
                  autoCorrect={false}
                />
                <TextInput
                  style={styles.input}
                  placeholder="Password"
                  placeholderTextColor="rgba(255,255,255,0.😎"
                  secureTextEntry
                  autoCorrect={false}
                />
                <TouchableOpacity style={styles.buttonContainer}>
                  <Text style={styles.buttonText}>SIGN IN</Text>
                </TouchableOpacity>
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