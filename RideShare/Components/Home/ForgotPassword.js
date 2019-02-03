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

export default class ForgotPassword extends Component {
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
                  placeholder="Email"
                  placeholderTextColor="rgba(255,255,255,0.😎"
                  autoCorrect={false}
                />
                <TouchableOpacity style={styles.buttonContainer}>
                  <Text style={styles.buttonText}>Send Email</Text>
                </TouchableOpacity>
            </View>

              </TouchableWithoutFeedback>
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

AppRegistry.registerComponent('ForgotPassword', () => ForgotPassword);
