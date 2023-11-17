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

  const categories = [ { id: 'macro', name: 'Macro' },
  { id: 'financial_analysis', name: 'Financial Analysis' },
  { id: 'tech', name: 'Tech'  },
  { id: 'crypto', name: 'Crypto' }, 
  { id: 'EM', name: 'EM' }, 
  { id: 'commodities', name: 'Commodities' }, 
  { id: 'bottom-up', name: 'Bottom Up' }, 
  { id: 'risk', name: 'Risk Management' },
  { id: 'corporate_finance', name: 'Corporate Finance'},
  { id: 'alternatives', name: 'Alts' },
  ];

  const handleContinuePress = () => {navigation.navigate('WorkHistory')};

  const handleSelectCategory = (category) => {
  };

  const handleRemoveCategory = (category) => {
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
    source={require('./assets/logo.png')}
    style={styles.logo}
  /> 
</View>
    <ProgressBar steps={steps} currentStep={currentStep} />
     <Text style={styles.step1}>STEP 1</Text>
      <View style={styles.textWrapper}>
          <Text style={styles.textPrimary}>What are your fields of expertise? </Text>
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
      <TouchableOpacity style={styles.button} onPress={handleContinuePress}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#171C24',
      alignItems: 'center',
      justifyContent: 'flex-start',
      paddingTop: 10,
      alignItems: 'center',
    },
    topBar: {
      width: '100%', 
      paddingVertical: 10, 
      backgroundColor: '#171C24', 
      alignItems: 'left', 
      marginLeft: 40,
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
      backgroundColor: '#8FA3C8',
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
    button: {
      marginTop: 20, 
      backgroundColor: '#8FA3C8', 
      padding: 10,
      borderRadius: 5,
      width: '80%', 
      alignItems: 'center',
      position: 'absolute', 
      bottom: 50, 
      alignSelf: 'center',  
    },
    buttonText: {
      color: '#171C24', 
      fontSize: 16, 
      fontWeight: 'bold',
    },
  })

export default FieldsOfExpertise;