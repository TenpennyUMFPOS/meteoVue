import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplachScreen from './screens/splash.screen';
import HomeScreen from './screens/home.screen';
import CitiesScreen from './screens/cities.screen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splach" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splach" component={SplachScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="CitiesScreen" component={CitiesScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
