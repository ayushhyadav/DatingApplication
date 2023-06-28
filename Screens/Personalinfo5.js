import React, { Component } from 'react'
import { View ,Image,Text,TouchableOpacity} from 'react-native'

export default class Personalinfo5 extends Component {
  render() {
    return (
    <View style={{  marginTop: 50,
        backgroundColor: 'white',
        height: this.props.height,
        // height:"85%",
        alignItems: 'center',
        width: this.props.width,
        
    }}> 
        <Image style={{width:'85%',height:"32%",marginTop:40}} source={require('../Images/happy.png')}></Image>
        <Text style={{color:"#F76A7B",fontSize:32,fontWeight:'500' ,marginTop:19}}>You are all Set </Text>
       
        <TouchableOpacity style={{backgroundColor:'#5363DD',borderRadius:25,width:'85%',height:35,alignItems:'center',justifyContent:'center',marginTop:230}}>
               <Text style={{color:'white',fontSize:20,fontWeight:'600'}}>Continue</Text>
                    </TouchableOpacity>
       
    </View>
    )
  }
}
