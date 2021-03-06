import React, { useState } from 'react';
import { Container, Header, Title, Content, Footer, Button, FooterTab, Left, Right, Body, Icon, Text } from 'native-base';
import { getTheme, StyleProvider } from 'native-base'
import customVariables from '../theme/variables'
import Inicio from './Inicio'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import Buscar from './Buscar'
import Biblioteca from './Biblioteca'
import { HeaderBackButton } from '@react-navigation/stack';

function InicoScreen() {
  return (
    <Inicio />
  );
}

function BuscarScreen() {
  return (
    <Buscar />
  );
}

function BibliotecaScreen() {
  return (
    <Biblioteca />
  );
}

const Tab = createBottomTabNavigator();

export default function Home() {
  return (
    <StyleProvider style={getTheme(customVariables)}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Inicio') {
              iconName = focused ? 'book-outline' : 'book-outline';
            } else if (route.name === 'Buscar') {
              iconName = focused ? 'search-outline' : 'search-outline';
            }
            if (route.name === 'Biblioteca') {
              iconName = focused ? 'archive-outline' : 'archive-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}

        tabBarOptions={{
          activeTintColor: '#007aff',
          inactiveTintColor: 'gray',
          style: {
            backgroundColor:'black'
          }
        }}
      
      >
        <Tab.Screen name="Inicio" component={InicoScreen} options={{ title: 'Inicio', headerStyle: { backgroundColor: "black" }, headerTintColor: "white" }} options={{ headerLeft: null }}></Tab.Screen>
        <Tab.Screen name="Buscar" component={BuscarScreen} options={{ headerShown: false, title: 'Buscar', headerStyle: { backgroundColor: "black" }, headerTintColor: "white" }}></Tab.Screen>
        <Tab.Screen name="Biblioteca" component={BibliotecaScreen} options={{ title: 'Biblioteca', headerStyle: { backgroundColor: "black" }, headerTintColor: "white" }}></Tab.Screen>
      </Tab.Navigator>
    </StyleProvider>
  );
}
