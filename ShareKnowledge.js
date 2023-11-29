import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, Button, StyleSheet, ScrollView } from 'react-native';
import ProgressBar from './ProgressBar';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

const saveLinkToDatabase = async (link) => {
  try {
    const response = await axios.post('https://yourbackend.com/api/save-link', {
      link: link,
    });
    console.log('Link saved:', response.data);
    // Handle any further actions after successful save, like navigation or alerts
  } catch (error) {
    console.error('Error saving link:', error);
    // Handle errors, such as showing an alert to the user
  }
};

const ShareKnowledge = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [postType, setPostType] = useState('');
  const [media, setMedia] = useState(null);
  const [mediaType, setMediaType] = useState(null);
  const [links, setLinks] = useState(['']);
  const navigation = useNavigation(); 

  const steps = ['Step 1', 'Step 2', 'Step 3', 'Step 4', 'Step 5']; 
  const currentStep = 5;

  const handleLinkChange = (text, index) => {
    const newLinks = [...links];
    newLinks[index] = text;
    setLinks(newLinks);
  };

  const addLinkField = () => {
    setLinks([...links, '']);
  };

  const postTypes = [
    { key: 'blunder', text: 'Blunder' },
    { key: 'showoff', text: 'Show Off' },
    { key: 'trick', text: 'Trick' },
  ];

  const pickMedia = async () => {
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
  };

  const handlePostTypeSelection = (type) => {
    setPostType(type);
  };

  const handleSubmit = () => {
    console.log({ title, content, postType });
    navigation.navigate('ThankYou');
  };

  return (
    <ScrollView style={styles.scrollViewContainer}>
    <View style={styles.container}>
    <View style={styles.topBar}>
  <Image 
    source={require('./assets/AthleteLogo.png')}
    style={styles.logo}
  /> 
</View>
    <ProgressBar steps={steps} currentStep={currentStep} />
     <Text style={styles.step1}>STEP 5</Text>
     <View style={styles.imagePlaceholder}>
  <TouchableOpacity onPress={pickMedia}>
          <Text>Upload Image/Video</Text>
        </TouchableOpacity>
        {media && mediaType === 'image' && (<Image source={{ uri: image }} style={{ width : 100, height: 100 }} />
        )}
        {media && mediaType === 'video' && (<Video source={{ uri: video}} style={{ width: 100, height: 100}} />
        )}
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.titleInput}
          onChangeText={setTitle}
          value={title}
          placeholder="Give it a title..."
        />
        <TextInput
          style={styles.contentInput}
          onChangeText={setContent}
          value={content}
          placeholder="Describe your picture/video"
          multiline
        />
        {links.map((link, index) => (
          <TextInput
            key={index}
            style={styles.linkInput}
            onChangeText={(text) => handleLinkChange(text, index)}
            value={link}
            placeholder="Share a link (optional)"
          />
        ))}
        <TouchableOpacity onPress={addLinkField} style={styles.buttonStyle}>
          <Text style={styles.buttonTextStyle}>Add another link</Text>
        </TouchableOpacity>
      </View>
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
            <Text style={styles.postTypeText}>{type.text}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>SUBMIT</Text>
      </TouchableOpacity>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#D4CCC1',
  },
  topBar: {
    width: '100%', 
    paddingVertical: 10, 
    backgroundColor: '#D4CCC1',
    alignItems: 'center', 
  },
  logo: {
    width: 200, 
    height: 100, 
    resizeMode: 'contain', 
  },
  step1: {
    fontSize: 12,
    color: '#171C24',
    textAlign: 'center',
    margin: 20,
  },
  imagePlaceholder: {
    width: 200, 
    height: 200, 
    backgroundColor: '#FFFFFF', 
    justifyContent: 'center', 
    alignItems: 'center', 
    borderRadius: 10,
    marginVertical: 20,
    marginLeft: 95,
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
  inputContainer: {
    backgroundColor: '#F2F2F2',
    padding: 10,
    borderRadius: 10,
  },
  titleInput: {
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginBottom: 10,
  },
  contentInput: {
    height: 100,
    textAlignVertical: 'top',
  },
  linkInput: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  postTypeContainer: {
    marginVertical: 20,
    flexDirection: 'row',
    flexWrap: 'wrap', 
    justifyContent: 'space-between',
  },
  postTypeButton: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#333333',
    marginBottom: 10,
    color: '#D4CCC1',
    width: '30%',
  },
  postTypeButtonSelected: {
    backgroundColor: '#DD0000',
    borderColor: '#333333',
  },
  postTypeText: {
    textAlign: 'center',
  },
  buttonStyle: {
    // Style for the touchable opacity
    backgroundColor: '#171C24', // Example background color
    padding: 10, // Example padding
    borderRadius: 5, // Example border radius
    marginTop: 10, // Example margin from the top
    alignItems: 'center', // Centers the text horizontally
  },
  buttonTextStyle: {
    // Style for the text inside the button
    color: 'white', // Example text color
    fontSize: 16, // Example font size
  },
  submitButton: {
    backgroundColor: '#333333',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  submitButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default ShareKnowledge;