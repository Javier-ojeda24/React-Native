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
    flexDirection: 'row',
    backgroundColor: '#28c4d9',
    justifyContent: 'center',
  },
  caja1: {
    width: 120,
    height: 80,
    borderWidth: 2,
    borderColor: 'white',
    fontSize: 30,
    justifyContent: 'center',
    textAlign: 'center',
  },
  caja2: {
    width: 120,
    height: 100,
    borderWidth: 2,
    borderColor: 'white',
    fontSize: 30,
  },
  caja3: {
    width: 120,
    height: 100,
    borderWidth: 2,
    borderColor: 'white',
    fontSize: 30,
  },
});
