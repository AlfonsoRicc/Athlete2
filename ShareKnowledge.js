import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import ProgressBar from './ProgressBar';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Video } from 'expo-av';
import * as ImagePicker from 'expo-image-picker';


const ShareKnowledge = () => {
  const [postType, setPostType] = useState('');
  const [media, setMedia] = useState('');
  const [mediaType, setMediaType] = useState('');
  const navigation = useNavigation(); 

  const steps = ['Step 1', 'Step 2', 'Step 3', 'Step 4', 'Step 5']; 
  const currentStep = 3;

  const postTypes = [
    { key: 'blunder', text: 'Blunder', icon: 'thumbs-down' },
    { key: 'showoff', text: 'Show Off', icon: 'trophy' },
    { key: 'trick', text: 'Trick', icon: 'magic' },
  ];

  const deleteMedia = () => {
    setMedia('');
    setMediaType('');
  };

  const pickMedia = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });


  
      if (!result.cancelled) {
        setMedia(result.uri);
        setMediaType(result.type);
      }
    } catch (error) {
      console.error("Error picking media: ", error);
    } // This closing brace ends the try-catch block
  };

  const handlePostTypeSelection = (type) => {
    setPostType(type);
  };

  const handleSubmit = () => {
    console.log({ postType });
    navigation.navigate('ThankYou');
  };

  return (
     <View style={styles.imagePlaceholder}>
    <View style={styles.topBar}>
  <Image 
    source={require('./assets/AthleteLogo.png')}
    style={styles.logo}
  /> 
    <ProgressBar steps={steps} currentStep={currentStep} />
     <Text style={styles.step1}>STEP 3</Text>
</View>
<ScrollView style={styles.scrollViewStyle}>
{media && mediaType === 'video' ? (
  <View style={styles.videoContainer}>
          <TouchableOpacity onPress={deleteMedia} style={styles.deleteButton}>
      <Text style={styles.deleteButtonText}>Delete Video</Text>
    </TouchableOpacity>
      <Video source={{ uri: media }} style={{ width: '100%', height: '100%' }} />
  </View>
    ) : (
      <TouchableOpacity onPress={pickMedia} style={styles.uploadButton}>
        <Icon name='video-camera' color={'#333333'} size={48} />
      </TouchableOpacity>
    )}
      <View style={styles.postTypeContainer}>
        {postTypes.map((type) => (
          <TouchableOpacity
            key={type.key}
            style={[
              styles.postTypeButton,
              postType === type.key && styles.postTypeButtonSelected,
            ]}
            onPress={() => handlePostTypeSelection(type.key)}
          >
            <Icon name={type.icon} size={16} style={styles.icon} />
            <Text style={styles.postTypeText}>{type.text}</Text>
          </TouchableOpacity>
        ))}
              <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>SUBMIT</Text>
      </TouchableOpacity>
            </View>
      </ScrollView>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%", 
    height: "100%", 
    flex: 1,
    padding: 10,
    backgroundColor: '#D4CCC1',
  },
  topBar: {
    width: '100%', 
    paddingVertical: 10, 
    backgroundColor: '#D4CCC1',
    alignItems: 'center', 
  },
  step1: {
    fontSize: 12,
    color: '#333333',
    textAlign: 'center',
    margin: 20,
  },
  logo: {
    width: 200, 
    height: 100, 
    resizeMode: 'contain', 
  },
  imagePlaceholder: {
    width: "100%", 
    height: "100%", 
    backgroundColor: '#D4CCC1', 
    justifyContent: 'center', 
    alignItems: 'center', 
  },
  uploadText: {
    color: '#DD0000', 
    textAlign: 'center',
    fontSize: 26,
  },
  uploadButton: {
    height: 150,
    width: 150,
    marginBottom: 150,
    marginTop: 100,
    alignItems: 'center', 
    justifyContent: 'center',
    marginLeft: 120,
  },
  videoContainer: {
    width: '100%',
    height: 300,
    marginBottom: 80, 
  },
  inputContainer: {
    backgroundColor: '#D4CCC1',
    padding: 10,
    borderRadius: 10,
    borderColor: "#333333",
    width: "90%",
  },
  postTypeContainer: {
    marginVertical: 20,
    flexDirection: 'row',
    flexWrap: 'wrap', 
    justifyContent: 'space-between',
    marginLeft: 10,
    marginRight: 10,
  },
  postTypeButton: {
    paddingVertical: 20,
    paddingHorizontal: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#333333',
    marginBottom: 10,
    color: '#D4CCC1',
    width: '30%',
  },
  icon: {
    alignSelf: 'center',
    marginBottom: 5,
  },
  postTypeButtonSelected: {
    backgroundColor: '#DD0000',
    borderColor: '#333333',
  },
  postTypeText: {
    textAlign: 'center',
    fontSize: 16,
  },
  buttonStyle: {
    backgroundColor: '#333333', 
    padding: 10, 
    borderRadius: 5, 
    marginTop: 10, 
    alignItems: 'center', 
  },
  buttonTextStyle: {
    color: 'white', 
    fontSize: 16, 
  },
  deleteButton: {
    backgroundColor: '#DD0000', 
    padding: 5,
    borderRadius: 5,
    margin: 10,
    alignItems: 'center',
    width: "30%",
    marginBottom: 20,
    marginLeft: 140,
  },
  deleteButtonText: {
    color: 'white', 
    fontSize: 16,
  },
  submitButton: {
    backgroundColor: '#333333',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    width: "100%",
  },
  submitButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default ShareKnowledge;