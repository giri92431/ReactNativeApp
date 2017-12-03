import React ,{Component} from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
	View,
	ScrollView,Image,WebView
} from 'react-native';

import DataFactoryApi from './../../../Data/DataFactory'


 export default class Home extends Component{

	tmp_array = this.getdata()
	getdata(){
		var homeData = new DataFactoryApi('Home')
		return homeData.createData()
	}
	
 	render(){
 		return(
 		<ScrollView >
 			{this.tmp_array.map((prop, key) => {
				 
				 if (prop.type == 'text')
				 {
					return (
						<View key={prop.index} style={this.styles.container}>
							<Image
								style={{width: 300, height: 250}}
								source={{uri: prop.picture}}
       				 />
								<Text>{prop.Content}</Text>
						</View>
					);
				}
				else{
					return(
							<View key={prop.index} style={this.styles.container}>
							<WebView
        				source={{uri: prop.picture}}
								style={this.styles.video}
							/>
							</View>
					);
				}
      })}
 		</ScrollView>
 		)
	 }
	 
	 styles = StyleSheet.create({
		container: {
			borderRadius: 4,
			borderWidth: 0.5,
			borderColor: '#d6d7da',
			height:300,
			justifyContent: 'center',
			alignItems: 'center',
		},
		title: {
			fontSize: 19,
			fontWeight: 'bold',
		},
		activeTitle: {
			color: 'red',
		},
		canvas: {
			width: 150,
			height:150
			
		},
		video: {
			marginTop: 20,
			maxHeight: 200,
			width: 320,
			flex: 1
		}
	});
 }