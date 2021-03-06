import React ,{Component} from 'react'
import {
  AppRegistry,
  StyleSheet,
	Text,
	Image,
  View,
	ScrollView
} from 'react-native';
import Swiper from 'react-native-swiper';

 export default class Trending extends Component{
	 styles = StyleSheet.create({
		wrapper: {
			height:400,
			borderRadius:4,
			padding:5,
			
		},
		slide: {
			flex: 1,
			justifyContent: 'center',
			alignItems: 'center',
			
		},
		text: {
			fontSize: 16,
			//fontWeight: 'bold',
			padding: 5,
			color: '#46484c'
		},
		headdertext :{
			fontSize: 28,
			fontWeight: 'bold',
			//justifyContent: 'center',
			textAlign: 'center',
			color:'#436060'
		},
		Topictext:{
			fontSize:20,
			color: '#587272',
			textAlign:'center',
			padding:5,
			textDecorationLine: 'underline'
		}
		
	})



 	render(){
 		return(
			 <ScrollView >
				 <Text style= {this.styles.headdertext}>Trending </Text>
			 <View style={this.styles.wrapper}>
			 <Text style= {this.styles.Topictext}>Hot in PepsiCo</Text>
				<Swiper >
					<View style={this.styles.slide}>
					<Image
								style={{width: 300, height: 250}}
								source={{uri: 'http://www.pepsico.com/images/album/infographics/lemonlemon_header_6.jpeg?sfvrsn=0'}}
       				 />
						<Text style={this.styles.text}>PepsiCo Designs: Creating the World of Lemon Lemon</Text>
					</View>
					<View style={this.styles.slide}>
					<Image
								style={{width: 300, height: 250}}
								source={{uri: 'http://www.pepsico.com/images/album/banner-images/great-tastes/great_taste_banner01.jpg?'}}
       				 />
						<Text style={this.styles.text}>Rold Gold Introduces New Sweet And Savory Flavor Combinations To Pair Perfectly With Busy Lives</Text>
					</View>
					<View style={this.styles.slide}>
					<Image
								style={{width: 300, height: 250}}
								source={{uri: 'https://marketingweek.imgix.net/content/uploads/2013/02/trop50-campaign-product-2013-pepsico-460.jpg?'}}
       				 />
						<Text style={this.styles.text}>PepsiCo aims for Trop50 to be market leader</Text>
					</View>
				</Swiper>
			</View>



			<View style={this.styles.wrapper}>
			 <Text style= {this.styles.Topictext}>Hot in Optimum nutrition</Text>
				<Swiper >
					<View style={this.styles.slide}>
					<Image
								style={{width: 300, height: 250}}
								source={{uri: 'https://www.optimumnutrition.com/us/img/media/products/protein-water-6322.jpeg'}}
       				 />
						<Text style={this.styles.text}>New PROTEIN WATER from optimum</Text>
					</View>
					<View style={this.styles.slide}>
					<Image
								style={{width: 300, height: 250}}
								source={{uri: 'https://www.endurancebusiness.com/wp-content/uploads/2017/07/170713_Optimum-Nutrition-AM-Series-800x445.jpg'}}
       				 />
						<Text style={this.styles.text}>Optimum Nutrition shakes up mornings with new protein-rich breakfast options</Text>
					</View>
					<View style={this.styles.slide}>
					<Image
								style={{width: 300, height: 250}}
								source={{uri: 'https://img.grouponcdn.com/deal/2AoTFTwEdEXffu7Whe3t3LufcA35/2A-1285x771/v1/c700x420.jpg'}}
       				 />
						<Text style={this.styles.text}>Quick bite with ON Cake</Text>
					</View>
				</Swiper>
			</View>




			<View style={this.styles.wrapper}>
			 <Text style= {this.styles.Topictext}>Hot in Nestle India</Text>
				<Swiper >
					<View style={this.styles.slide}>
					<Image
								style={{width: 300, height: 250}}
								source={{uri: 'https://i2.wp.com/www.indiaretailing.com/wp-content/uploads/2016/08/maggi-noodles.jpg'}}
       				 />
						<Text style={this.styles.text}>Maggi compliant with latest FSSAI norms, no ash added: Nestle</Text>
					</View>
					<View style={this.styles.slide}>
					<Image
								style={{width: 300, height: 250}}
								source={{uri: 'http://static-news.moneycontrol.com/static-mcnews/2017/09/gst_cgst_igst_utgst-770x433-770x433.jpg'}}
       				 />
						<Text style={this.styles.text}> FMCG companies asked to display new MRP on existing stock</Text>
					</View>
					<View style={this.styles.slide}>
					<Image
								style={{width: 300, height: 250}}
								source={{uri: 'http://www.thehindu.com/news/article21039860.ece/alternates/FREE_960/Maggi%20Nestle'}}
       				 />
						<Text style={this.styles.text}>Maggi makers Nestle, distributors fined ₹62 lakh in UP</Text>
					</View>
				</Swiper>
			</View>





			<View style={this.styles.wrapper}>
			 <Text style= {this.styles.Topictext}>Hot in McDonald’s</Text>
				<Swiper >
					<View style={this.styles.slide}>
					<Image
								style={{width: 300, height: 250}}
								source={{uri: 'https://i2.wp.com/www.hungryforever.com/wp-content/uploads/2016/07/McDonalds-Featured.jpg?ssl=1?w=1269&strip=all&quality=80'}}
       				 />
						<Text style={this.styles.text}>Enjoy A Mexican And Lebanese McAloo Tikki at McDonald’s India This Monsoon</Text>
					</View>
					<View style={this.styles.slide}>
					<Image
								style={{width: 300, height: 250}}
								source={{uri: 'https://static.seekingalpha.com/uploads/2017/12/4/728256-151238987710437.png'}}
       				 />
						<Text style={this.styles.text}> McDonald's: What's It Really Worth?k</Text>
					</View>
					<View style={this.styles.slide}>
					<Image
								style={{width: 300, height: 250}}
								source={{uri: 'http://4.bp.blogspot.com/-qXehNZum7OY/UXIFIFWDfXI/AAAAAAAAfgU/yH3eigRriyQ/s1000/539734_524836070896304_1609033588_n.jpg'}}
       				 />
						<Text style={this.styles.text}>MCDONALD'S NEW BLACK PEPPER FLAMER BURGER VS MCSPICY BURGER</Text>
					</View>
				</Swiper>
			</View>

			

			</ScrollView>
 		)
 	}
 }