import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TodosScreen from './src/screens/TodosScreen';
import NotesScreen from './src/screens/NotesScreen';
import { NavigationContainer } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

export default function Notes() {
  return (
<NavigationContainer>
    <Tab.Navigator>
   <Tab.Screen name='Todos' component={TodosScreen} />
   <Tab.Screen name='Notes' component={NotesScreen} />
   </Tab.Navigator>
   </NavigationContainer>
  )
}

const styles = StyleSheet.create({})