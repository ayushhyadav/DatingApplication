// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow strict-local
//  */

// import React,{ Component} from 'react';
// import {
//   IView,
//   SafeAreaView,
//   Image,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   TextInput,
//   useColorScheme,
//   View,
//   Botton,
//   TouchableOpacity
// } from 'react-native';
// import { Touchable } from 'react-native/types';


// export default class LoginScreens extends Component {
//   constructor(props){
//     super(props)
//     this
//   }

//   render() {
//     return (
//       <View style={{width:'100%' , alignItems:'center',height:'120%',backgroundColor:'#1E90FF', }}>
//         <Text style={{color:'white',marginTop:110,fontSize:60,fontWeight:'bold'}}>boniad</Text>
//        <View  style={{borderBottomWidth:1,width:'80%',alignItems:'center',justifyContent:'center', color:'white',borderBottomColor:'white',flexDirection:'row', color:'white', marginTop:160,height:40}}>
//         <Image style={{width:20,height:20 ,marginBottom:-20 }} source={require('../Images/icons8-user-50.png')}></Image>
//         <TextInput 
//         style={{ color:'white',width:'90%',textAlign:'center',marginBottom:-20}} 
//         placeholder='User Name' placeholderTextColor={'white'}/>
//         </View>
//         <View  style={{borderBottomWidth:1,width:'80%',alignItems:'center',justifyContent:'center', color:'white',borderBottomColor:'white',flexDirection:'row', color:'white', marginTop:15,height:40}}>
//         <Image style={{width:20,height:20,marginBottom:-20 }} source={require('../Images/icons8-password-60.png')}></Image>
//         <TextInput 
//         style={{ color:'white',width:'90%',textAlign:'center',marginBottom:-20 }} 
//         placeholder='Password' placeholderTextColor={'white'}/>
//         </View>
       
         
//         <TouchableOpacity style={{marginTop:80,borderWidth:1,backgroundColor:'#D3D3D3',width:"55%",height:40,borderRadius:25,alignItems:'center',justifyContent:'center',}}>
//           <Image style={{width:15,height:27 ,}} source={require('../Images/icons8-password-60.png')} ></Image>
//         </TouchableOpacity>
//        <View style={{marginTop:35,width:"30%",height:30,alignItems:'center',justifyContent:'center',flexDirection:'row',}}>
//        <TouchableOpacity >
//           <Text style={{fontSize:16,fontWeight:"300" ,color:'white'}}>create newuser?</Text>
//         </TouchableOpacity>
//         <TouchableOpacity onPress={()=>this.props.navigation.navigate()} >
//           <Text style={{fontSize:16,fontWeight:"300" ,color:'white',marginLeft:8}}>Signup</Text>
//         </TouchableOpacity>
//        </View>
       
//       </View>
      
//     )
//   }
// }

