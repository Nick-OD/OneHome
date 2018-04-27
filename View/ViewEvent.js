import React from 'react';
import {  View, TouchableOpacity, Text, ScrollView} from 'react-native';
import styles from "./StyleSheet";
import BottomNavigation, { Tab } from 'react-native-material-bottom-navigation'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-cards';


class ViewEvent extends React.Component {

    static navigationOptions = ({ navigation}) => {
		const params = navigation.state.params || {};
		return {
            headerTitle: 'Events',
		}
    };
    
constructor(){
  super();
  this.state = {}
  this.state = { activeTab: 3 }
    this.handleTabChange = this.handleTabChange.bind(this)
    }
    

handleTabChange(newTabIndex, oldTabIndex) {
    this.setState({ activeTab: newTabIndex })
    }

  render() {
    const { params } = this.props.navigation.state;
    const name = params ? params.name: null;
    const date = params ? params.date : null;
    const time = params ? params.time : null;
    const notes = params ? params.notes: null;
    const event = params ? params.notes: null;
    
    /*const noevent = <Text style={styles.text}> There are no events scheduled for this day. </Text>;
    const addevent = <View>
        <Text style={styles.text}>Name: {(name)}</Text> 
        <Text style={styles.text}>Date: {(date)}</Text>
        <Text style={styles.text}>Time: {(time)}</Text>
        <Text style={styles.text}>Notes: {(notes)}</Text>
        </View>

    let message;
    if(event == 0){
        message = noevent
    }
    else {
      message = addevent
   }*/
    return(
        <View style= {{flex: 1}}>
        <View style={styles.container}>
        <ScrollView
			width="90%"
			contentContainerStyle={{flex:1}}
			scrollEnabled = {false}
			contentContainerStyle={{alignItems:"center"}}>
			<Card>
					<CardTitle
						subtitle="Event: "
					/>
					<CardContent> <Text style={styles.text}>Name: {(name)}</Text> 
                    <Text style={styles.text}>Date: {(date)}</Text>
                    <Text style={styles.text}>Time: {(time)}</Text>
                    <Text style={styles.text}>Notes: {(notes)}</Text>/>
                    </CardContent>
					<CardAction 
						separator={true} 
						inColumn={false}>
						<CardButton
							onPress={() => this.props.navigation.navigate('AddEvent')}
							title="Edit"
							color="#9BB56B"
						/>
					</CardAction>
				</Card>
            </ScrollView>

        
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
export default ViewEvent;