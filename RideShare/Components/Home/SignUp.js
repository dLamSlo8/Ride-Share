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
  Alert
} from "react-native";
import firebase from 'react-native-firebase';

export default class SignUp extends Component {

  constructor (props) {
    super(props);
    this.state = {FirstNameText: "",
                  LastNameText: "",
                  EmailText: "",
                  UsernameText: "",
                  PasswordText: "",
                  ReEnterPasswordText: "",
                  PhoneNumber: "",
                  formIsEmpty: false,
                  passwordHasMismatch: false,
                  emailNonEdu: false,
                  formSameEamil: false,
                  users: []
                };
    this.ref = firebase.firestore().collection('NewUser');
    this.unsubscribe = null;
  }

  onRegisterPress() {
    if((this.state.FirstNameText === "") ||
        (this.state.LastNameText === "") ||
        (this.state.EmailText === "") ||
        (this.state.UsernameText === "") ||
        (this.state.PasswordText === "") ||
        (this.state.ReEnterPasswordText === "")) {
      this.setState({formIsEmpty: true})
      this.setState({passwordHasMismatch: false})
      this.setState({emailNonEdu: false})
    }
    else if (this.state.PasswordText !== this.state.ReEnterPasswordText) {
      this.setState({formIsEmpty: false})
      this.setState({passwordHasMismatch: true})
      this.setState({emailNonEdu: false})
    }
    else if ((this.state.EmailText.substring((this.state.EmailText.length - 4), (this.state.EmailText.length))) !== ".edu") {
      this.setState({formIsEmpty: false})
      this.setState({passwordHasMismatch: false})
      this.setState({emailNonEdu: true})
    }
    else {
        var query = this.ref.where('Email', '==', this.state.EmailText).get()
          .then(snapshot => {
            if (snapshot.empty) {
              this.ref.add({
                Email: this.state.EmailText,
                FirstName: this.state.FirstNameText,
                LastName: this.state.LastNameText,
                Password: this.state.PasswordText,
                UserName: this.state.UsernameText,
                Phone: this.state.PhoneNumber
              })
            }
            else {
                this.setState({
                  formSameEmail: true
                });
            }
          }).catch(err => {
            console.log('Error boi');
          })
      
    }
  }
  checkError() {
    const formEmptyMessage = <Text>All form fields must be complete</Text>;
    const formPasswordMismatch = <Text>Passwords must match</Text>;
    const formNonEduEmail = <Text>Email must be a valid .edu email</Text>;
    const formSameEmail = <Text>Email already exists.</Text>;
    const formClear = <Text></Text>;

    let formMessage;

    if (this.state.formIsEmpty) {
      formMessage = formEmptyMessage;
    } else if (this.state.passwordHasMismatch) {
      formMessage = formPasswordMismatch;
    } else if (this.state.emailNonEdu) {
      formMessage = formNonEduEmail;
    } else if (this.state.formSameEmail) {
      formMessage = formSameEmail;
    }
    else {
      formMessage = formClear;
    }
    return formMessage;
  }

  render() {

    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" />
          <TouchableWithoutFeedback
            style={styles.container}
            onPress={Keyboard.dismiss}
          >

            <View style={styles.logoContainer}>
              <View style={styles.logoContainer} />
              <View style={styles.infoContainer}>
                <Text
                style={styles.signupHeader}
                >Sign Up</Text>
                <TextInput
                  style={styles.input}
                  placeholder="First Name"
                  placeholderTextColor="rgba(255,255,255,0.😎"
                  autoCorrect={false}
                  onChangeText = { (FirstNameText) => this.setState({FirstNameText}) }
                  value={this.state.FirstNameText}
                />
                <TextInput
                  style={styles.input}
                  placeholder="Last Name"
                  placeholderTextColor="rgba(255,255,255,0.😎"
                  autoCorrect={false}
                  onChangeText = { (LastNameText) => this.setState({LastNameText}) }
                  value={this.state.LastNameText}
                />
                <TextInput
                  style={styles.input}
                  placeholder="Email"
                  placeholderTextColor="rgba(255,255,255,0.😎"
                  autoCorrect={false}
                  onChangeText = { (EmailText) => this.setState({EmailText}) }
                  value={this.state.EmailText}
                />
                <TextInput
                  style={styles.input}
                  placeholder="Username"
                  placeholderTextColor="rgba(255,255,255,0.😎"
                  autoCorrect={false}
                  onChangeText = { (UsernameText) => this.setState({UsernameText}) }
                  value={this.state.UsernameText}
                />
                <TextInput
                  style={styles.input}
                  placeholder="Password"
                  placeholderTextColor="rgba(255,255,255,0.😎"
                  secureTextEntry
                  autoCorrect={false}
                  ref={"txtPassword"}
                  onChangeText = { (PasswordText) => this.setState({PasswordText}) }
                  value={this.state.PasswordText}
                />
                <TextInput
                  style={styles.input}
                  placeholder="Re-enter Password"
                  placeholderTextColor="rgba(255,255,255,0.😎"
                  secureTextEntry
                  autoCorrect={false}
                  ref={"txtPassword"}
                  onChangeText = { (ReEnterPasswordText) => this.setState({ReEnterPasswordText}) }
                  value={this.state.ReEnterPasswordText}
                />
                <TextInput
                  style={styles.input}
                  placeholder="Phone Number"
                  placeholderTextColor="rgba(255,255,255,0.😎"
                  autoCorrect={false}
                  onChangeText = { (number) => this.setState({PhoneNumber: number})}
                  value={this.state.PhoneNumber}
                />
                <TouchableOpacity style={styles.buttonContainer}
                  onPress = {this.onRegisterPress.bind(this)}
                >
                  <Text style={styles.buttonText}>SIGN UP</Text>
                </TouchableOpacity>

                    <Text
                    style={styles.registerError}
                    >{this.checkError()}</Text>
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
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'skyblue',
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
  buttonContainer: {
    backgroundColor: "#f7c744",
    paddingVertical: 15
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
    bottom: 10,
    marginBottom: 110
  },
  registerError: {
    color: "red",
    textAlign: "center",
    fontSize: 12,
    marginTop: 15
  }
});
