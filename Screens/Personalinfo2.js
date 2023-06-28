import React, { Component } from 'react'
import { View,Image,Text, ImageBackground,TouchableOpacity, Button, TextInput } from 'react-native'

export default class Personalinfo extends Component {
  render() {
    return (
   <View style={{
    backgroundColor:'white',height:this.props.height,alignItems:'center',width:this.props.width

   }}>
    <Text style={{color:"#F76A7B",fontSize:30,fontWeight:'bold' ,marginTop:130}}>My Name is</Text>
    <TextInput 
        style={{ borderWidth:1,fontSize:22,fontWeight:'bold',margin:45, borderColor:'#D4D4D4',width:'85%',marginTop:40,borderRadius:20,padding:12}} 
        placeholder='Name' placeholderTextColor={'#1B1B1B'}/>
 
 <TouchableOpacity style={{backgroundColor:'#5363DD',width:'85%',height:"7.3%",borderRadius:25,alignItems:'center',justifyContent:'center',}}>
   <Text style={{color:'white',fontSize:20,fontWeight:'600'}}>Continue</Text>
        </TouchableOpacity>

  <Image  style={{width:'85%',height:"42%",marginTop:20}} source={require('../Images/52890461.png')}></Image>
   </View>

    )
  }
}
