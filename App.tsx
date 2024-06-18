import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TodosScreen from './src/screens/TodosScreen';
import NotesScreen from './src/screens/NotesScreen';
import { NavigationContainer } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

export default function Notes() {
  return (
<NavigationContainer>
<Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: "#49ace9",
                tabBarInactiveTintColor: "black"
            }}
        >
          <Tab.Screen name="Notes" component={NotesScreen}
                options={{
                    tabBarLabel: 'Notes',
                    tabBarIcon: ({ color, size }) => (
                       // <Text style={{fontSize:29}}>+</Text>
                        <MaterialCommunityIcons name="list" color={color} size={size} />
                    ),
                }} />

<Tab.Screen name="Todo" component={TodosScreen}
                options={{
                    tabBarLabel: 'Todo',
                    tabBarIcon: ({ color, size }) => (
                        // <Text style={{fontSize:29}}>+</Text>
            <MaterialCommunityIcons name="list" color={color} size={size} />
                    ),
                }} />
    {/* <Tab.Navigator>
   <Tab.Screen name='Todos' component={} />
   <Tab.Screen name='Notes' component={NotesScreen} /> */}
   </Tab.Navigator>
   </NavigationContainer>
  )
}

const styles = StyleSheet.create({})