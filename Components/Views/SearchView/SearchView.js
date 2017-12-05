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
  styles = StyleSheet.create({
		
		title: {
			fontSize: 24,
			fontWeight: 'bold',
			padding: 5,
      color: '#436060',
      textAlign: 'center',
     
		},
		commentsTitle: {
      fontSize:20,
      color: '#587272',
      textAlign:'center',
      padding:5,textDecorationLine: 'underline',
    },
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'space-between'
    },
    video: {
      marginTop: 20,
      minHeight: 290,
      width: 320,
      flex: 1
    },
    image:{
      width: 300, height: 300
    },
    Center:{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'space-between',
    }

		
	});
  _image(item){
    return(
      <View style= {this.styles.Center}>
      {
        item.map((img,j)=>
          <Image key={j}
          style={this.styles.image}
          source={{uri: img}}
          />
    )}
    </View>
    )
  }
  _CommentAmazon(item){
    if(item.length != 0)
    {
      
      return(
        <View>
        <Text style={this.styles.commentsTitle}> Review on amazon</Text>
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
        <Text style={this.styles.commentsTitle}> Review on Twitter</Text>
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
        <Text style={this.styles.commentsTitle}> Review on facebook</Text>
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
        <Text style={this.styles.commentsTitle}> Review on filpkart</Text>
        {item.map((twt,k)=>
        <Text key={k}>{twt}</Text>
      )}
      </View>
      )
    }
  };
  _webView(item){
    if(item.length != 0)
    {
      
    return(
      <View>
        <Text style={this.styles.commentsTitle}>Videos on youtube</Text>
        {item.map((vid,m)=>
         <View key ={m} style={this.styles.container}>
          <WebView
            source={{uri: vid}}
            style={this.styles.video}
            
         />
        </View>
        )}
       
      </View>
    )
  }
  }

 	render(){
 		return(

      <ScrollView >
      <View>
      {
        this.tmp_array.map((item, i) => (
          <View key={i}>
          
            <Text style={this.styles.title}>{item.name}</Text>
            <View>
              {
                this._image(item.image)
              }
            </View>
            <View style={this.styles.Center}>
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
              </View>
              <View style={{margin:10}}>
              {this._CommentAmazon(item.comments.amazon)}
              {this._CommentSnapDeal(item.comments.filpkart)}
              {this._CommentTwitter(item.comments.twitter)}
              {this._CommentFacebook(item.comments.facebook)}
             { this._webView(item.video)}
             </View>
          <View style={{height:400}}></View>
          </View>
        )
      )
      }
    </View>
    </ScrollView>
   )
 					
 		
   }
   

 }