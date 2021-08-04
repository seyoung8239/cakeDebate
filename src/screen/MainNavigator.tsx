import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import FindDebate from './FindDebate';
import MyCake from './MyCake';
import OpenCakge from './OpenCake';
import Configuration from './Configuration';

const Tab = createBottomTabNavigator();

export default function MainNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="FindDebate" component={FindDebate} />
      <Tab.Screen name="MyCake" component={MyCake} />
      <Tab.Screen name="OpenCakge" component={OpenCakge} />
      <Tab.Screen name="Configuration" component={Configuration} />
    </Tab.Navigator>
  );
}
