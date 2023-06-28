/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{ Component} from 'react';
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
  TouchableOpacity
} from 'react-native';
import { Touchable } from 'react-native/types';


export default class LoginScreens extends Component {
  constructor(props){
    super(props)
    this
  }

  render() {
    return (
      <View style={{width:'100%' , alignItems:'center',height:'120%',backgroundColor:'#1E90FF', }}>
        {/* <Text style={{color:'white',marginTop:110,fontSize:60,fontWeight:'bold'}}>boniad</Text> */}
        <Image style={{width:90,height:90 ,marginTop:150}} source={require('../Images/icons8-camera-150.png')}></Image>
       <View  style={{borderBottomWidth:1,width:'80%',alignItems:'center',justifyContent:'center', color:'white',borderBottomColor:'white',flexDirection:'row', color:'white', marginTop:80,height:40}}>
        <Image style={{width:20,height:20 ,marginBottom:-20 }} source={require('../Images/icons8-user-50.png')}></Image>
        <TextInput 
        style={{ color:'white',width:'90%',textAlign:'center',marginBottom:-20}} 
        placeholder='User Name' placeholderTextColor={'white'}/>
        </View>
        <View  style={{borderBottomWidth:1,width:'80%',alignItems:'center',justifyContent:'center', color:'white',borderBottomColor:'white',flexDirection:'row', color:'white', marginTop:7,height:40}}>
        <Image style={{width:20,height:20,marginBottom:-20 }} source={require('../Images/icons8-password-60.png')}></Image>
        <TextInput 
        style={{ color:'white',width:'90%',textAlign:'center',marginBottom:-20 }} 
        placeholder='Password' placeholderTextColor={'white'}/>
        </View>
        <View  style={{borderBottomWidth:1,width:'80%',alignItems:'center',justifyContent:'center', color:'white',borderBottomColor:'white',flexDirection:'row', color:'white', marginTop:7,height:40}}>
        <Image style={{width:20,height:20,marginBottom:-20 }} source={require('../Images/icons8-email-24.png')}></Image>
        <TextInput 
        style={{ color:'white',width:'90%',textAlign:'center',marginBottom:-20 }} 
        placeholder='Email' placeholderTextColor={'white'}/>
        </View>
        <View  style={{borderBottomWidth:1,width:'80%',alignItems:'center',justifyContent:'center', color:'white',borderBottomColor:'white',flexDirection:'row', color:'white', marginTop:7,height:40}}>
        <Image style={{width:20,height:20,marginBottom:-20 }} source={require('../Images/icons8-birth-date-48.png')}></Image>
        <TextInput 
        style={{ color:'white',width:'90%',textAlign:'center',marginBottom:-20 }} 
        placeholder='Date of birth' placeholderTextColor={'white'}/>
        </View>
       
         
        <TouchableOpacity onPress={()=>this.props.navigation.navigate('LoginScreens')} style={{marginTop:55,borderWidth:1,backgroundColor:'#D3D3D3',width:"55%",height:40,borderRadius:25,alignItems:'center',justifyContent:'center',}}>
          <Image style={{width:18,height:30 ,}} source={require('../Images/icons8-done-48.png')} ></Image>
        </TouchableOpacity>
      
       
      </View>
      
    )
  }
}

