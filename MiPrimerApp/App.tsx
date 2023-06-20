import React from 'react';
// import {CounterScren} from './src/screens/CounterScren';
// import {BoxObjectModelScreen} from './src/screens/BoxObjectModelScreen';
import {SafeAreaView} from 'react-native';
import {FlexScren} from './src/screens/FlexScren';
// import {DimensionesScreen} from './src/screens/DimensionesScreen';
// import {Position} from './src/screens/Position';

export const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      {/* <BoxObjectModelScreen /> */}
      {/* <DimensionesScreen /> */}
      {/* <Position /> */}
      <FlexScren />
    </SafeAreaView>
  );
};
