import React ,{Component} from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
	View,
	ScrollView,Image,WebView, ImageBackground
} from 'react-native';
import { Button } from 'react-native-elements'
import { Ionicons } from '@expo/vector-icons'
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
								<Text style={this.styles.title}>{prop.Content}</Text>
								<View style={this.styles.buttons}>
									<Button raised 
										backgroundColor ='#0084ff'
										title='like'
										icon={{name: 'thumb-up', }}/>
									<Button raised
										backgroundColor ='#0084ff'
										title='Comment'
										icon={{name: 'comment'}} />
									<Button raised
										backgroundColor ='#0084ff'
										title='Share'
										icon={{name: 'share'}} />
										</View>
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
								<Text style={this.styles.title}>{prop.Content}</Text>
								<View style={this.styles.buttonsvideo}>
									<Button raised 
										backgroundColor ='#0084ff'
										title='like'
										icon={{name: 'thumb-up', }}/>
									<Button raised
										backgroundColor ='#0084ff'
										title='Comment'
										icon={{name: 'comment'}} />
									<Button raised
										backgroundColor ='#0084ff'
										title='Share'
										icon={{name: 'share'}} />
										</View>
						</View>
						
					);
				}
      })}
 		</ScrollView>
 		)
	 }
	 
	 styles = StyleSheet.create({
		container: {
			borderWidth: 1,
			borderColor: '#d6d7da',
			height:400,
			justifyContent: 'center',
			alignItems: 'center',
			
		},
		title: {
			fontSize: 16,
			fontWeight: 'bold',
			padding: 5,
			color: '#46484c'
			
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
			maxHeight: 300,
			width: 320,
			flex: 1
		}
		,
		buttons:{
			justifyContent: 'center',
			flexDirection: 'row', 
			borderColor: '#d6d7da',
			justifyContent:'space-around',
			top:12
			
		},
		buttonsvideo:{
			justifyContent: 'center',
			flexDirection: 'row', 
			borderColor: '#d6d7da',
			justifyContent:'space-around',
			top:-2
			
		}
	});
 }