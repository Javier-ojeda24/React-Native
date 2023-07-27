import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const FlexScren = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.caja1}>Caja 1</Text>
      <Text style={styles.caja2}>Caja 2</Text>
      <Text style={styles.caja3}>Caja 3</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#28c4d9',
    padding: 10,
    alignItems: 'flex-start',
  },
  caja1: {
    width: 80,
    height: 75,
    borderWidth: 2,
    borderColor: 'white',
    fontSize: 30,
  },
  caja2: {
    width: 80,
    height: 75,
    borderWidth: 2,
    borderColor: 'white',
    fontSize: 30,
  },
  caja3: {
    width: 80,
    height: 75,
    borderWidth: 2,
    borderColor: 'white',
    fontSize: 30,
  },
});
