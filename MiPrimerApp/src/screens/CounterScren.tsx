import React, {useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Faq} from '../components/Faq';

export const CounterScren = () => {
  const [contador, setContador] = useState(10);
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Contador:{contador} </Text>
      <Faq title="+1" onPress={() => setContador(contador + 1)} />
      <Faq title="-1" position="bl" onPress={() => setContador(contador - 1)} />

      {/* <TouchableOpacity
        onPress={}
        style={styles.faqLocationR}>
        <View style={styles.faq}>
          <Text style={styles.faqText}>-1</Text>
        </View>
      </TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  titulo: {
    textAlign: 'center',
    fontSize: 40,
    color: 'black',
    top: -10,
  },
  faqLocationR: {
    position: 'absolute',
    bottom: 25,
    left: 25,
  },
});
