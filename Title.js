import { View, Text, Image, TextInput, TouchableOpacity, Button, StyleSheet, ScrollView } from 'react-native';

const [title, setTitle] = useState('');
const [content, setContent] = useState('');

const handleSubmit = () => {
    console.log({ title, content, postType });
    navigation.navigate('ThankYou');
  };

<View style={styles.inputContainer}>
<TextInput
  style={styles.titleInput}
  onChangeText={setTitle}
  value={title}
  placeholder="Title..."
/>
<TextInput
  style={styles.contentInput}
  onChangeText={setContent}
  value={content}
  placeholder="Describe your picture/video (optional)"
  multiline={true}
/>

const styles = StyleSheet.create({
contentInput: {
    height: 100,
    textAlignVertical: 'top',
    color: '#DD0000',
  },
titleInput: {
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: '#DD0000',
    marginBottom: 10,
  },
});

