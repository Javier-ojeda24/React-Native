import React from 'react';
import {StyleSheet, Text, TouchableNativeFeedback, View} from 'react-native';

interface Props {
  title: string;
  position?: 'br' | 'bl';
  onPress: () => void;
}
export const Faq = ({title, onPress, position = 'br'}: Props) => {
  return (
    <View
      style={[
        styles.faqLocation,
        position === 'bl' ? styles.left : styles.rigth,
      ]}>
      <TouchableNativeFeedback
        onPress={onPress}
        background={TouchableNativeFeedback.Ripple('#28425b', false, 30)}>
        <View style={styles.faq}>
          <Text style={styles.faqText}>{title}</Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  faqLocation: {
    position: 'absolute',
    bottom: 25,
  },
  rigth: {
    right: 25,
  },
  left: {left: 25},
  faq: {
    backgroundColor: '#5856d6',
    width: 60,
    height: 60,
    borderRadius: 100,
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.57,
    shadowRadius: 15.19,
    elevation: 2,
  },
  faqText: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
});
