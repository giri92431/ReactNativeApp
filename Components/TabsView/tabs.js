
import React, { PureComponent } from 'react';
import { Animated, View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { TabViewAnimated, TabBar } from 'react-native-tab-view';
// import SimplePage from './SimplePage';

import type { Route, NavigationState } from 'react-native-tab-view/types';

//views

import Home from './../Views/HomeView/home'
import Category from './../Views/CategoryView/category'
import Trending from './../Views/TrendingView/trending'
import Subscribe from './../Views/subscribeView/subscribe'
import Notification from './../Views/NotificationView/notification'
import Setting from './../Views/settingsView/setting'



type State = NavigationState<
  Route<{
    key: string,
    title: string,
    icon: string,
  }>
>;

export default class AppTabbar extends PureComponent<*, State> {
  static title = 'Bottom bar with indicator';
  static appbarElevation = 5;

  state = {
    index: 0,
    routes: [
      { key: '1', title: '', icon: 'ios-home' },
      { key: '2', title: '', icon: 'ios-list-outline' },
      { key: '3', title: '', icon: 'ios-pulse' },
      { key: '4', title: '', icon: 'ios-filing' },
      { key: '5', title: '', icon: 'ios-search' },
      { key: '6' , title: '', icon:'ios-cog'}
    ],
  };

  _handleIndexChange = index =>
    this.setState({
      index,
    });

  _renderIndicator = props => {
    const { width, position } = props;

    const translateX = Animated.multiply(position, width);

    return (
      <Animated.View
        style={[styles.container, { width, transform: [{ translateX }] }]}
      >
        <View style={styles.indicator} />
      </Animated.View>
    );
  };

  _renderIcon = ({ route }) => (
    <Ionicons name={route.icon} size={30} style={styles.icon} />
  );

  _renderBadge = ({ route }) => {
    if (route.key === '5') {
      return (
        <View style={styles.badge}>
          <Text style={styles.count}>42</Text>
        </View>
      );
    }
    return null;
  };

  _renderFooter = props => (
    <TabBar
      {...props}
      renderIcon={this._renderIcon}
      //renderBadge={this._renderBadge}
      renderIndicator={this._renderIndicator}
      style={styles.tabbar}
      tabStyle={styles.tab}
    />
  );

  _renderScene = ({ route }) => {
    switch (route.key) {
      case '1':
        return (
          <Home
            state={this.state}
            style={{ backgroundColor: '#ff4081' }}
          />
        );
      case '2':
        return (
          <Category
            state={this.state}
            style={{ backgroundColor: '#673ab7' }}
          />
        );
      case '3':
        return (
          <Trending
            state={this.state}
            style={{ backgroundColor: '#4caf50' }}
          />
        );
      case '4':
        return (
          <Subscribe
            state={this.state}
            style={{ backgroundColor: '#4caf50' }}
          />
        );
        case '5':
        return (
          <Notification
            state={this.state}
            style={{ backgroundColor: '#4caf50' }}
          />
          );
        case '6':
        return (
          <Setting
            state={this.state}
            style={{ backgroundColor: '#4caf50' }}
          />
        );
      
        
      
      default:
        return null;
    }
  };

  render() {
    return (
      <TabViewAnimated
        style={[styles.container, this.props.style]}
        navigationState={this.state}
        renderScene={this._renderScene}
        renderFooter={this._renderFooter}
        onIndexChange={this._handleIndexChange}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabbar: {
    backgroundColor: '#222',
    height:60,

    
  },
  tab: {
    padding: 0,

  },
  icon: {
    backgroundColor: 'transparent',
    color: 'white',
  },
  indicator: {
    flex: 1,
    backgroundColor: '#0084ff',
    margin: 4,
    borderRadius: 2,
  },
  badge: {
    marginTop: 4,
    marginRight: 32,
    backgroundColor: '#f44336',
    height: 18,
    width: 18,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
  },
  count: {
    color: '#fff',
    fontSize: 8,
    fontWeight: 'bold',
    marginTop: -2,
  },
});