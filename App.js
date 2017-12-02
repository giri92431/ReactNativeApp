import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppTabbar from './Components/TabsView/tabs'
import Headder from './Components/HeadderView/Headder'

export default class App extends React.Component {

  render() {
    return (
      <View style={{flex: 1}}>
        <Headder/>
        <AppTabbar />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
