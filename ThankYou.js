import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ThankYou = () => {
  const navigation = useNavigation();

  const handlePollPress = () => {
    navigation.navigate('PersonalInfo');
  };

  const handleNoThanksPress = () => {
    navigation.navigate('Home');
  }

  return (
    <View style={styles.container}>
    <View style={styles.topBar}>
    <Image 
     source={require('./assets/AthleteLogo.png')}
     style={styles.logo}/> 
    </View>
      <Text style={styles.thankYouText}>
        Thank you for sharing your skills!
      </Text>
      <Text style={styles.invitationText}>
        Would you like to create a Profile?
      </Text>
      <TouchableOpacity 
        style={styles.button} 
        onPress={handlePollPress}
      >
        <Text style={styles.buttonText}>Create Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.button} 
        onPress={handleNoThanksPress}
      >
        <Text style={styles.buttonText}>No, Thank You</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#DD0000',
  },
  logo: {
    width: 200, 
    height: 100, 
    resizeMode: 'contain', 
    marginBottom: 20,
  },
  thankYouText: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  invitationText: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#333333', 
    padding: 10,
    borderRadius: 5,
    marginBottom: 30,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default ThankYou;
