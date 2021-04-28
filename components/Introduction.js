import React, { useState } from 'react';
import { Image, StyleSheet, TouchableOpacity } from 'react-native'
import { Container, Header, Title, Content, Footer, Button, FooterTab, Left, Right, Body, Icon, Text } from 'native-base';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { getTheme, StyleProvider } from 'native-base'
import customVariables from '../theme/variables'
import Axios from 'axios'

export default function Introduction(){
    return(
      <StyleProvider style={getTheme(customVariables)}>
 <Container>
        <Content>
          <Text>
            This is Content Section
          </Text>
        </Content>
        <Footer>
          <FooterTab>
            <Button vertical>
              <Icon name="home" type="Entypo" />
              <Text>Inicio</Text>
            </Button>
            <Button vertical>
              <Icon name="magnifying-glass" type="Entypo" />
              <Text>Buscar</Text>
            </Button>
            <Button vertical active>
              <Icon active name="folder-music" type="Entypo" />
              <Text>Biblioteca</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
      </StyleProvider>
    );
}
