import React from 'react';
import styles from "../styles";
import { StyleSheet, Text, View, Image, Alert, Button } from 'react-native';
import { StackNavigator } from 'react-navigation'; // 1.1.1

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

export default GroupSettingsScreen;