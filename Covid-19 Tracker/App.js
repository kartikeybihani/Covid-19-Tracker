import React from 'react';
import Home from './routes/Home';
import Countries from './routes/Countries';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Countries" component={Countries} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
