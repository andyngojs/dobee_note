import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

// This is root navigator, All stack on the app still inside bag
export function RootNavigator() {
  return (
    <NavigationContainer>
      <View>
        <Text>Hello World</Text>
        <Text>
          This is a template app React Native. Installed React Navigation and
          Redux Toolkit
        </Text>
      </View>
    </NavigationContainer>
  );
}
