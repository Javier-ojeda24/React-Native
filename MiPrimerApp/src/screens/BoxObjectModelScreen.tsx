import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const BoxObjectModelScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.tittle}>Box Object Model</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
  tittle: {
    fontSize: 20,
    padding: 10,
    borderWidth: 10,
    borderColor: 'gray',
    backgroundColor: 'white',
  },
});
