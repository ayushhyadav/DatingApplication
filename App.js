// import React, { Component } from 'react'
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
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// // import LoginScreens from './Screens/LoginScreens';
// // import SignupScreens from './Screens/SignupScreens'
// import Front from './Screens/Front';
// import Contact from './Screens/Contact';
// import Otp from './Screens/Otp';
// import Personalinfo1 from './Screens/Personalinfo1';
// import SignupProcess from './Screens/SignupProcess';
// const Stack = createNativeStackNavigator();
// export default class App extends Component {
//   constructor(props)
//   {
//     super(props)
//     this.state={

//     }
//   }
//   render() {
//     return (
//       <NavigationContainer >
//       <Stack.Navigator screenOptions={{headerShown:false}}>
//         {/* <Stack.Screen name="LoginScreens" component={LoginScreens} />
//         <Stack.Screen name="SignupScreens" component={SignupScreens} /> */}
//          <Stack.Screen name="Front" component={Front} />
//          <Stack.Screen name="Contact" component={Contact} />

//          <Stack.Screen name="Otp" component={Otp} />
//          <Stack.Screen name="Personalinfo1" component={Personalinfo1} />

//          <Stack.Screen name="SignupProcess" component={SignupProcess} />

//       </Stack.Navigator>
//     </NavigationContainer>
//     )
//   }
// }

import React,{Component} from 'react'
import { View,Text,TouchableOpacity,AsyncStorage, TextInput} from 'react-native'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
    };
  }

  _storeData = async () => {
    try {
      await AsyncStorage.setItem('@MySuperStore:key', this.state.userName);
    } catch (error) {
      // Error saving data
    }
  };

  _getData = async () => {
    try {
      const value = await AsyncStorage.getItem('@MySuperStore:key');
      if (value !== null) {
        // Value exists, do something with it
        console.log(value);
      }
    } catch (error) {
      // Error retrieving data
    }
  };

  render() {
    return (
      <View style={{ justifyContent: 'center', alignItems: 'center', height: '100%' }}>
        <TextInput
          style={{ color: 'black', width: '90%', textAlign: 'center', borderWidth: 2 }}
          placeholder="User Name"
          placeholderTextColor="black"
          onChangeText={(text) => this.setState({ userName: text })}
        />
        <TouchableOpacity
          style={{
            borderWidth: 2,
            width: '40%',
            height: 30,
            borderRadius: 15,
            backgroundColor: 'pink',
            marginTop: 20,
          }}
          onPress={this._storeData}
        >
          <Text style={{ textAlign: 'center' }}>set data</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            borderWidth: 2,
            width: '40%',
            height: 30,
            borderRadius: 15,
            backgroundColor: 'lightblue',
            marginTop: 20,
          }}
          onPress={this._getData}
        >
          <Text style={{ textAlign: 'center' }}>get data</Text>
        </TouchableOpacity>
      </View>
    );
  }
}



