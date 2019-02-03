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
  KeyboardAvoidingView
} from "react-native";

export default class MakePost extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" />
        <TouchableWithoutFeedback
          style={styles.container}
          onPress={Keyboard.dismiss}
        >
          <View>
            <Text style={styles.header}>Ride Share</Text>
            <View style={styles.container}>
              <Text style={styles.text}>From</Text>
              <TextInput
                style={styles.input}
                placeholder="City"
                placeholderTextColor="rgba(255,255,255,0.😎"
                keyboardType="default"
                returnKeyType="next"
                autoCorrect={false}
                onSubmitEditing={() => this.refs.txtPassword.focus()}
              />

              <TextInput
                style={styles.input}
                placeholder="State"
                placeholderTextColor="rgba(255,255,255,0.😎"
                keyboardType="default"
                returnKeyType="next"
                autoCorrect={false}
                onSubmitEditing={() => this.refs.txtPassword.focus()}
              />
            </View>
            <View style={styles.container}>
              <Text style={styles.text}>To</Text>
              <TextInput
                style={styles.input}
                placeholder="City"
                placeholderTextColor="rgba(255,255,255,0.😎"
                keyboardType="default"
                returnKeyType="next"
                autoCorrect={false}
                onSubmitEditing={() => this.refs.txtPassword.focus()}
              />
              <TextInput
                style={styles.input}
                placeholder="State"
                placeholderTextColor="rgba(255,255,255,0.😎"
                keyboardType="default"
                returnKeyType="next"
                autoCorrect={false}
                onSubmitEditing={() => this.refs.txtPassword.focus()}
              />
            </View>

            <View style={styles.container2}>
              <Text style={styles.text}>Payment</Text>
              <TextInput
                style={styles.input}
                placeholder="$"
                placeholderTextColor="rgba(255,255,255,0.😎"
                keyboardType="default"
                returnKeyType="next"
                autoCorrect={false}
                onSubmitEditing={() => this.refs.txtPassword.focus()}
              />
            </View>
            <TouchableOpacity style={styles.buttonContainer}>
              <Text style={styles.buttonText}>Request Ride</Text>
            </TouchableOpacity>
          </View>
        </TouchableWithoutFeedback>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    height: 50,
    backgroundColor: "rgba(255,255,255,0.2)",
    color: "#FFF",
    margin: 5,
    width: 120
  },
  text: {
    color: "rgb(32, 53, 70)",
    fontWeight: "bold",
    fontSize: 18,
    marginTop: 20
  },
  container: {
    marginTop: 20,
    flex: 1,
    justifyContent: "center",
    flexDirection: "row",
    backgroundColor: "#89cff0",
    padding: 10
  },
  container2: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#89cff0",
    alignItems: "center",
    marginBottom: 75
  },
  buttonContainer: {
    backgroundColor: "#f7c744",
    paddingVertical: 10,
    marginBottom: 50
  },
  buttonText: {
    textAlign: "center",
    color: "rgb(32, 53, 70)",
    fontWeight: "bold",
    fontSize: 18
  },
  header: {
    marginTop: 10,
    fontSize: 50,
    color: "white",
    textAlign: "center"
  }
});

