import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import Home from './components/Home';
import Details from './components/Details';
import Liked from './components/Liked';
import Profile from './components/Profile';
import colors from './assets/colors/colors';
import { Entypo, MaterialCommunityIcons } from '@expo/vector-icons';


import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        "tabBarActiveTintColor": colors.orange,
        "tabBarInactiveTintColor": colors.gray,
        "tabBarShowLabel": false,
        "tabBarStyle": [
          {
            "display": "flex"
          },
          styles.tabBar
        ]
      }}
    >
      <Tab.Screen name='Home' component={Home} options={{
        tabBarIcon: ({color}) => <Entypo name='home' size={32} color={color} />,
        headerShown: false
      }}/>
      <Tab.Screen name='Liked' component={Liked} options={{
        tabBarIcon: ({color}) => <Entypo name='heart' size={32} color={color} />,
        headerShown: false
      }}/>
      <Tab.Screen name='Profile' component={Profile} options={{
        tabBarIcon: ({color}) => <MaterialCommunityIcons name='account' size={32} color={color} />,
        headerShown: false
      }}/>
    </Tab.Navigator>
  )
}

export default function App() {
  let [fontsLoaded] = useFonts({
    'Lato-Black': require('./assets/fonts/Lato-Black.ttf'),
    'Lato-BlackItalic': require('./assets/fonts/Lato-BlackItalic.ttf'),
    'Lato-Bold': require('./assets/fonts/Lato-Bold.ttf'),
    'Lato-BoldItalic': require('./assets/fonts/Lato-BoldItalic.ttf'),
    'Lato-Italic': require('./assets/fonts/Lato-Italic.ttf'),
    'Lato-Light': require('./assets/fonts/Lato-Light.ttf'),
    'Lato-LightItalic': require('./assets/fonts/Lato-LightItalic.ttf'),
    'Lato-Regular': require('./assets/fonts/Lato-Regular.ttf'),
    'Lato-Thin': require('./assets/fonts/Lato-Thin.ttf'),
    'Lato-ThinItalic': require('./assets/fonts/Lato-ThinItalic.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='TabNavigator' component={TabNavigator} options={{headerShown: false}}/>
          <Stack.Screen name='Details' component={Details} options={{headerShown: false}}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: colors.white,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20
  }
});
