import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, Image, TouchableOpacity, StyleSheet, } from 'react-native';
import axios from 'axios';

const [links, setLinks] = useState(['']);

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

const handleLinkChange = (text, index) => {
    const newLinks = [...links];
    newLinks[index] = text;
    setLinks(newLinks);
  };

  const addLinkField = () => {
    setLinks([...links, '']);
  };


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
  <TouchableWithoutFeedback onPress={() => setShowSocialLinks(!showSocialLinks)}>
  <View style={styles.checkboxContainer}>
    <View style={styles.checkbox}>
      {showSocialLinks && <Icon name="check" size={20} color="#171C24" />}
    </View>
  </View>
</TouchableWithoutFeedback>

<Text style={styles.loginText}>
Already have an account? <Text style={styles.loginLink}>Log in</Text>
</Text>

</TouchableOpacity> 
<TouchableOpacity onPress={() => navigation.navigate('Privacy Policy')}>
<Text style={styles.termsText}>
By continuing you agree to our <Text style={styles.termsLink}>Terms and Conditions.</Text> <Text style={styles.privacyLink}>Privacy Policy</Text>
</Text>
</TouchableOpacity>






const styles = StyleSheet.create({
linkInput: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
}
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
  termsLink: {
    color: '#DD0000', 
    fontWeight: 'bold',
  },
  privacyLink: {
    color: '#DD0000', 
    fontWeight: 'bold',
  },
});


export default link;