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

class ChoresScreen extends React.Component{
    static navigationOptions = ({ navigation}) => {
    const params = navigation.state.params || {};
    return {
            headerTitle: 'Your Chores',
            headerRight: (
              <Button
                onPress={() => navigation.navigate('NewChore')}
                title="Add Chore"
              />
            ),
    }
  };

  constructor(props) {
    super(props)

    this.state = { activeTab: 1 }
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
      <ScrollView
      width="90%"
      contentContainerStyle={{flex:1}}
      //scrollEnabled = {True}
      contentContainerStyle={{alignItems:"center"}}>
      <Card>
          <CardImage title="Expenses"/>
          <CardTitle
            subtitle="Take Out Garbage"
          />
          <CardContent text="Weight:  2 ChorePoints" />
          <CardAction 
            separator={true} 
            inColumn={false}>
            <CardButton
              onPress={() => this.props.navigation.navigate('Expenses')}
              title="Complete"
              color="#9BB56B"
            />
          </CardAction>
        </Card>

        <Card>
          <CardImage title="Expenses"/>
          <CardTitle
            subtitle="Clean Bathroom"
          />
          <CardContent text="Weight:  6 ChorePoints" />
          <CardAction 
            separator={true} 
            inColumn={false}>
            <CardButton
              onPress={() => this.props.navigation.navigate('Expenses')}
              title="Complete"
              color="#9BB56B"
            />
          </CardAction>
        </Card>
                <Card>
          <CardImage title="Expenses"/>
          <CardTitle
            subtitle="Walk Dog"
          />
          <CardContent text="Weight:  3 ChorePoints" />
          <CardAction 
            separator={true} 
            inColumn={false}>
            <CardButton
              onPress={() => this.props.navigation.navigate('Expenses')}
              title="Complete"
              color="#9BB56B"
            />
          </CardAction>
        </Card>
                <Card>
          <CardImage title="Expenses"/>
          <CardTitle
            subtitle="Unload Dishwasher"
          />
          <CardContent text="Weight:  4 ChorePoints" />
          <CardAction 
            separator={true} 
            inColumn={false}>
            <CardButton
              onPress={() => this.props.navigation.navigate('Expenses')}
              title="Complete"
              color="#9BB56B"
            />
          </CardAction>
        </Card>


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
            //onPress={() => this.props.navigation.navigate('Chores')}
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
      </View> 
    )
  }     
};

export default ChoresScreen;

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
  bottomNavigation: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 56
  }
});

