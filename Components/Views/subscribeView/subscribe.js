import React ,{Component} from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
	View,
	ScrollView,Image
} from 'react-native';
import { Button } from 'react-native-elements';

import DataFactoryApi from './../../../Data/DataFactory'

 export default class Subscribe extends Component{

	tmp_array = this.getdata()
		getdata(){
			var homeData = new DataFactoryApi('Subscribe')
			return homeData.createData()
		}

		


 	render(){
 		return(
 		<ScrollView>
		{
			this.tmp_array.map((prop, key) => {
				return( 
					<View  key={prop.index} style={this.styles.container}>
						<Image
								style={{width: 50, height:50 ,flex:1}}
								source={{uri: prop.image}}
       				 />
						<Text style={{flex:2 ,textAlign:'center'}}>{prop.name}</Text>
						
						<Button
							backgroundColor ='#6379E5'
							buttonStyle ={{flex:2}}
							icon={{name: 'add'}}
							title='Follow' />
							
					</View>
				)

			})
		}
		 </ScrollView>
 		)
	 }
	 
	 styles = StyleSheet.create({
		container: {
			flex: 5,
			flexDirection:'row',
			justifyContent: 'space-between',
			padding:5,
			margin:5,
			borderRadius: 4,
			borderWidth: 0.5,
			borderColor: '#d6d7da',
		}
		})

 }