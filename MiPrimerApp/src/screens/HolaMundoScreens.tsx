import React from 'react';
import {Text, View} from 'react-native';

export const HolaMundoScreens = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
      }}>
      <Text
        style={{
          fontSize: 45,
          textAlign: 'center',
          color: 'green',
        }}>
        Hola como andas?
      </Text>
    </View>
  );
};
