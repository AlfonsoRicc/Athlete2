import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, StyleSheet, Image } from 'react-native';
import ProgressBar from './ProgressBar';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Alert } from 'react-native';

const Verification = () => {
    const navigation = useNavigation(); 
    const steps = ['Step 1', 'Step 2', 'Step 3', 'Step 4', 'Step 5']; 
    const currentStep = 5;
  const [linkedin, setLinkedin] = useState('');
  const [instagram, setInstagram] = useState('');
  const [tiktok, setTikTok] = useState('');
  const [showSocialLinks, setShowSocialLinks] = useState(false);

  const handleContinuePress = () => {
    if (showSocialLinks) { // save or send social links data
    }
    navigation.navigate('LogInSignUp')};
    if (showSocialLinks && !linkedin && !instagram && !tiktok ) {
      Alert.alert(
        "Error", // Title of the alert
        "Please provide your social media links", // Message of the alert
        [{ text: "OK" }] // Button(s) in the alert
      );
      return; 
    }

  const handleSkipPress = () => {
    navigation.navigate('LogInSignUp')
  }

return (
<View style={styles.container}>
    <View style={styles.topBar}>
    <Image 
     source={require('./assets/AthleteLogo.png')}
     style={styles.logo}/> 
    </View>
    <ProgressBar steps={steps} currentStep={currentStep} />
     <Text style={styles.step1}>STEP 5</Text>
      <Text style={styles.textPrimary}>Connect your social media </Text>
      <Text style={styles.subtitle}>Add some social media links </Text>
      <TextInput 
        style={styles.input}
        value={linkedin}
        onChangeText={setLinkedin}
        placeholder="LinkedIn profile link"
      />
      <TextInput 
        style={styles.input}
        value={instagram}
        onChangeText={setInstagram}
        placeholder="Instagram profile link"
      />
      <TextInput 
        style={styles.input}
        value={tiktok}
        onChangeText={setTikTok}
        placeholder="TikTok profile link"
      />

      <TouchableOpacity style={styles.button} onPress={handleContinuePress}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleSkipPress}>
        <Text style={styles.subtitle}>Skip</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#D4CCC1',
            alignItems: 'center',
            justifyContent: 'flex-start',
            paddingTop: 10,
            alignItems: 'center',
          },
          topBar: {
            width: '100%', 
            paddingVertical: 10, 
            backgroundColor: '#D4CCC1', 
            alignItems: 'left', 
          },
          logo: {
            width: 200, 
            height: 100, 
            resizeMode: 'contain', 
            alignItems: 'center',
            marginLeft: 100,
          },
          textWrapper: {
            width: "80%",
          },
          textPrimary: {
            fontSize: 20,
            color: "#FFFFFF",
            fontWeight: 'bold',
            textAlign: 'center',
          },
          subtitle: {
            fontSize: 14,
            color: '#333333',
            textAlign: 'center',
            margin: 20,
          },
          input: {
              backgroundColor: '#FFFFFF',
              padding: 10,
              marginVertical: 4,
              marginHorizontal: 4,
              width: '70%',
              borderRadius: 5,
          },
          step1: {
            fontSize: 12,
            color: '#FFFFFF',
            textAlign: 'center',
            margin: 20,
          },
          button: {
            marginTop: 200, 
            backgroundColor: '#FFFFFF', 
            padding: 10,
            borderRadius: 5,
            width: '80%', 
            alignItems: 'center',
            alignSelf: 'center',  
          },
          buttonText: {
            color: '#333333', 
            fontSize: 16, 
            fontWeight: 'bold',
          },
});

export default Verification;