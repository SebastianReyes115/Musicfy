import React, { useState } from 'react';
import { Container, Header, Title, Content, Footer, Button, FooterTab, Left, Right, Body, Icon, Text } from 'native-base';
import { getTheme, StyleProvider } from 'native-base'
import customVariables from '../theme/variables'

export default function Biblioteca(){
return(
    <StyleProvider style={getTheme(customVariables)}>
         <Container>
        <Content>
            <Text>
                ESTAS EN BIBLIOTECA
            </Text>
        </Content>
    </Container>
    </StyleProvider>
);
}