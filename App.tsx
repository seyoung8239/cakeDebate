import React, {useState, useEffect} from 'react';
import 'react-native-gesture-handler';
import {enableScreens} from 'react-native-screens';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Landing from './src/screen/Landing';
import Login from './src/screen/Login/Login';
import Privacy from './src/screen/Login/Privacy';
import SetBaker from './src/screen/Login/SetBaker';

enableScreens();

const App = () => {
  // const [landing, setLanding] = useState(true);
  // useEffect(() => {
  //   setTimeout(() => {
  //     setLanding(false);
  //   }, 1000);
  // }, []);

  // if (landing) return <Landing />;
  const Stack = createNativeStackNavigator();

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Landing">
          <Stack.Screen
            name="Landing"
            component={Landing}
            options={{headerShown: false}}
          />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Privacy" component={Privacy} />
          <Stack.Screen name="SetBaker" component={SetBaker} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
