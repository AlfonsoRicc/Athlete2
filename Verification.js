import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, StyleSheet, Image } from 'react-native';
import ProgressBar from './ProgressBar';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Alert } from 'react-native';

const Verification = () => {
    const navigation = useNavigation(); 
    const steps = ['Step 1', 'Step 2', 'Step 3', 'Step 4', 'Step 5']; 
    const currentStep = 4;
  const [linkedin, setLinkedin] = useState('');
  const [instagram, setSubstack] = useState('');
  const [twitter, setTwitter] = useState('');
  const [showSocialLinks, setShowSocialLinks] = useState(false);

  const handleContinuePress = () => {
    if (showSocialLinks) { // save or send social links data
    }
    navigation.navigate('ShareKnowledge')};
    if (showSocialLinks && !linkedin && !instagram && !twitter) {
      Alert.alert(
        "Error", // Title of the alert
        "Please provide your social media links", // Message of the alert
        [{ text: "OK" }] // Button(s) in the alert
      );
      return; 
    }

  const handleSkipPress = () => {
    navigation.navigate('ShareKnowledge')
  }

return (
<View style={styles.container}>
    <View style={styles.topBar}>
    <Image 
     source={require('./assets/AthleteLogo.png')}
     style={styles.logo}/> 
    </View>
    <ProgressBar steps={steps} currentStep={currentStep} />
     <Text style={styles.step1}>STEP 4</Text>
      <Text style={styles.textPrimary}>Get your expertise verified to stand out</Text>
      <Text style={styles.subtitle}>Add some social media links that prove your expertise</Text>
      <TextInput 
        style={styles.input}
        value={linkedin}
        onChangeText={setLinkedin}
        placeholder="LinkedIn profile link"
      />
      <TextInput 
        style={styles.input}
        value={instagram}
        onChangeText={setSubstack}
        placeholder="Substack profile link"
      />
      <TextInput 
        style={styles.input}
        value={twitter}
        onChangeText={setTwitter}
        placeholder="Twitter profile link"
      />
<TouchableWithoutFeedback onPress={() => setShowSocialLinks(!showSocialLinks)}>
        <View style={styles.checkboxContainer}>
          <View style={styles.checkbox}>
            {showSocialLinks && <Icon name="check" size={20} color="#171C24" />}
          </View>
          <Text style={styles.checkboxLabel}>Show my social links on my profile</Text>
        </View>
      </TouchableWithoutFeedback>
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
          verifyButtonText: {
                fontSize: 14,
                color: '#FFFFFF',
                textAlign: 'center',
                margin: 20,
          },
          imagePlaceholder: {
            width: 100, 
            height: 50, 
            color: "#FFFFFF",
          },
          input: {
              backgroundColor: '#FFFFFF',
              padding: 10,
              marginVertical: 4,
              marginHorizontal: 4,
              width: '70%',
              borderRadius: 5,
          },
          checkboxContainer: {
            flexDirection: 'row',
            marginTop: 20, 
            backgroundColor: '#FFFFFF', 
            borderRadius: 5,
            width: '70%', 
            alignItems: 'center',
            borderColor: '#171C24',
          },
          checkbox: {
            width: 24,
            height: 24,
            borderRadius: 5,
            borderWidth: 4,
            borderColor: '#333333',
            justifyContent: 'left',
            alignItems: 'left',
          },
          step1: {
            fontSize: 12,
            color: '#FFFFFF',
            textAlign: 'center',
            margin: 20,
          },
          item: {
            backgroundColor: '#FFFFFF',
            padding: 10,
            marginVertical: 4,
            marginHorizontal: 4,
            width: '35%',
            borderRadius: 5,
          },
          itemSelected: {
            backgroundColor: '#000',
            padding: 20,
            marginVertical: 8,
            marginHorizontal: 16,
          },
          itemText: {
            fontSize: 10,
          },
          itemRemoveText: {
            fontSize: 18,
            color: 'red',
          },
          checkbox: {
            size: 10,
            color: '#FFFFFF',
            alignItems: 'left',
          },
          checkboxLabel: {
            fontSize: 14,
            color: '#171C24',
            textAlign: 'center',
            margin: 10,
          },
          button: {
            marginTop: 20, 
            backgroundColor: '#FFFFFF', 
            padding: 10,
            borderRadius: 5,
            width: '80%', 
            alignItems: 'center',
            position: 'absolute', 
            bottom: 50, 
            alignSelf: 'center',  
          },
          buttonText: {
            color: '#333333', 
            fontSize: 16, 
            fontWeight: 'bold',
          },
});

export default Verification;