import React, { Component } from 'react';
 import { View, TouchableOpacity, Text, AppRegistry } from 'react-native';


 export default class Ride extends Component {
   checkSeeking() {
     const formSeeking = <Text style={{color: "blue", fontWeight: "bold"}}>Seeking</Text>;
     const formOffering = <Text style={{color: "green", fontWeight: "bold"}}>Offering</Text>;

     let formSeekingMessage;

     if (this.props.rideInfo.requesting) {
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
            height: 130,
            borderRadius: 10,
            margin: 8,
          }}
        >
            <Text
              style={{
                margin: 8,
                fontSize: 20,
                fontWeight: "bold",
              }}>{this.props.rideInfo.name}</Text>

              <Text
                style={{
                  margin: 8,
                  fontSize: 15,
                  position: "absolute",
                  top: 5,
                  left: 180,
                }}>{this.checkSeeking()}</Text>

                <Text
                  style={{
                    margin: 8,
                    fontSize: 15,
                  }}>To: {this.props.rideInfo.end}</Text>

                  <Text
                    style={{
                      margin: 8,
                      marginTop: 3,
                      fontSize: 15,
                      top: -10,
                    }}>From: {this.props.rideInfo.start}</Text>


        </View>





      )
    }
 }

 AppRegistry.registerComponent("Ride", () => Ride);