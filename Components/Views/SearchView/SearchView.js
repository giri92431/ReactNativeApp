import React ,{Component} from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,Image,WebView,
} from 'react-native';
import { Rating } from 'react-native-elements';


import DataFactoryApi from './../../../Data/DataFactory'

 export default class SearchView extends Component{

  tmp_array = this.getdata()
  getdata(){
    var homeData = new DataFactoryApi('search')
    return homeData.createData()
  }

  _image(item){
    return(
      item.map((img,j)=>
      <Image key={j}
      style={{width: 300, height: 250}}
      source={{uri: img}}
      />
    )
    )
  }
  _CommentAmazon(item){
    if(item.length != 0)
    {
      
      return(
        <View>
        <Text> Review on amazon</Text>
        {item.map((ama,k)=>
        <Text key={k}>{ama}</Text>
      )}
      </View>
      )
    }
  }
  _CommentTwitter(item){
    if(item.length != 0)
    {
      
      return(
        <View>
        <Text> Review on Twitter</Text>
        {item.map((twt,k)=>
        <Text key={k} >{twt}</Text>
      )}
      </View>
      )
    }
  }

  _CommentFacebook(item){
    if(item.length != 0)
    {
      
      return(
        <View>
        <Text> Review on facebook</Text>
        {item.map((twt,k)=>
        <Text key={k}>{twt}</Text>
      )}
      </View>
      )
    }
  };

  _CommentSnapDeal(item){
    if(item.length != 0)
    {
      
      return(
        <View>
        <Text> Review on sanpdeal</Text>
        {item.map((twt,k)=>
        <Text key={k}>{twt}</Text>
      )}
      </View>
      )
    }
  };

 	render(){
 		return(
      <ScrollView >
      <View>
      {
        this.tmp_array.map((item, i) => (
          <View key={i}>
            <Text>{item.name}</Text>
            <View>
              {
                this._image(item.image)
              }
            </View>
            <Rating
                showRating
                type="star"
                fractions={1}
                startingValue={item.rating}
                readonly
                imageSize={30}
                onFinishRating={this.ratingCompleted}
                style={{ paddingVertical: 10 }}
              />
              {this._CommentAmazon(item.comments.amazon)}
              {this._CommentSnapDeal(item.comments.sanpdeal)}
              {this._CommentTwitter(item.comments.twitter)}
              {this._CommentFacebook(item.comments.facebook)}
              
            
          </View>
          
        )
      )
      }
    </View>
    </ScrollView>
   )
 					
 		
 	}
 }