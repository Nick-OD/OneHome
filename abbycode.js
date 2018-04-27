import React from 'react';
import { StyleSheet, Text, View, Image, Alert, Button } from 'react-native';
import { StackNavigator } from 'react-navigation'; // 1.1.1

class HomeScreen extends React.Component {

    render() {
  	
        return (
          <View style={styles.container}>
      on
      <View style={styles.navigation}>
		 <View style={styles.buttonContainer}>
		   <Button onPress={() => this.props.navigation.navigate('GroupSettings')} title="Manage group"/>
		   </View>
		 <View style={styles.buttonContainer}>
		   <Button onPress={() => this.props.navigation.navigate('Login')} title="Logout"/>
		   </View>
	   </View>
	   

	<Image source={require('./my-icon.png')} style={{width: 100, height:90}}/>	

  	<View style= {styles.border}>
        <Text style={styles.headers}>Your expenses: $</Text>
         <View style={styles.buttonContainer}>
	   		<Button onPress={() => this.props.navigation.navigate('Expenses')} title="Details"/>
	   		</View>
	   		
        <Text style={styles.headers}>Your chores</Text>
        <View style={styles.buttonContainer}>
	   		<Button onPress={() => this.props.navigation.navigate('Chores')} title="See full chore list"/>
	   		</View>
	   		
        <Text style={styles.headers}>Events coming up</Text>
        <View style={styles.buttonContainer}>
	   		<Button onPress={() => this.props.navigation.navigate('Calendar')} title="See full calendar"/>
	   		</View>
	   	</View>
	 <View style={styles.navigation}>
		 <View style={styles.buttonContainer}>
		   <Button onPress={() => this.props.navigation.navigate('Expenses')} style={{fontSize: 5}} title="$"/>
		   </View>
		 <View style={styles.buttonContainer}>
		   <Button onPress={() => this.props.navigation.navigate('Chores')} style={{fontSize: 5}} title="chore"/>
		   </View>
		 <View style={styles.buttonContainer}>
		   <Button onPress={this._onPressButton} title="home"/>
		   </View>
		 <View style={styles.buttonContainer}>
		   <Button onPress={() => this.props.navigation.navigate('Calendar')} title="cal"/>
		   </View>
		 <View style={styles.buttonContainer}>
		   <Button onPress={() => this.props.navigation.navigate('UserSettings')} title="set"/>
		   </View>
	   </View>
		   
      </View> 
    );
		   }
}

class GroupSettingsScreen extends React.Component {
    render() {
        return (
        <View style={styles.container}>
<Text style={styles.title}>Settings for group creation</Text>
<View style={styles.buttonContainer}>
<Button title="Back to Home Screen" onPress={() => this.props.navigation.goBack()}/>
</View>
</View>
);
}
}

class UserSettingsScreen extends React.Component {
    render() {
        return (
        <View style={styles.container}>
<Text style={styles.title}>Settings for user</Text>
<View style={styles.buttonContainer}>
<Button title="Back to Home Screen" onPress={() => this.props.navigation.goBack()}/>
</View>
</View>
);
}
}

class LoginScreen extends React.Component{
    render() {
        return (
        <View style={styles.container}>
<Text style={styles.title}>Login Screen</Text>
<View style={styles.buttonContainer}>
<Button title="Login" onPress={() => this.props.navigation.goBack()}/>
</View>
</View>
);
}
}

class ExpensesScreen extends React.Component{
    render() {
        return (
        <View style={styles.container}>
<Text style={styles.title}>Expenses First Screen</Text>
<View style={styles.buttonContainer}>
<Button title="Back to Home Screen" onPress={() => this.props.navigation.goBack()}/>
</View>
</View>
);
}
}

class ChoresScreen extends React.Component{
    render() {
        return (
        <View style={styles.container}>
<Text style={styles.title}>Chores First Screen</Text>
<View style={styles.buttonContainer}>
<Button title="Back to Home Screen" onPress={() => this.props.navigation.goBack()}/>
</View>
</View>
);
}
}

class CalendarScreen extends React.Component{
    render() {
        return (
        <View style={styles.container}>
<Text style={styles.title}>Calendar First Screen</Text>
<View style={styles.buttonContainer}>
<Button title="Back to Home Screen" onPress={() => this.props.navigation.goBack()}/>
</View>
</View>
);
}
}

const RootStack = StackNavigator(
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
        screen: ChoresScreen,
    },
    Calendar:{
        screen: CalendarScreen,
    },
},
{
    initialRouteName: 'Home',
}
);

export default class App extends React.Component {
    render() {
        return <RootStack />;
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
});