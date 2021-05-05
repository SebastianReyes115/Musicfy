import React, { useState } from 'react';
import { Container, Header, Title, Content, Footer, Button, FooterTab, Left, Right, Body, Icon, Text } from 'native-base';
import { getTheme, StyleProvider } from 'native-base'
import customVariables from '../theme/variables'
import Inicio from './inicio'

export default function Home() {
 function renderSelectedTab () {
    switch (this.state.selectedTab) {
      case 'inicio':
        return (<Inicio></Inicio>);
        break;
      case 'buscar':
        return (<Inicio></Inicio>);
        break;
      case 'biblioteca':
        return (<Inicio></Inicio>);
        break;
      default:
    }
  }

  return (
    <StyleProvider style={getTheme(customVariables)}>
      <Container>
        <Content>
          {this.renderSelectedTab()}
        </Content>
        <Footer>
          <FooterTab>
            <Button vertical active={this.state.selectedTab==='inicio'} onPress={()=> this.setState({selectedTab:'inicio'})}>
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
