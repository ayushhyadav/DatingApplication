import React, { Component } from 'react';
import { View, Text, Button, FlatList, TouchableOpacity } from 'react-native';

const screens = [
  { id: '1', title: 'Pet Lover' },
  { id: '2', title: 'Travel' },
  { id: '3', title: 'Reading' },
  { id: '4', title: 'Pet Lover' },
  { id: '5', title: 'Travel' },
  { id: '6', title: 'Reading' },
  { id: '7', title: 'Pet Lover' },
  { id: '8', title: 'Travel' },
  { id: '9', title: 'Reading' },
  { id: '10', title: 'Pet Lover' },
  { id: '11', title: 'Travel' },
  { id: '12', title: 'Reading' },
  { id: '13', title: 'Pet Lover' },
  { id: '14', title: 'Travel' },
  { id: '15', title: 'Reading' },
  { id: '16', title: 'Pet Lover' },
  { id: '17', title: 'Travel' },
  { id: '18', title: 'Reading' }
];

export default class Personalinfo4 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      setdata: []
    };
  }

  onSelect = (ind) => {
    const { setdata } = this.state;
    const updatedData = [...setdata]; 
    const selectedItem = updatedData[ind]; 

    updatedData[ind] = !selectedItem; 

    this.setState({ setdata: updatedData });
  };

  render() {
    return (
      <View
        style={{
            marginTop: 50,
            backgroundColor: 'white',
            // height: this.props.height,
            height:"85%",
            alignItems: 'center',
            width: this.props.width
        }}
      >
     <Text style={{ fontSize: 25, fontWeight: '500', color: '#F76A7B' }}>My Interests</Text>
        <FlatList
          style={{ marginTop: 20}}
          data={screens}
          numColumns={3}
          renderItem={({ item, index }) => {
            const isSelected = this.state.setdata[index];
            return (
            <TouchableOpacity
                onPress={() => {
                  this.onSelect(index);
                }}
                style={{
                  borderRadius: 10,
                  width: '30%',
                  marginLeft: 10,
                  marginTop: 10,
                  height: 28,
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: isSelected ? 'pink' : '#DEDEDE'
                }}
              >
                <Text style={{ color: '#1B1B1B' }}>{item.title}</Text>
              </TouchableOpacity>

            

            );
          }}

        />
           
            <TouchableOpacity style={{backgroundColor:'#5363DD',width:'85%',height:"7%",borderRadius:25,alignItems:'center',justifyContent:'center'}}>
               <Text style={{color:'white',fontSize:20,fontWeight:'600'}}>Continue</Text>
                    </TouchableOpacity>

      </View>
    );
  }
}
