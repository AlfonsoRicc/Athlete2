import React from 'react';
import { View, StyleSheet } from 'react-native';

const ProgressBar = ({ currentStep }) => {
  const totalSteps = 5; 

  return (
    <View style={styles.progressBar}>
      {Array.from({ length: totalSteps }).map((_, index) => (
        <View
          key={index}
          style={[
            styles.step,
            index < currentStep ? styles.active : styles.inactive
          ]}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  progressBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  step: {
    width: 10, // Size of the dot
    height: 10, // Size of the dot
    borderRadius: 5, // Make it round
    marginHorizontal: 5, // Spacing between dots
  },
  active: {
    backgroundColor: '#DD0000', // Active dot color
  },
  inactive: {
    backgroundColor: '#333333', // Inactive dot color
  },
});

export default ProgressBar;