import React from 'react';
import {  View, TouchableOpacity, Text, TextInput, ScrollView} from 'react-native';
import DatePicker from 'react-native-datepicker';
import styles from "./StyleSheet";
import BottomNavigation, { Tab } from 'react-native-material-bottom-navigation'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import ViewEvent from "./ViewEvent";
import CalendarScreen from "./CalendarScreen";
import { Hoshi } from 'react-native-textinput-effects';
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-cards';



var AddDate = [] ;
let i = 0;

class AddEvent extends React.Component {
  static navigationOptions = ({ navigation}) => {
		const params = navigation.state.params || {};
		return {
            headerTitle: 'Add Event',
		}
	};
    constructor(props){
    super(props)
    this.state = {date:"2018-01-01", time: "12:00", name: "", notes: "", newHeight: 50, event: 0}
    this.state = { activeTab: 3 }
    this.handleTabChange = this.handleTabChange.bind(this)
}


AddNewDate=()=>{
  if (i >= 0){
      AddDate.push( this.state.date.toString() );
      i++;
  }
  if (this.state.event == 0){
    this.state.event++;
  }
  this.props.navigation.navigate('ViewEvent', {
              date: this.state.date,
              name: this.state.name, 
              time: this.state.time,
              notes: this.state.notes,
              event: this.state.event
           })
  }

  onChangeText = (typedText) => {
    this.setState({text: typedText})
  }

  _onPress =() => {
    this.AddNewDate
  }

handleTabChange(newTabIndex, oldTabIndex) {
    this.setState({ activeTab: newTabIndex })
    }
    
  render() {
    
    return(
        <View style={{ flex: 1 }}>
        <View style={styles.container}>
        <ScrollView
			width="90%"
			contentContainerStyle={{flex:1}}
			scrollEnabled = {false}
			contentContainerStyle={{alignItems:"center"}}>
		<Card>
			<CardContent> <Hoshi label={'Name of Event:'} borderColor={'#3838D8'} 
                          onChangeText = {(text) => this.setState({name: text})}/>
			  <Text style={styles.text}> </Text>
        <DatePicker
        style={styles.datePicker}
        date={this.state.date}
        mode="date"
        placeholder="select date"
        format="YYYY-MM-DD"
        minDate="2018-01-01"
        maxDate="2030-12-31"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        onDateChange={(date) => {this.setState({date: date})}}
      />
       <DatePicker
        style={styles.timePicker}
        date={this.state.time}
        mode="time"
        is24Hour = {false}
        placeholder="select time"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        onDateChange={(time) => {this.setState({time: time})}}
      />

      <Hoshi label={'Notes:'} borderColor={'#3838D8'} 
            onChangeText={(text) => { this.setState({notes: text}) }}/>												
			 </CardContent>
			<CardAction 
				separator={true} 
				inColumn={false}>
				<CardButton
          onPress={this.AddNewDate}
          title="Add Event"
					color="#9BB56B"
				/>
			</CardAction>
		</Card>
		</ScrollView> 
     </View>

       
       </View>
       

   );
}
}
export default AddEvent;