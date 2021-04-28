import React, { useState } from 'react';
import { Container, Header, Title, Content, Footer, Button, FooterTab, Left, Right, Body, Icon, Text } from 'native-base';
import { getTheme, StyleProvider } from 'native-base'
import customVariables from '../theme/variables'

export default function Home() {
  return (
    <StyleProvider style={getTheme(customVariables)}>
      <Container>
        <Content>
          <Text>
            This is Content Section
          </Text>
        </Content>
        <Footer>
          <FooterTab>
            <Button vertical active>
              <Icon active name="home" type="Entypo" />
              <Text>Inicio</Text>
            </Button>
            <Button vertical>
              <Icon name="magnifying-glass" type="Entypo" />
              <Text>Buscar</Text>
            </Button>
            <Button vertical>
              <Icon name="folder-music" type="Entypo" />
              <Text>Biblioteca</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    </StyleProvider>
  );
}
