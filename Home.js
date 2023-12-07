import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CustomButton from './Button';
import { Video } from 'expo-av';
import { WebView } from 'react-native-webview';


const Home = () => {
  const navigation = useNavigation(); 

    // const handleAppleLogin = () => {
      // console.log('Apple Login pressed!');
      // navigation.navigate('LogInSignUp');
   //  };
    // const handleGoogleLogin = () => {
      // console.log('Google Login pressed!');
      // navigation.navigate('LogInSignUp');
    // };

return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <Image 
          source={require('./assets/AthleteLogo.png')}
          style={styles.logo}
        />
        </View>
        <ScrollView style={styles.scrollViewStyle}>
      <View style={styles.textWrapper}>
      <Text style={styles.textPrimary}>Athlete is a place where you can share your sports skills,
      </Text>
      <Text style={styles.textSecondary}>without stress</Text>
      <WebView
        source={{ uri: 'https://youtube.com/shorts/Iqsxzu_CkJk?si=BdUtr34I3QhzJTCk' }} // Replace with your video's URL
        style={styles.video}
        resizeMode="contain"
        shouldPlay={true}
        isLooping={true}
      />
      <Text style={styles.subtitle}>We built a place where you can feel comfortable being goofy </Text>
      </View>
      <CustomButton title="Share Your 'Skills'" />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DD0000',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 30,
  },
  topBar: {
    width: '100%', 
    paddingVertical: 10, 
    backgroundColor: '#DD0000', 
    alignItems: 'center', 
  },
  logo: {
    width: 200, 
    height: 100, 
    resizeMode: 'contain', 
  },
  textWrapper: {
    padding: 10,
    margin: 10,
    paddingTop: 40,
  },
  video: {
    width: '80%', // You can adjust this width as needed
    height: 200, // You can adjust this height as needed
    marginTop: 20, // Add some margin at the top
  },
  lineContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#647189',
    marginHorizontal: 5, 
    marginLeft: 25,
    marginRight: 25,
  },
  textPrimary: {
    fontSize: 35,
    color: "#FFFFFF",
    fontWeight: '500',
    textAlign: 'center',
  },
  textSecondary: {
    fontSize: 35,
    color: "#333333", 
    fontWeight: '500',
    textAlign: 'center',
  },
  textTertiary: {
    fontSize: 16,
    color: '#647189',
  },
  subtitle: {
    fontSize: 16,
    color: '#D4CCC1',
    textAlign: 'center',
    paddingTop: 40
  },
  authButtons: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%', 
    marginTop: 15,
  },
  video: {
    width: 250,
    height: 200, 
    marginTop: 20, 
    marginLeft: 50,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#D4CCC1',
    padding: 40, 
    alignItems: 'left',
    padding: 40, 
    paddingLeft: 30,
  },
  loginText: {
    color: '#FFFFFF',
    fontSize: 14,
  },
  loginLink: {
    color: '#DD0000', 
    fontWeight: 'bold',
  },
  termsText: {
    color: '#FFFFFF',
    fontSize: 14,
    marginTop: 10, 
    textAlign: 'left', 
  },
});


export default Home;