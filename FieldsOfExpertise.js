import React, { useState } from 'react';
import { View, Image, Text, TextInput, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ProgressBar from './ProgressBar';

const FieldsOfExpertise = () => {
  const navigation = useNavigation(); 
  const steps = ['Step 1', 'Step 2', 'Step 3', 'Step 4', 'Step 5']; 
  const currentStep = 1;
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [ { id: 'archery', name: 'Archery' },
  { id: 'soccer', name: 'Soccer(Football)' },
  { id: 'tennis', name: 'Tennis'  },
  { id: 'baseball', name: 'Baseball' }, 
  { id: 'golf', name: 'Golf' }, 
  { id: 'swimming', name: 'Swimming' }, 
  { id: 'track_and_field', name: 'Track & Field' }, 
  { id: 'volleyball', name: 'Volleyball' },
  { id: 'rugby', name: 'Rugby'},
  { id: 'cricket', name: 'Cricket' },
  { id: 'hockey', name: 'Hockey' },
  { id: 'martial_arts', name: 'Martial Arts' },
  { id: 'boxing', name: 'Boxing' },
  { id: 'skateboarding', name: 'Skateboarding' },
  { id: 'skiing', name: 'Skiing' },
  { id: 'snowboarding', name: 'Snowboarding' },
  { id: 'surfing', name: 'Surfing'},
  { id: 'equestrian_sports', name: 'Equestrian Sports' },
  ];

  const handleContinuePress = () => {
    if (selectedCategories.length > 0) {navigation.navigate('WorkHistory');
  } else {
    alert('Please select at least one field of expertise.');
  }
};


  const handleSelectCategory = (category) => {
    if (selectedCategories.includes(category)) { 
      setSelectedCategories(selectedCategories.filter(c => c.id !== category.id));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  const handleRemoveCategory = (category) => {
    setSelectedCategories(selectedCategories.filter(c => c.id !== category.id));
  };


  const renderItem = ({ item }) => {
    const isSelected = selectedCategories.some(c => c.id === item.id);
    return (
      <TouchableOpacity
        style={isSelected ? styles.itemSelected : styles.item}
        onPress={() => handleSelectCategory(item)}>
        <Text style={styles.itemText}>{item.name}</Text>
        {isSelected && (
          <TouchableOpacity onPress={() => handleRemoveCategory(item)}>
            <Text style={styles.itemRemoveText}>X</Text>
          </TouchableOpacity>
        )}
      </TouchableOpacity>
    );
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
     <Text style={styles.step1}>STEP 1</Text>
      <View style={styles.textWrapper}>
          <Text style={styles.textPrimary}>Pick three sports you love </Text>
          <Text style={styles.subtitle}>Choose up to three topics where you believe you can be helpful to the community</Text>
  </View>
    <TextInput
      style={styles.searchBar}
      placeholder="Search microcategory"
      onChangeText={setSearchTerm}
      value={searchTerm}
      />
      <FlatList
       data={categories.filter(category =>
        category.name.toLowerCase().includes(searchTerm.toLowerCase())
      )}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      numColumns={2} 
      style={styles.list}
    />
      <TouchableOpacity style={[styles.button, selectedCategories.length === 0 && styles.buttonDisabled]} onPress={handleContinuePress} disabled={selectedCategories.length === 0}>
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
      paddingVertical: 10, 
      backgroundColor: '#D4CCC1', 
      alignItems: 'left', 
    },
    logo: {
      width: 100, 
      height: 50, 
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
      color: '#FFFFFF',
      textAlign: 'center',
      margin: 20,
    },
    searchBar: {
      height: 40,
      width: '80%',
      margin: 12,
      borderWidth: 1,
      padding: 10,
      backgroundColor: '#FFF',
      borderRadius: 5, 
    },    
    step1: {
      fontSize: 12,
      color: '#FFFFFF',
      textAlign: 'center',
      margin: 20,
    },
    Flatlist: {
      width: '100%',
    },
    item: {
      backgroundColor: '#fff',
      padding: 10,
      marginVertical: 4,
      marginHorizontal: 4,
      width: '35%',
      borderRadius: 5,
    },
    itemSelected: {
      backgroundColor: '#DD0000',
      padding: 10,
      marginVertical: 4,
      marginHorizontal: 4,
      width: '35%',
      borderRadius: 5,
    },
    itemText: {
      fontSize: 10,
    },
    itemRemoveText: {
      fontSize: 14,
      color: '#333333',
      textAlign: 'right',
    },
    button: {
      marginTop: 20, 
      backgroundColor: '#DD0000', 
      padding: 10,
      borderRadius: 5,
      width: '80%', 
      alignItems: 'center',
      position: 'absolute', 
      bottom: 50, 
      alignSelf: 'center',  
    },
    buttonDisabled: {
      backgroundColor: '#FFFFFF', // Disabled button color
      borderColor: 'grey',
      borderWidth: 1
    },
    buttonText: {
      color: '#333333', 
      fontSize: 16, 
      fontWeight: 'bold',
    },
  })

export default FieldsOfExpertise;