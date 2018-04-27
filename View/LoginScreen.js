import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    TextInput,
    ScrollView,
    TouchableOpacity
} from 'react-native';
import Expo from 'expo';
import { StackNavigator } from 'react-navigation'; // 1.1.1
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-cards';

class LoginScreen extends React.Component{

 
    async signInWithGoogleAsync() {
        try {
          const result = await Expo.Google.logInAsync({
            iosClientId:'734771576117-rmbfk2uqo1f2lepkhtqj11l7pn1cma8t.apps.googleusercontent.com',
            scopes: ['profile', 'email'],
          });
  
          if (result.type === 'success') {
              this.props.navigation.navigate('Home');
            return result.accessToken;
          } else {
            return {cancelled: true};
          }
        } catch(e) {
          return {error: true};
        }
      }
      
      render() {
        return (
          <View style = {styles.container}>
            <Text> Welcome to OneHome! </Text>
            
            <ScrollView style = {styles.scrollContainer}
            scrollEnabled = {false}>
            <TouchableOpacity onPress={this.signInWithGoogleAsync.bind(this)} >
            <Text>Sign in with Google </Text>
              <Card>
                <CardTitle
                title="Google"
                color="#9BB56B"
                />
                  <CardAction 
                      separator={true} 
                      inColumn={false}>
                  </CardAction>
              </Card>
            </TouchableOpacity>
            </ScrollView>
          </View>
        );
      }

}

const styles = StyleSheet.create({ 

	container: {
			flex: 1,
			backgroundColor: 'white',
			alignItems: 'center',
			justifyContent: 'center',
			padding: 20
  },
  scrollContainer: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    left:0,
    right:0,
    width: 200
  }
});


export default LoginScreen;