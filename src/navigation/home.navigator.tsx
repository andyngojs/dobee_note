import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {HomeParamListProps} from '@model/navigation';

import AppIntro from '@screens/AppIntro';
import Home from '@screens/Home';

const HomeStack = createNativeStackNavigator<HomeParamListProps>();

const HomeNavigator = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="AppIntro"
        component={AppIntro}
        options={{
          headerShown: false,
        }}
      />
      <HomeStack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
    </HomeStack.Navigator>
  );
};

export default HomeNavigator;
