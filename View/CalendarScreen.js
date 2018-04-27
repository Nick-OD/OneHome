import HomeScreen from "./HomeScreen";
import { Text, View, Image, Alert, Button, TouchableOpacity } from 'react-native';
import { StackNavigator } from 'react-navigation'; // 1.1.1
import {Calendar} from 'react-native-calendars';
import React, { Component } from 'react'
import BottomNavigation, { Tab } from 'react-native-material-bottom-navigation'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import ViewEvent from "./ViewEvent";
import AddEvent from "./AddEvent";
import styles from "./StyleSheet";

class CalendarScreen extends React.Component{
    static navigationOptions = ({ navigation}) => {
		const params = navigation.state.params || {};
		return {
            headerTitle: 'Calendar',
		}
	};

	constructor(props) {
    super(props)

    this.state = { activeTab: 3 }
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
            <View style={styles.middle}>
      <Image 
            style={{height: 110, width: 100, marginTop: 25, marginBottom: 25}}
            source={require('../my-icon.png')}>
          </Image>
          </View>
      <View style={styles.calendar}>
        <Calendar
          style={{width: 400}}
          onDayPress={this.onDayPress}
          hideExtraDays
          markedDates={{
                '2018-04-19': {selected: true, selectedColor: 'green'},
                //'2018-04-18': {marked: true, dotColor: 'red', activeOpacity: 0},
                //[(date)] : {marked: true, dotColor: 'red', activeOpacity: 0}
          }}
          theme={{
            selectedDayBackgroundColor: 'green',
            todayTextColor: 'green',
            arrowColor: 'black',
          }}
        />
        </View>

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
            onPress={() => this.props.navigation.navigate('AddEvent')} style={styles.button}> <Text style={styles.buttonText}>Add Events</Text>
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
                            onPress={() => this.props.navigation.navigate('Home')}
                label="Home"
                icon={<Icon size={24} color="white" name="home" />}
            />
            <Tab
                            barBackgroundColor="#3838D8"
                            //onPress={() => this.props.navigation.navigate('Calendar')}
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
export default CalendarScreen;

