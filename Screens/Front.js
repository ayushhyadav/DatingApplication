import React, { Component } from 'react'
import {
    IView,
    SafeAreaView,
    Image,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    useColorScheme,
    View,
    Botton,
    TouchableOpacity,
    ImageBackground
  } from 'react-native';

export default class Front extends Component {
    constructor(props){
        super(props)
        this
      }
  render() {
    return (
        <ImageBackground style={{width:'auto',alignItems:'center',height:'100%'}} source={require('../Images/background1.png')}> 
        <Image style={{width:'37%',height:'21%',marginTop:97}} source={require('../Images/MaskGroup.png')}/>
        <Text style={{fontSize:30,fontWeight:'bold', marginTop:10}}>App Name</Text>
        {/* <View> */}
        <TouchableOpacity onPress={()=>this.props.navigation.navigate('Contact')}  style={{marginTop:220,backgroundColor:'#FFFFFF',width:"65%",height:50,alignItems:'center',justifyContent:'center',borderRadius:5,}}>
         <View style={{flexDirection:'row'}}>
         <Image style={{width:18,height:30, alignItems:'center',justifyContent:'center'}} source={require('../Images/Group64.png')} ></Image>
          <Text style={{ fontSize:15 ,fontWeight:'bold',color:'black', marginLeft:10, marginTop:4}} >Continue With Phone No.</Text>
         </View>
        </TouchableOpacity>
        <TouchableOpacity  style={{marginTop:15,width:"65%",height:50,alignItems:'center',justifyContent:'center',borderRadius:5,}}>
         <View style={{flexDirection:'row'}}>
         <Image style={{width:'100%',height:48, alignItems:'center',justifyContent:'center'}} source={require('../Images/login-butt.png')} ></Image>
          {/* <Text style={{ fontSize:15 ,fontWeight:'bold',color:'black', marginLeft:10, marginTop:4}} >Continue With Phone No.</Text> */}
         </View>
        </TouchableOpacity>
        <TouchableOpacity  style={{marginTop:15,width:"65%",height:50,alignItems:'center',justifyContent:'center',borderRadius:5,}}>
         <View style={{flexDirection:'row'}}>
         <Image style={{width:'100%',height:47, alignItems:'center',justifyContent:'center'}} source={require('../Images/megygi.png')} ></Image>
          {/* <Text style={{ fontSize:15 ,fontWeight:'bold',color:'black', marginLeft:10, marginTop:4}} >Continue With Phone No.</Text> */}
         </View>
        </TouchableOpacity>
        {/* </View> */}
           
        </ImageBackground>
      
    )
  }
}
