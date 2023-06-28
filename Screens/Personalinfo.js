import React, { Component } from 'react'
import { View,Image,Text, ImageBackground,TouchableOpacity, Button } from 'react-native'

export default class Personalinfo extends Component {
  render() {
    return (
   <View style={{
    backgroundColor:'white',height:this.props.height,alignItems:'center',width:this.props.width}}>
    <Text style={{color:"#F76A7B",fontSize:30,fontWeight:'bold' ,marginTop:150}}>Ready to get Virgified !</Text>
    <Text style={{color:"#F76A7B",fontSize:30,marginTop:50,fontWeight:'600' }}>I’m a</Text>
  <View style={{flexDirection:'row',marginTop:25}}> 
  <TouchableOpacity style={{borderWidth:1,borderColor:'#D4D4D4',width:"35%",height:55,borderRadius:25,alignItems:'center',justifyContent:'center',marginRight:18}}>
          <Text style={{color:'#1B1B1B',fontSize:20,fontWeight:"600"}}>Male</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{borderWidth:1,borderColor:'#D4D4D4',width:"35%",height:55,borderRadius:25,alignItems:'center',justifyContent:'center',marginLeft:18}}>
          <Text style={{color:'#1B1B1B',fontSize:20,fontWeight:"600"}}>Female</Text>
        </TouchableOpacity>
        
  </View>

  <Image resizeMode='contain' style={{width:'80%',height:"40%",marginTop:53}} source={require('../Images/48429871.png')}></Image>
   </View>

    )
  }
}
