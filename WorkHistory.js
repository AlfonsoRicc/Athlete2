import React, { useState } from 'react';
import { View, Image, Text, TextInput, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ProgressBar from './ProgressBar';

const WorkHistory = () => {
  const navigation = useNavigation(); 
  const steps = ['Step 1', 'Step 2', 'Step 3', 'Step 4', 'Step 5']; 
  const currentStep = 2;
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [ { id: '>18', name: '>18' },
  { id: '19_22', name: '19-22' },
  { id: '23_29', name: '23-29'  },
  { id: '30_39', name: '30-39' }, 
  { id: '40_49', name: '40-49' }, 
  { id: '50_59', name: '50-59' }, 
  { id: '>60', name: '>60' }, 
  ];

  const handleContinuePress = () => {navigation.navigate('ShareKnowledge')};


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
            <Text style={styles.itemRemoveText}></Text>
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
     <Text style={styles.step1}>STEP 2</Text>
      <View style={styles.textWrapper}>
          <Text style={styles.textPrimary}>What's your age bracket? </Text>
  </View>
      <FlatList
       data={categories.filter(category =>
        category.name.toLowerCase().includes(searchTerm.toLowerCase())
      )}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      numColumns={3} 
      style={styles.list}
    />
      <TouchableOpacity style={[styles.button, selectedCategories.length === 0 && styles.buttonDisabled]} onPress={handleContinuePress} disabled={selectedCategories.length === 0}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.smallButton} onPress={() => { navigation.navigate('ShareKnowledge') }}>
        <Text style={styles.smallButtonText}>Skip</Text>
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
      marginBottom: 40,
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
      backgroundColor: '#FFF',
      padding: 10,
      marginVertical: 4,
      marginHorizontal: 4,
      width: '30%',
      borderRadius: 5,
    },
    itemSelected: {
      backgroundColor: '#DD0000',
      padding: 10,
      marginVertical: 4,
      marginHorizontal: 4,
      width: '30%', 
      borderRadius: 5,
    },
    itemText: {
      fontSize: 14,
    },
    itemRemoveText: {
      fontSize: 14,
      color: '#171C24',
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
      bottom: 60, 
      alignSelf: 'center',  
    },
    buttonText: {
      color: '#333333', 
      fontSize: 16, 
      fontWeight: 'bold',
    },
    smallButton: {
      marginTop: 10,
      padding: 5,
      width: '80%', 
      alignItems: 'center', 
      bottom: 20, 
    },
    smallButtonText: {
      color: '#DD0000', 
      fontSize: 14,
      fontWeight: 'bold'
    },
  })


export default WorkHistory;