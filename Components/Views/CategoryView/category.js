import React ,{Component} from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';

import { List, ListItem } from 'react-native-elements'
import DataFactoryApi from './../../../Data/DataFactory'

 export default class Category extends Component{

  tmp_array = this.getdata()
  getdata(){
    var homeData = new DataFactoryApi('category')
    return homeData.createData()
  }
 	render(){
 		return(
 		<ScrollView >
        <List>
        {
          this.tmp_array.map((item, i) => (
            <ListItem
              key={i}
              title={item.title}
              leftIcon={{name: item.icon}}
            />
          ))
        }
      </List>
      </ScrollView>
 		)
 	}
 }