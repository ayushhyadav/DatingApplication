import React, { Component } from 'react'
import { View,Image,Text, ImageBackground,TouchableOpacity, Button, TextInput } from 'react-native'

export default class Personalinfo3 extends Component {
  render() {
    return (
   <View style={{
    backgroundColor:'white',height:this.props.height,alignItems:'center',width:this.props.width

   }}>
    <Text style={{color:"#F76A7B",fontSize:32,fontWeight:'500' ,marginTop:130}}>My Birthday</Text>
   <View style={{flexDirection:'row'}}>
   <TextInput 
        style={{ borderWidth:1,fontSize:18,margin:8,textAlign:'center', borderColor:'#D4D4D4',width:'22%',marginTop:40,borderRadius:20}} 
        placeholder='DD'/>
        <TextInput 
        style={{ borderWidth:1,fontSize:18,margin:8,textAlign:'center', borderColor:'#D4D4D4',width:'25%',marginTop:40,borderRadius:20}} 
        placeholder='MM' />
        <TextInput 
        style={{ borderWidth:1,fontSize:18,margin:8,textAlign:'center', borderColor:'#D4D4D4',width:'30%',marginTop:40,borderRadius:20}} 
        placeholder='YYYY' />
 
   </View>
 <TouchableOpacity style={{backgroundColor:'#5363DD',width:'85%',height:"7%",borderRadius:25,alignItems:'center',justifyContent:'center',marginTop:30}}>
   <Text style={{color:'white',fontSize:20,fontWeight:'600'}}>Continue</Text>
        </TouchableOpacity>

  <Image style={{width:'85%',height:"40%",marginTop:70}} source={require('../Images/56399961.png')}></Image>
   </View>

    )
  }
}
