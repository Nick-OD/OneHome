import React from 'react';
//import styles from "./styles";
import HomeScreen from "./View/HomeScreen";
import GroupSettingsScreen from "./View/GroupSettingsScreen";
import UserSettingsScreen from "./View/UserSettingsScreen";
import LoginScreen from "./View/LoginScreen";
import ExpensesScreen from "./View/ExpensesScreen";
import ChoresScreen from "./View/ChoresScreen";
import CalendarScreen from "./View/CalendarScreen";

//Chore Screens
import AddChoreScreen from "./View/AddChoreScreen";
import GroupChoreScreen from "./View/GroupChoreScreen";
import MainChoreScreen from "./View/ChoresScreen";

import { StyleSheet, Text, View, Image, Alert, Button } from 'react-native';
import { StackNavigator } from 'react-navigation'; // 1.1.1
import StickyHeaderFooterScrollView from 'react-native-sticky-header-footer-scroll-view';

const HomeStack = StackNavigator(
{
    Home: {
        screen: HomeScreen,
    },
    GroupSettings: {
        screen: GroupSettingsScreen,
    },
    UserSettings:{
        screen: UserSettingsScreen,
    },
    Login: {
        screen: LoginScreen,
    },
    Expenses:{
        screen: ExpensesScreen,
    },
    Chores:{
        screen: ChoreStack,
    },
    Calendar:{
        screen: CalendarScreen,
    },
},
{
    initialRouteName: 'Home',
}
);

const ChoreStack = StackNavigator(
	{
	MainChore: {
      screen: ChoresScreen,
    },
    GroupChore: {
      screen: GroupChoreScreen,
    },
  NewChore: {
    screen: AddChoreScreen,
  },
	},
    	{
    		initialRouteName: 'MainChore',
    	}
	);
export default class App extends React.Component {
    render() {
        return <HomeStack />;
    }
}

const styles = StyleSheet.create({ 
    headers: {
        color: 'black',
        fontSize:20,
        justifyContent: 'flex-start',
        flexDirection: 'column',
    },
    border: {
        padding: 20,
    },
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
    },
    imageContainer: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
    },
    navigation: {
        backgroundColor: 'white',
        flex: 4,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },
    buttonContainer: {
        backgroundColor: 'white',
        margin: 10,
        borderRadius: 20,
        justifyContent: 'flex-end',
    }, 
    buttonContainer1: {	
        flex: 1,
        backgroundColor: 'lightgray',
        margin: 1,
        borderRadius: 1,
        height: 40,
        width: 100,
        justifyContent: 'flex-end',	
    },
    buttonContainerTop: {
        backgroundColor: 'white',
        margin: 10,
        borderRadius: 20,
        justifyContent: 'flex-start',
    },
   
});
