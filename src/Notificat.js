import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler'
import { Text, View, StyleSheet, Button } from 'react-native';
import React from 'react';
import 'react-native-gesture-handler';
export default class Notificat extends React.Component {
  constructor(){
    super()
    this.state = {
      count: 0
    }
  }

  onPress = () => {
		this.setState({
			count: this.state.count + 1,
		});
	};
  
 render(){
  return (
    <View style={style.view}>
     <Text>Hello Notificat</Text>
    </View>
  );
 
 }
}

const style = StyleSheet.create({
  view:{
    flex : 1,
    justifyContent: "center",
    alignItems: "center"
  }
})