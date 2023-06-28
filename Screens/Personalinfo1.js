import React, { Component } from 'react'
import { View,Image,Text, ImageBackground,TouchableOpacity,Modal, Button } from 'react-native'

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

  <Image style={{width:'80%',height:"40%",marginTop:83}} source={require('../Images/48429871.png')}></Image>

  <Modal
               visible={true}
               animationType="slide"
         transparent={true}
               >
                <View style={{backgroundColor:'rgba(0,0,0,0.5)',alignItems:'center',justifyContent:'flex-end',width:'100%',height:'100%'}}>
                    <View style={{backgroundColor:'white',height:250,width:'100%',borderTopRightRadius:20,borderTopLeftRadius:20,alignItems:'center',justifyContent:'center'}}>
                        <Text style={{fontSize:19,fontWeight:'600',color:"#1B1B1B"}}>OTP Verification</Text>
                        <Text style={{fontSize:28,fontWeight:'600',color:'#F76A7B',marginTop:20,marginBottom:20}}>Successful</Text>
                        <TouchableOpacity onPress={()=>this.props.navigation.navigate('SignupProcess')} style={{height:32,width:'50%',borderRadius:6,backgroundColor:'#5363DD',alignItems:'center',justifyContent:'center'}}>
                            <Text style={{fontSize:13,fontWeight:'600',color:'white'}}>Continue</Text>
                        </TouchableOpacity>
                    </View>
                </View>
               </Modal>
   </View>

    )
  }
}
