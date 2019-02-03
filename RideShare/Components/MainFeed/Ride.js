import React, { Component } from 'react';
import { View, TouchableOpacity, Text, AppRegistry } from 'react-native';
import firebase from 'react-native-firebase';

 export default class Ride extends Component {

   constructor(props) {
       super(props);
       this.state = {
           firstName: "",
           lastName: "",
           phoneNumber: ""
       };
       this.ref = firebase.firestore().collection("NewUsers");
       this.ref2 = firebase.firestore().collection("Rides");
    }
   checkSeeking() {
     const formSeeking = <Text style={{color: "blue", fontWeight: "bold"}}>Seeking</Text>;
     const formOffering = <Text style={{color: "green", fontWeight: "bold"}}>Offering</Text>;

     let formSeekingMessage;

     if (this.props.rideInfo.RideType) {
       formSeekingMessage = formSeeking;
     }
     else {
       formSeekingMessage = formOffering;
     }
     return formSeekingMessage;
   }

    render() {
      return(
        
        <View
          style={{
            borderWidth: 1,
            borderColor: 'white',
            backgroundColor: "white",
            opacity: 0.8,
            width: 280,
            height: 160,
            borderRadius: 10,
            margin: 8,
          }}
        >
            <Text
              style={{
                margin: 8,
                fontSize: 20,
                fontWeight: "bold",
              }}>{this.props.rideInfo.FirstName + " " + this.props.rideInfo.LastName}</Text>

              <Text
                style={{
                  margin: 1,
                  fontSize: 11,
                  position: "absolute",
                  top: 5,
                  left: 175,
                }}>{this.checkSeeking()}</Text>

                <Text
                  style={{
                    margin: 8,
                    fontSize: 15,
                  }}>To: {this.props.rideInfo.EndingPt}</Text>

                  <Text
                    style={{
                      margin: 8,
                      marginTop: 3,
                      fontSize: 15,
                      top: -10,
                    }}>From: {this.props.rideInfo.StartingPt}</Text>

                    <Text
                    style={{
                      margin: 8,
                      marginTop: 3,
                      fontSize: 15,
                      top: -13,
                    }}>Phone: {this.props.rideInfo.Phone}</Text>

                    <Text
                    style={{
                      margin: 8,
                      marginTop: 3,
                      fontSize: 15,
                      top: -13,
                    }}>Price: ${this.props.rideInfo.Price}</Text>

        </View>





      )
    }
 }

 AppRegistry.registerComponent("Ride", () => Ride);