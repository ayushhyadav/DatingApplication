import React, { Component } from 'react';
import {
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ImageBackground,
} from 'react-native';

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      otp: ['', '', '', ''],
    };
  }

  handleOtpChange = (index, value) => {
    const { otp } = this.state;
    otp[index] = value;
    this.setState({ otp });
  };

  render() {
    const { otp } = this.state;

    return (
      <ImageBackground style={{alignItems: 'center',
      backgroundColor: 'white',
      height: '120%',}}>
        <Image style={{ width: '30%',
    height: 100,
    marginTop: 65,}} source={require('../Images/MaskGroup.png')} />
        <Text style={styles.appName}>App Name</Text>

        <Text style={styles.otpTitle}>OTP Verification</Text>

        <Text style={styles.codeSentText}>Code sent to your Phone No.</Text>
        <View style={styles.otpContainer}>
          {otp.map((digit, index) => (
            <TextInput
              key={index}
              style={styles.otpInput}
              value={digit}
              onChangeText={(value) => this.handleOtpChange(index, value)}
              maxLength={1}
              keyboardType="numeric"
            />
          ))}
        </View>
        <View style={styles.resendContainer}>
          <TouchableOpacity>
            <Text style={styles.didNotGetCodeText}>Didn't receive a code?</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Personalinfo1')}>
            <Text style={styles.resendText}>Resend</Text>
          </TouchableOpacity>
        </View>

        <Image style={styles.backgroundImage} source={require('../Images/48841661.png')} />
      </ImageBackground>
    );
  }
}

const styles = {
  container: {
    
  },
  logo: {
   
  },
  appName: {
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 10,
  },
  otpTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#F76A7B',
    marginTop: 60,
  },
  codeSentText: {
    fontSize: 13,
    color: '#5A5A5A',
    marginTop: 5,
  },
  otpContainer: {
    flexDirection: 'row',
    marginTop: 28,
  },
  otpInput: {
    borderWidth: 1,
    borderColor: '#AAAAAA',
    width: '18%',
    borderRadius: 10,
    marginRight: 10,
    height: 65,
    fontSize: 24,
    paddingHorizontal: 10,
    textAlign: 'center',
  },
  resendContainer: {
    marginTop: 25,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  didNotGetCodeText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#5A5A5A',
  },
  resendText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#F33B67',
    marginLeft: 8,
  },
  backgroundImage: {
    width: '70%',
    height: 280,
  },
};
1