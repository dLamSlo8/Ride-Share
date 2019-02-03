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
  Switch,
  Alert,
  AppRegistry
} from "react-native";

export default class MakePost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false, //make true / false determine which type of ride.
      Starting: "",
      Destination: "",
      Date: "",
      Time: "",
      Price: "",
      formIsEmpty: false
    };
  }

  _onPres() {
    const newState = !this.state.toggle;
    this.setState({ toggle: newState });
  }

  render() {
    const { toggle } = this.state;
    const colorValue = toggle ? "#D3D3D3" : "#888888";
    const colorValue2 = toggle ? "#888888" : "#D3D3D3";

    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" />
        <TouchableWithoutFeedback
          style={styles.container}
          onPres={Keyboard.dismiss}
          onClick={this.handleIncrement}
        >
          <View style={styles.logoContainer}>
            <View style={styles.logoContainer} />
            <View style={styles.infoContainer}>
              {/* <Text style={styles.signupHeader}>Ride Form</Text> */}
              <Image
                style={{
                  resizeMode: "contain",
                  marginLeft: 30,
                  width: 200,
                  top: 90
                }}
                source={require("../../assets/icon.png")}
              />

              <View style={{ alignItems: "center", flexDirection: "row" }}>
                <TouchableOpacity
                  style={{
                    flex: 1,
                    backgroundColor: colorValue,
                    padding: 10,
                    marginVertical: 20,
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                  onPress={() => this._onPres()}
                >
                  <Text style={styles.buttonText}>Seeking</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={{
                    flex: 1,
                    backgroundColor: colorValue2,
                    padding: 10,
                    marginVertical: 20,
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                  onPress={() => this._onPres()}
                >
                  <Text style={styles.buttonText}>Offering</Text>
                </TouchableOpacity>
              </View>

              <TextInput
                style={styles.input}
                placeholder="Starting"
                placeholderTextColor="rgba(255,255,255,0.😎"
                autoCorrect={false}
                onChangeText={Starting => this.setState({ Starting })}
                value={this.state.Starting}
              />
              <TextInput
                style={styles.input}
                placeholder="Destination"
                placeholderTextColor="rgba(255,255,255,0.😎"
                autoCorrect={false}
                onChangeText={Destination => this.setState({ Destination })}
                value={this.state.Destination}
              />
              <TextInput
                style={styles.input2}
                placeholder="Date"
                placeholderTextColor="rgba(255,255,255,0.😎"
                autoCorrect={false}
                onChangeText={Date => this.setState({ Date })}
                value={this.state.Date}
              />
              <TextInput
                style={styles.input2}
                placeholder="Time"
                placeholderTextColor="rgba(255,255,255,0.😎"
                autoCorrect={false}
                ref={"Time"}
                onChangeText={Time => this.setState({ Time })}
                value={this.state.Time}
              />
              <TextInput
                style={styles.input}
                placeholder="Price $"
                placeholderTextColor="rgba(255,255,255,0.😎"
                autoCorrect={false}
                ref={"Price"}
                onChangeText={Price => this.setState({ Price })}
                value={this.state.Price}
              />
              <TouchableOpacity style={styles.buttonContainer}>
                <Text style={styles.buttonText}>Enter</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "skyblue"
  },
  logoContainer: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    width: 300,
    marginTop: 20
  },
  logo: {
    width: 128,
    height: 56
  },
  infoContainer: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 50,
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
  input2: {
    height: 40,
    backgroundColor: "rgba(255,255,255,0.2)",
    color: "#FFF",
    marginBottom: 20,
    flexDirection: "row",
    paddingHorizontal: 10
  },
  buttonContainer: {
    backgroundColor: "#f7c744",
    paddingVertical: 15,
    marginBottom: 12
  },
  buttonContainer2: {
    flex: 1,
    backgroundColor: "#D3D3D3",
    padding: 10,
    marginBottom: 12,
    justifyContent: "center",
    alignItems: "center"
  },
  buttonContainer3: {
    backgroundColor: "#888888",
    padding: 10,
    marginBottom: 12
  },
  buttonText: {
    textAlign: "center",
    color: "rgb(32, 53, 70)",
    fontWeight: "bold",
    fontSize: 18
  },
  signupHeader: {
    textAlign: "center",
    color: "black",
    fontSize: 50,
    bottom: 30
  },
  registerError: {
    color: "red",
    textAlign: "center",
    fontSize: 12,
    marginTop: 15
  }
});

AppRegistry.registerComponent("MakePost", () => MakePost);