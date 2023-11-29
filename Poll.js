import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Poll = () => {
  // Example poll data
  const [firstPollQuestion, setFirstPollQuestion] = useState('What is your favorite type of content?');
  const [secondPollQuestion, setSecondPollQuestion] = useState('Did you share a picture or a video?');
  const [firstOptions, setFirstPollOptions] = useState(['Spontaneous', 'Carefully Crafted']);
  const [secondOptions, setSecondPollOptions] = useState(['Video', 'Photo'])
  const [selectedFirstOption, setSelectedFirstOption] = useState(null);
  const [selectedSecondOption, setSelectedSecondOption] = useState(null);


  const handleFirstOptionPress = (option) => {
    setSelectedFirstOption(option);
  };

  const handleSecondOptionPress = (option) => {
    setSelectedSecondOption(option);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.pollQuestion}>{firstPollQuestion}</Text>
      {firstOptions.map((option, index) => (
        <TouchableOpacity
          key={index}
          style={[styles.pollOption, selectedFirstOption === option && styles.selectedOption]}
          onPress={() => handleFirstOptionPress(option)}
        >
          <Text style={styles.pollOptionText}>{option}</Text>
        </TouchableOpacity>
      ))};
            <Text style={styles.pollQuestion}>{secondPollQuestion}</Text>
      {secondOptions.map((option, index) => (
        <TouchableOpacity
          key={index}
          style={[styles.pollOption, selectedSecondOption === option && styles.selectedOption]}
          onPress={() => handleSecondOptionPress(option)}
        >
          <Text style={styles.pollOptionText}>{option}</Text>
        </TouchableOpacity>
      ))};
          </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#8FA3C8',
  },
  pollQuestion: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  pollOption: {
    backgroundColor: '#FFFFFF',
    padding: 10,
    borderRadius: 5,
    marginVertical: 5,
    width: '80%',
  },
  selectedfirstOption: {
    backgroundColor: '#54D7B7',
  },
  selectedsecondOption: {
    backgroundColor: '#54D7B7',
  },
  pollOptionText: {
    textAlign: 'center',
    color: '#171C24',
  },
});

export default Poll;