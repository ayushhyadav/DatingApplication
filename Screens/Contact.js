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
    ImageBackground,
 
  } from 'react-native';

export default class Contact extends Component {
    constructor(props){
        super(props)
        this
      }
  render() {
    return (
     <ImageBackground style={{alignItems:'center',backgroundColor:'white',height:'100%'} }>
        <Image style={{width:'25%',height:100, marginTop:55}} source={require('../Images/MaskGroup.png')}></Image>
        <Text style={{fontSize:25,fontWeight:'bold', marginTop:10}}>App Name</Text>

        <Text style={{fontSize:23,fontWeight:'bold',color:'#F76A7B', marginTop:90}}> My Phone No.</Text>
           
         
          <View style={{marginTop:20,flexDirection:'row',}}>
           <TouchableOpacity onPress={()=>this.props.navigation.navigate('Otp')}  style={{borderWidth:1,alignItems:'center',justifyContent:'center',borderRadius:14,marginRight:12,width:'20%',flexDirection:'row',borderColor:"#AAAAAA"}}>
            <Text style={{fontSize:17,fontWeight:'bold',color:'black',marginRight:8}}> +91</Text>
            <Image source={require('../Images/ExpandArrow.png')}/>

           </TouchableOpacity>
            <TextInput style={{borderWidth:1,width:'56%',borderRadius:14,borderColor:'#AAAAAA',textAlign:'auto'}}
           placeholder='Phone no.'
           placeholderTextColor={'#AAAAAA'}
          
           
           ></TextInput>
          </View>
          <Image style={{width:'80%',height:"46%",marginTop:20}} source={require('../Images/48429751.png')}></Image>

        
     </ImageBackground>
    )
  }
}
