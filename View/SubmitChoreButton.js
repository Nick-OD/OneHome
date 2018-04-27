'use strict';

import React, { Component } from 'react';
import {Text, View, StyleSheet, TextInput, Button, Picker, ReactNative, AlertIOS, AsyncStorage} from 'react-native';
import { StackNavigator } from 'react-navigation';
//import PouchDB from 'pouchdb-react-native'
import ChoresScreen from './ChoresScreen';


class SubmitChoreButton extends React.Component {
   static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};
    return {
    };
   };
  onEnd = () => {
    AlertIOS.alert('Chore Added', 'Assigned To:');
   this.props.navigation.navigate('GroupChore');
  }
   
  render () {
    return (
      <View >
        // Add Chore to Database  
        <Button
          title="Submit"
          onPress = { () => {this.onEnd.bind(this);
          }}
        />
      </View>
    );
  }
}

const ButtonStack = StackNavigator(
	{
    MainChore: {
      screen: ChoresScreen,
    },
});
export default SubmitChoreButton;