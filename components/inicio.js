import React, { useState } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Left, Right, Body, Icon, Text } from 'native-base';
import { getTheme, StyleProvider, TouchableOpacity, Image } from 'native-base'
import customVariables from '../theme/variables'
import { View, Button } from 'react-native'
import { Audio } from 'expo-av';


export default function inicio(){
  return(
<Container>
  <Content>
    <Text>Inicio</Text>
  </Content>
</Container>
  );
}