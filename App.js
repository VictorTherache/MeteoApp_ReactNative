import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import About from './components/About';
import Search from './components/Search';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import style from './Style';
import { Ionicons } from '@expo/vector-icons';



const TopTab = createMaterialTopTabNavigator();

export default function App() {
  return (
    <View style={{flex:1}}>
      <StatusBar hidden={true} />
      <NavigationContainer>
        <TopTab.Navigator tabBarPosition='bottom'>
          <TopTab.Screen name="Search" component={Search}   
          option={{
            tabBarIcon: () =>  <Ionicons name="md-checkmark-circle" size={32} color="green" />
        }} />
          <TopTab.Screen name="About" component={About} />
        </TopTab.Navigator>
      </NavigationContainer>
     
    </View>
  );
}
