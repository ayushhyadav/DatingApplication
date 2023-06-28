import React, { Component } from 'react'
import { View,Text } from 'react-native'
import ComponentC from './ComponentC'

export default class App extends Component {
  render() {
    return (
      <View style={{marginTop:50}}>
   <Text>ComponentB</Text> 
   <ComponentC/>
  </View>
    )
  }
}
