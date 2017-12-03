import React ,{Component} from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { SearchBar ,Avatar,Header} from 'react-native-elements'

 export default class Headder extends Component{
	
  render(){
  	return(
      
      <Header
      leftComponent={{ icon: 'menu', color: '#fff' }}
      centerComponent={
          <SearchBar round 
          containerStyle={{ backgroundColor: '#0084ff' ,
                            borderBottomColor:'#0084ff',
                            borderTopColor :'#0084ff' , top:15, minWidth: 240 }}
          placeholder='Search...' />}
      innerContainerStyles={{ backgroundColor: '#0084ff' }}
      outerContainerStyles={{ backgroundColor: '#0084ff' }}
      rightComponent={
        <Avatar
          small  rounded containerStyle={{top:10}}
          source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/kfriedson/128.jpg"}}
          onPress={() => console.log("Works!")}
          activeOpacity={0.7}
        />
      }
    />
  	)
  }
}