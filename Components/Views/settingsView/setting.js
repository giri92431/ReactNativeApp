import React ,{Component} from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-native';



 export default class Setting extends Component{

	styles = StyleSheet.create({
		
		title: {
			fontSize: 36,
			fontWeight: 'bold',
		 color: '#436060',
      textAlign: 'center',
     
		},
		container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'space-between'
    },
	});
 	render(){
 		return(
 			<View style={this.styles.container}>
 				<Text style={this.styles.title }>Thank you</Text>
				 <Text style={this.styles.title }>We are at the end of Demo</Text>
 			</View>
 		)
 	}
 }