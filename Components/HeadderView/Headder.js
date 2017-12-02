import React ,{Component} from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { SearchBar ,Avatar} from 'react-native-elements'

 export default class Headder extends Component{
	
  render(){
  	return(
      
      <View style={{ flexDirection: 'row' , top: 50 , backgroundColor: '#0084ff'}}>
        <View style= {{flex:1 }}>
                  <SearchBar round 
                  
                    containerStyle={{backgroundColor: '#0084ff' }}
                    placeholder='Type Here...' />
          </View>
          <View style = {{alignItems: 'center',justifyContent: 'center'}}>
          <Avatar
              small  rounded
              source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/kfriedson/128.jpg"}}
              onPress={() => console.log("Works!")}
              activeOpacity={0.7}
            />
            </View>
      </View>
  	)
  }
}