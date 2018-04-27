import React from 'react';
import {  View, TouchableOpacity, Text, ScrollView} from 'react-native';
import styles from "./StyleSheet";
import BottomNavigation, { Tab } from 'react-native-material-bottom-navigation'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { Hoshi } from 'react-native-textinput-effects';
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-cards';


class AddExpenseScreen extends React.Component {

    static navigationOptions = ({ navigation}) => {
		const params = navigation.state.params || {};
		return {
            headerTitle: 'Add Expense',
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
			<CardTitle
				subtitle="Expense"
			/>
			<CardContent> <Hoshi label={'Purchase:'} borderColor={'#3838D8'} />
						  <Hoshi label={'Price ($):'} borderColor={'#3838D8'} />
						  
												
			 </CardContent>
			<CardAction 
				separator={true} 
				inColumn={false}>
				<CardButton
					onPress={() => {this.props.navigation.navigate('Expenses1')}}
					title="Add Expense"
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
export default AddExpenseScreen;


 







