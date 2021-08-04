import React, {useState, useEffect} from 'react';
import 'react-native-gesture-handler';
import {enableScreens} from 'react-native-screens';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';

import Landing from './src/screen/Landing';
import Login from './src/screen/Login/Login';

enableScreens();

const App = () => {
  const [landing, setLanding] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLanding(false);
    }, 1000);
  }, []);

  if (landing) return <Landing />;

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Login />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
