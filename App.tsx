import React from 'react';
import 'react-native-gesture-handler';
import {enableScreens} from 'react-native-screens';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';

import Landing from './src/screen/Landing';

enableScreens();

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Landing />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
