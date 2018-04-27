import {StyleSheet} from 'react-native';

export default StyleSheet.create({

  middle: {
    alignItems: 'center',
  },
  
  calendar: {
    alignItems: 'center',
  },
  
 buttonContainer3: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    margin: 10,
    borderRadius: 10,
},
buttonText: {
    color: 'black',
    fontSize: 20,
    alignItems: 'center'
},

text: {
  color: 'black',
  fontSize: 20,
  alignItems: 'center',
  padding: 10,
},

button: {
    alignItems: 'center',
    justifyContent:'center',
    backgroundColor: 'lightgray',
    margin: 10,
    borderRadius: 10,
    width: 170,
    height: 35
},
input: {
    alignItems: 'center',
    justifyContent:'center',
    backgroundColor: 'white',
    fontSize: 20,
    borderWidth: 1,
    margin: 15,
    height: 40,
    width: 300,
    marginTop: 2,

},
datePicker: {
    alignItems: 'center',
    justifyContent:'center',
    padding: 20,
    height: 40,
    width: 300,
},

timePicker: {
    alignItems: 'center',
    justifyContent:'center',
    padding: 20,
    marginTop: 8,
    height: 40,
    width: 300,
},
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
  },
  
});