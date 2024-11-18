import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';

import Login from './src/pages/Login';
import InitialScreen from './src/pages/InitialScreen/InitialScreen';
import Signup from './src/pages/AccountCreation/Signup';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Temp from './src/pages/Generic_screen/Generic';
import Home from './src/pages/Home/home';
import Com from './src/pages/ComunicationScreen/Comunication';
import AngerCom from './src/pages/ComunicationScreen/Anger/Anger';
import Atention from './src/pages/ComunicationScreen/Atention/Atention';
import Food from './src/pages/ComunicationScreen/food/Food';
import Profile from './src/pages/ProfilePage/Profile';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
    prepareResources();
      <StatusBar barStyle="light-content" backgroundColor="#0000" />
      <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen
            options={{ headerShown: false }}
            name="Init"
            component={InitialScreen}
          />
        <Stack.Screen
            options={{ headerShown: false }}
            name="Home"
            component={Home}
          />
        <Stack.Screen
            options={{ headerShown: false }}
            name="Profile"
            component={Profile}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="Com"
            component={Com}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="Food"
            component={Food}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="Atenção"
            component={Atention}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="Anger"
            component={AngerCom}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="Login"
            component={Login}
          />

          <Stack.Screen
            options={{ headerShown: false }}
            name="Signup"
            component={Signup}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
