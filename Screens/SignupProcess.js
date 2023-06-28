import React,{Component} from "react";
import { View,Text,Dimensions,ScrollView, FlatList,Modal, TouchableOpacity } from "react-native";
import Personalinfo from "./Personalinfo";
import Personalinfo2 from "./Personalinfo2";
import Personalinfo3 from "./Personalinfo3";
import Personalinfo4 from "./Personalinfo4";
import Personalinfo5 from "./Personalinfo5";
const DimensionsHight = Dimensions.get('screen').height
const DimensionsWidth = Dimensions.get('screen').width
const screens =[Personalinfo,Personalinfo4,Personalinfo2,Personalinfo3,Personalinfo5]
export default class SignupProcess extends Component{
    constructor(props){
        super(props)
        this.state={
            currentIndex:0
        }
    }
    render(){
        return(
            <View style={{backgroundColor:'white',alignItems:'center'}}>
                <FlatList 
                  data={screens}
                  horizontal={true}
                  renderItem={({item,index})=>
                  <View style={{width:15,height:15,borderRadius:10,backgroundColor:this.state.currentIndex == index?'pink':'grey',marginTop:10,marginBottom:10,marginLeft:5}}>
                  </View>
                }
                />
                <ScrollView
                 horizontal={true}
                 showsHorizontalScrollIndicator={false}
                 scrollEventThrottle={16}
                 pagingEnabled
                 onScroll={event => { 
                    const index = Math.round(event.nativeEvent.contentOffset.x / DimensionsWidth);
                    this.setState({currentIndex:index})
                    console.log(index);
                  
                  }}
                >
               <Personalinfo width ={DimensionsWidth} height={DimensionsHight}/>
               <Personalinfo2 width ={DimensionsWidth} height={DimensionsHight}/>
               <Personalinfo3 width ={DimensionsWidth} height={DimensionsHight}/>
               <Personalinfo4 width ={DimensionsWidth} height={DimensionsHight}/>
               <Personalinfo5 width ={DimensionsWidth} height={DimensionsHight}/>
               
               </ScrollView>
            </View>
        )
    }
    
}