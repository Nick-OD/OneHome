import React from 'react';
import HomeScreen from "./View/HomeScreen";
import GroupSettingsScreen from "./View/GroupSettingsScreen";
import UserSettingsScreen from "./View/UserSettingsScreen";
import LoginScreen from "./View/LoginScreen";
import ExpensesScreen from "./View/ExpensesScreen";
import ExpensesScreen1 from "./View/ExpensesScreen1";

import ChoresScreen from "./View/ChoresScreen";
import ChoresScreen1 from "./View/ChoreScreen1";
import GroupChoreScreen from "./View/GroupChoreScreen";
import AddChoreScreen from "./View/AddChoreScreen";

import CalendarScreen from "./View/CalendarScreen";
import AddExpenseScreen from "./View/AddExpenseScreen";
import { StyleSheet, Text, View, Image, Alert, Button } from 'react-native';
import { StackNavigator } from 'react-navigation'; // 1.1.1
import ViewEvent from "./View/ViewEvent";
import AddEvent from "./View/AddEvent";

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
    Expenses1:{
        screen: ExpensesScreen1,
    },
    Chores:{
        screen: ChoresScreen,
    },
    ChoresScreen1:{
        screen: ChoresScreen1,
    },
    GroupChoreScreen:{
        screen: GroupChoreScreen,
    },
    AddChoreScreen:{
        screen: AddChoreScreen,
    },
    Calendar:{
        screen: CalendarScreen,
    },
    AddExpenseScreen:{
        screen: AddExpenseScreen,
    },
    ViewEvent: {
        screen: ViewEvent,
    },
    AddEvent: {
        screen: AddEvent,
    },
},
{
    initialRouteName: 'Login',
    transitionConfig: () => ({ screenInterpolator: () => null }),
    
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




