import HomeScreen from "./HomeScreen";
import { Text, View, Image, Alert, Button, TouchableOpacity, ScrollView } from 'react-native';
import { StackNavigator } from 'react-navigation'; // 1.1.1
import {Calendar} from 'react-native-calendars';
import React, { Component } from 'react'
import BottomNavigation, { Tab } from 'react-native-material-bottom-navigation'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import ViewEvent from "./ViewEvent";
import AddEvent from "./AddEvent";
import styles from "./StyleSheet";
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-cards';

class ExpensesScreen extends React.Component{
    static navigationOptions = ({ navigation}) => {
		const params = navigation.state.params || {};
		return {
            
			headerTitle: 'Expenses',
			headerRight: <Button 
            title= "Add Expense"
            onPress={() => navigation.navigate('AddExpenseScreen')}
            />,
		}
	};

	constructor(props) {
    super(props)

    this.state = { activeTab: 0 }
    this.handleTabChange = this.handleTabChange.bind(this)
    this.onDayPress = this.onDayPress.bind(this);
  }

  onDayPress(day) {
    this.setState({
      selected: day.dateString
    });
    this.props.navigation.navigate('ViewEvent')
  }

	handleTabChange(newTabIndex, oldTabIndex) {
    this.setState({ activeTab: newTabIndex })
	}
    render()
    {
        const { params } = this.props.navigation.state;
        const date = params ? params.date : null;
    
        return (
            <View style={{ flex: 1 }}>
			<View style={styles.container}>
			<ScrollView
			width="90%"
			contentContainerStyle={{flex:1}}
			scrollEnabled = {false}
			contentContainerStyle={{alignItems:"center"}}>
			<Card>
					<CardImage title="Expenses"/>
					<CardTitle
						subtitle="Abby: "
					/>
					<CardContent text="$    (10.00)" />
					<CardAction 
						separator={true} 
						inColumn={false}>
						<CardButton
							onPress={() => this.props.navigation.navigate('Expenses')}
							title="Details"
							color="#9BB56B"
						/>
                        <CardButton
							onPress={() => this.props.navigation.navigate('Expenses')}
							title="Settle Up"
							color="#9BB56B"
						/>
					</CardAction>
				</Card>

				<Card>
					<CardTitle
						subtitle="Emma:  "
					/>
					<CardContent text="$    15.00" />
					<CardAction 
						separator={true} 
						inColumn={false}>
						<CardButton
							onPress={() => this.props.navigation.navigate('Chores')}
							title="Details"
							color="#9BB56B"
						/>
                        <CardButton
							onPress={() => this.props.navigation.navigate('Expenses')}
							title="Settle Up"
							color="#9BB56B"
						/>
					</CardAction>
				</Card>

				<Card>
					<CardTitle
						subtitle="Nick: "
					/>
					<CardContent text="$    10.00" />
					<CardAction 
						separator={true} 
						inColumn={false}>
						<CardButton
							onPress={() => this.props.navigation.navigate('Chores')}
							title="Details"
							color="#9BB56B"
						/>
                        <CardButton
							onPress={() => this.props.navigation.navigate('Expenses')}
							title="Settle Up"
							color="#9BB56B"
						/>
					</CardAction>
				</Card>


		</ScrollView>

        <View style={styles.buttonContainer3}>
         <TouchableOpacity 
            onPress={() => this.props.navigation.navigate('ViewEvent', {
              date: this.state.date,
              name: this.state.name, 
              time: this.state.time,
              notes: this.state.notes})}
              style={styles.button}> <Text style={styles.buttonText}>View Events</Text>
            </TouchableOpacity>
        <TouchableOpacity 
            onPress={() => this.props.navigation.navigate('AddExpenseScreen')} style={styles.button}> <Text style={styles.buttonText}>Add Events</Text>
            </TouchableOpacity>
                </View> 
            </View>

                 

            <BottomNavigation
            activeTab={this.state.activeTab}
            labelColor="white"
            rippleColor="white"
            style={styles.bottomNavigation}
            onTabChange={this.handleTabChange}
            >
            <Tab
                            barBackgroundColor="#3838D8"
                            //onPress={() => this.props.navigation.navigate('Expenses')}
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
                            onPress={() => this.props.navigation.navigate('Home')}
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
            

        );
    }
}
export default ExpensesScreen;

