import React, { useState } from 'react';
import { Container, Header, Title, Content, Footer, Button, FooterTab, Left, Right, Body, Icon, Text } from 'native-base';
import { getTheme, StyleProvider } from 'native-base'
import customVariables from '../theme/variables'
import Inicio from './inicio'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import Buscar from './Buscar'

function InicoScreen(){
  return(
    <Inicio></Inicio>
  );
}
function BuscarScreen(){
  return(
<Buscar></Buscar>
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
              iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline';
            } else if (route.name === 'Buscar') {
              iconName = focused ? 'ios-list-box' : 'ios-list';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
        >
          <Tab.Screen name="Inicio" component={InicoScreen}></Tab.Screen>
          <Tab.Screen name="Buscar" component={BuscarScreen}></Tab.Screen>
        </Tab.Navigator>
    </StyleProvider>
  );
}
