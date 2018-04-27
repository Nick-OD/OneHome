import { StyleSheet, Text, View, Image, Alert, Button, ScrollView, ScrollViewProps } from 'react-native';
import { StackNavigator } from 'react-navigation'; // 1.1.1
import React, { Component } from 'react'
import BottomNavigation, { Tab } from 'react-native-material-bottom-navigation'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-cards';

class HomeScreen extends React.Component {
	static navigationOptions = ({ navigation}) => {
		const params = navigation.state.params || {};
		return {
			headerTitle: 'OneHome',
		}
	};



	constructor(props) {
    super(props)

    this.state = { activeTab: 2 }
    this.handleTabChange = this.handleTabChange.bind(this)
  }

	handleTabChange(newTabIndex, oldTabIndex) {
    this.setState({ activeTab: newTabIndex })
	}
	
	

	render() 
	{
		return (

			<View style={{ flex: 1 }}>
			<View style={styles.container}>
			
				<Image source={require('../my-icon.png')} style={{width: 110, height:100,  marginTop: 25, marginBottom: 25}}/> 
			
		<ScrollView
			width="90%"
			contentContainerStyle={{flex:1}}
			//scrollEnabled = {false}
			contentContainerStyle={{alignItems:"center"}}>
			<Card>
					<CardImage title="Expenses"/>
					<CardTitle
						subtitle="Your Balance: "
					/>
					<CardContent text="$	15.00" />
					<CardAction 
						separator={true} 
						inColumn={false}>
						<CardButton
							onPress={() => this.props.navigation.navigate('Expenses')}
							title="Details"
							color="#9BB56B"
						/>
					</CardAction>
				</Card>

				<Card>
					<CardTitle
						subtitle="Your Next Chore "
					/>
					<CardContent text="Take Out Garbage" />
					<CardAction 
						separator={true} 
						inColumn={false}>
						<CardButton
							onPress={() => this.props.navigation.navigate('Chores')}
							title="Details"
							color="#9BB56B"
						/>
					</CardAction>
				</Card>

				<Card>
					<CardTitle
						subtitle="Upcoming Event"
					/>
					<CardContent text="Nick has Friends Coming over 4/21/18" />
					<CardAction 
						separator={true} 
						inColumn={false}>
						<CardButton
							onPress={() => this.props.navigation.navigate('Calendar')}
							title="View Calendar"
							color="#9BB56B"
						/>
					</CardAction>
				</Card>

				<Text> </Text>
				<Text> </Text>
				<Text> </Text>
				<Text> </Text>
				<Text> </Text>


		</ScrollView>
        <BottomNavigation
          activeTab={this.state.activeTab}
          labelColor="white"
          rippleColor="white"
          style={styles.bottomNavigation}
          onTabChange={this.handleTabChange}
        >
          <Tab
						barBackgroundColor="#3838D8"
						onPress={() => this.props.navigation.navigate('Expenses')}
            label="Expenses"
            icon={<Icon size={24} color="white" name="currency-usd" />}
          />
          <Tab
						barBackgroundColor="#3838D8"
						onPress={() => this.props.navigation.navigate('Chores')}
            label="Chores"
            icon={<Icon size={24} color="white" name="broom" />}
          />
          <Tab
						barBackgroundColor="#3838D8"
						//onPress={() => this.props.navigation.navigate('Home')}
            label="Home"
            icon={<Icon size={24} color="white" name="home" />}
          />
          <Tab
						barBackgroundColor="#3838D8"
						onPress={() => this.props.navigation.navigate('Calendar')}
            label="Calendar"
            icon={<Icon size={24} color="white" name="calendar" />}
          />
					<Tab
						barBackgroundColor="#3838D8"
						onPress={() => this.props.navigation.navigate('UserSettings')}
            label="Settings"
            icon={<Icon size={24} color="white" name="settings" />}
          />
        </BottomNavigation>
      </View>		
			</View>	
		)
	}			
};


export default HomeScreen;
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
			justifyContent: 'flex-start',
	},
	imageContainer: {
			flex: 1,
			backgroundColor: 'white',
			alignItems: 'center',
	},
	navigation: {
			backgroundColor: 'white',
			flex: 0,
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
	bottomNavigation: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 56
  }
 
});





