import React ,{Component} from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';

import { List, ListItem } from 'react-native-elements'

 export default class Category extends Component{

   list = [
    {
      title: 'Electronics',
      icon: 'av-timer'
    },
    {
      title: 'Grocery',
      icon: 'flight-takeoff'
    },
    ,
    {
      title: 'Beauty',
      icon: 'flight-takeoff'
    },
    {
      title: 'Womens Fashion',
      icon: 'flight-takeoff'
    },
    {
      title: 'Mens Fashion',
      icon: 'flight-takeoff'
    },
    {
      title: 'Sports',
      icon: 'flight-takeoff'
    },
    {
      title: 'Health',
      icon: 'flight-takeoff'
    },
    {
      title: 'Travel',
      icon: 'flight-takeoff'
    },
    {
      title: 'Luggage',
      icon: 'flight-takeoff'
    },
    {
      title: 'Automobile',
      icon: 'flight-takeoff'
    },
    {
      title: 'Mobiles, Computers',
      icon: 'flight-takeoff'
    },
    {
      title: 'Toys',
      icon: 'flight-takeoff'
    },
    {
      title: 'Baby products',
      icon: 'flight-takeoff'
    },
    {
      title:'watches',
      icon:'flight-takeoff'
   }

  ]
 	render(){
 		return(
 		<ScrollView >
        <List>
        {
          this.list.map((item, i) => (
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