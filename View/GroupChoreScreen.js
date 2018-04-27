import React, { Component } from 'react';
import {Text, View, StyleSheet, TextInput, Button, TouchableOpacity, ScrollView, Picker, SectionList} from 'react-native'



class GroupChoreScreen extends React.Component {
static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};

    return {
      headerTitle: 'Group Chores',
      headerRight: (
        <Button
          onPress={() => navigation.navigate('NewChore')}
          title="Add Chore"
        />
      ),
    };
}
  render() {
    return (
      <View style={styles.container}>
      <SectionList
          sections={[
            {title: 'Abby', data: ['Wash Dishes']},
            {title: 'Emma', data: ['Buy Groceries', 'Vacuum', 'Take Trash Out']},
            {title: 'John', data: ['Cook Dinner', 'Fix Sink']},
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
          renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
          keyExtractor={(item, index) => index}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})

export default GroupChoreScreen;