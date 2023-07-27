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
    marginHorizontal: 10,
    borderWidth: 10,
    borderColor: '#fff',
    padding: 20,
    fontSize: 20,
    width: 150,
    backgroundColor: 'blue',
    color: 'white',
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
});
