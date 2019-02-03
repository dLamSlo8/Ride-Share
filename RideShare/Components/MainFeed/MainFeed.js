import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, Button, TouchableOpacity, ScrollView } from 'react-native';
import Ride from '../MainFeed/Ride';
import firebase from "react-native-firebase";
export default class HomeScreen extends Component {
  static navigationOptions = {
    headerStyle: {
      display: "none"
    }
  }
  constructor(props) {
      super(props);
      this.state = {
        rideData:  [
          {name: "Kevin",
          requesting: true,
          start: "San Luis Obispo",
          end: "Los Angeles",
          price: 20,
          date: new Date(2019, 5, 17),
          spotsLeft: 2},
          {name: "Derek",
          requesting: false,
          start: "San Luis Obispo",
          end: "San Francisco",
          price: 20,
          date: new Date(2019, 5, 27),
          spotsLeft: 2}
        ]
      };
    this.ref = firebase.firestore().collection("Rides");
  }
  
  componentDidMount() {
        console.log(this.state.rideData.length);
        this.ref.get()
        .then(snapshot => {
            var rides = [];
            snapshot.docs.forEach(doc => rides.push(doc.data()));
            this.setState({rideData: rides});
        });
  }

    render() {

            if (this.state.rideData.length === 0) {
                return <Text>Loading</Text>
            }
            else {
            return (<View style={styles.container}>

              <Text
                  style={styles.mainFeedHeader}
              >College Commute</Text>

              <View style={styles.scroller}>
                {this.state.rideData.map((ride) =>
                 <Ride rideInfo={ride}></Ride>)}
              </View>
            <TouchableOpacity style={{position: "absolute", top: 30, right: 20}} onPress={() => this.props.navigation.navigate("Post")}>
                <Text style={{color: "white", fontWeight: "bold", fontSize: 30}}>+ </Text>
            </TouchableOpacity>

            </View>);

            }
    }
}


const styles = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "skyblue",
    },

    mainFeedHeader: {
      fontSize: 30,
      fontStyle: "italic",
      color: "white",
      position: "absolute",
      top: 30,

    },

    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'skyblue',
    },

    scroller: {
      position: "absolute",
      top: 100,
    }



});

AppRegistry.registerComponent('MainFeed', () => MainFeed);