import React from 'react';
import {StyleSheet, View} from 'react-native';

export const Position = () => {
  return (
    <View style={styles.container}>
      <View style={styles.cajaMorada} />
      <View style={styles.cajaNaranja} />
      <View style={styles.cajaVerde} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#28c4d9',
  },
  cajaMorada: {
    width: 100,
    height: 100,
    backgroundColor: '#5856D6',
    borderWidth: 10,
    borderColor: 'white',
    position: 'absolute',
    top: 0,
    right: 0,
  },
  cajaNaranja: {
    width: 100,
    height: 100,
    backgroundColor: '#f0a23b',
    borderWidth: 10,
    borderColor: 'white',
    position: 'absolute',
    right: 0,
    bottom: 0,
  },
  cajaVerde: {
    width: 100,
    height: 100,
    backgroundColor: 'green',
    borderWidth: 10,
    borderColor: 'white',
    left: 100,
  },
});
