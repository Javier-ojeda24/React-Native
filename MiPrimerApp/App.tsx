import React from 'react';
// import {CounterScren} from './src/screens/CounterScren';
// import {BoxObjectModelScreen} from './src/screens/BoxObjectModelScreen';
import {SafeAreaView} from 'react-native';
// import {DimensionesScreen} from './src/screens/DimensionesScreen';
import {Position} from './src/screens/Position';

export const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      {/* <BoxObjectModelScreen /> */}
      {/* <DimensionesScreen /> */}
      <Position />
    </SafeAreaView>
  );
};
