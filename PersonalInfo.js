import React, { useState } from 'react';
import { View, Image, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ProgressBar from './ProgressBar';

const PersonalInfo = () => {
  const navigation = useNavigation(); 
  const steps = ['Step 1', 'Step 2', 'Step 3', 'Step 4', 'Step 5']; 
  const currentStep = 3;
    
  const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [bio, setBio] = useState('');
    const [image, setImage] = useState(null);

  const handleContinuePress = () => {navigation.navigate('Verification')};

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };


return (
<View style={styles.container}>
<View style={styles.topBar}>
  <Image 
    source={require('./assets/AthleteLogo.png')}
    style={styles.logo}
  /> 
</View>
    <ProgressBar steps={steps} currentStep={currentStep} />
     <Text style={styles.step1}>STEP 3</Text>
      <View style={styles.textWrapper}>
          <Text style={styles.textPrimary}>Share Something About Yourself</Text>
  </View>
  <View style={styles.imagePlaceholder}>
  <TouchableOpacity onPress={pickImage}>
          <Text>Upload Image</Text>
        </TouchableOpacity>
        {image && <Image source={{ uri: image }} style={{ width : 100, height: 100 }} />}
      </View>
      <TextInput 
        style={styles.input}
        value={firstName}
        onChangeText={setFirstName}
        placeholder="First Name"
      />
      <TextInput 
        style={styles.input}
        value={lastName}
        onChangeText={setLastName}
        placeholder="Last Name"
      />
      <TextInput
        style={styles.inputLarge}
        value={bio}
        onChangeText={setBio}
        placeholder="Significant work experiences (optional)"
        multiline
      />
      <TouchableOpacity style={styles.button} onPress={handleContinuePress}>
        <Text style={styles.buttonText}>Continue</Text>
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
    placeholder: {
      color: "#FFFFFF"
    },
    textPrimary: {
      fontSize: 20,
      color: "#FFFFFF",
      fontWeight: 'bold',
      textAlign: 'center',
    },
    imagePlaceholder: {
      width: 150, // Set a fixed width
      height: 150, // Set a fixed height
      backgroundColor: '#E0E0E0', // A light grey color
      justifyContent: 'center', // Center the content vertically
      alignItems: 'center', // Center the content horizontally
      borderRadius: 10, // Rounded corners
      marginVertical: 20, // Some vertical margin
    },
    uploadText: {
      color: '#171C24', // Dark text color
      textAlign: 'center',
    },
    uploadedImage: {
      width: '100%', // Take full width of the container
      height: '100%', // Take full height of the container
      borderRadius: 10, // Maintain the same borderRadius as the container
    },
    input: {
        backgroundColor: '#FFFFFF',
        padding: 10,
        marginVertical: 4,
        marginHorizontal: 4,
        width: '70%',
        borderRadius: 5,
    },
    inputLarge: {
        backgroundColor: '#FFFFFF',
        padding: 10,
        marginVertical: 50,
        marginHorizontal: 4,
        width: '70%',
        height: 150,
        borderRadius: 5,
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
      backgroundColor: '#DD0000',
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
  })

export default PersonalInfo;