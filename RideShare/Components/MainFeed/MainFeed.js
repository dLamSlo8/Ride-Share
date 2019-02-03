import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, Button, TouchableOpacity, ScrollView } from 'react-native';
import Ride from '../MainFeed/Ride';
export default class HomeScreen extends Component {
  static navigationOptions = {
    headerStyle: {
      display: "none"
    }
  }
  constructor(props) {
      super(props);
      this.state = {
        rides: [
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
  }



    render() {
        return (
            <View style={styles.container}>

              <Text
                  style={styles.mainFeedHeader}
              >College Commute</Text>
        {/* <TouchableOpacity onPress={() => this.props.navigation.navigate("Post")}> 
              <Text
                  style={{
                    color: "white",
                    fontWeight: "bold",
                    fontSize: 70,
                    position: "absolute",
                  }}>
              asdasd</Text></TouchableOpacity> */}
              <Button onPress={() => this.props.navigation.navigate("Post")} title="New Post"></Button>
              <View
                style={{
                  borderBottomColor: '#C0C0C0',
                  borderBottomWidth: 1,
                  width: "100%",
                  position: "absolute",
                  top: 80,
                }}
              />

              <View

              style={styles.scroller}>

                {this.state.rides.map((ride) =>
                <Ride rideInfo={ride}></Ride>)}


              </View>


            </View>

        );
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