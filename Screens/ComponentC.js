import React, { Component } from 'react'
import { View,Text } from 'react-native'
import ComponentD from './ComponentD'

export default class App extends Component {
  render() {
    return (
        <View style={{marginTop:50}}>
   <Text>ComponentC</Text> 
   <ComponentD/>
  </View>
    )
  }
}
