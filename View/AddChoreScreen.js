import React from 'react';
import {  View, TouchableOpacity, Text, ScrollView, Picker} from 'react-native';
import styles from "./StyleSheet";
import BottomNavigation, { Tab } from 'react-native-material-bottom-navigation'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { Hoshi } from 'react-native-textinput-effects';
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-cards';


class AddChoreScreen extends React.Component {

    static navigationOptions = ({ navigation}) => {
		const params = navigation.state.params || {};
		return {
            headerTitle: 'Add Chore',
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
    return(
        <View style= {{flex: 1}}>
        <View style={styles.container}>
		<ScrollView
			width="90%"
			contentContainerStyle={{flex:1}}
			scrollEnabled = {false}
			contentContainerStyle={{alignItems:"center"}}>
		<Card>
			
			<CardContent> <Hoshi label={'Chore Name: '} borderColor={'#3838D8'} />
						  <Hoshi label={'ChorePoints: '} borderColor={'#3838D8'} />
              <Text></Text>
              <Text>Assigned To: </Text>
              <Picker style={{width:"100%"}}
                  selectedValue={this.state.language}
                  onValueChange={(lang) => this.setState({language: lang})} >
                  <Picker.Item label="Lowest" value = "Lowest" />
                  <Picker.Item label="John" value = "John" />
                  <Picker.Item label="Abby" value = "Abby" />
                  <Picker.Item label="Emma" value = "Emma" />
                  <Picker.Item label="Nick" value = "Nick" />
              </Picker>
						  
												
			 </CardContent>
			<CardAction 
				separator={true} 
				inColumn={false}>
				<CardButton
					onPress={() => {this.props.navigation.navigate('ChoresScreen1')}}
					title="Add Chore"
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
export default AddChoreScreen;


 







