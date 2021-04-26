import React from 'react';
import { Image } from 'react-native'
import { Container, Header, Content, Form, Item, Input, Label, Left,  Icon, Body, Title, Right, Text, View, Button } from 'native-base';
import { getTheme, StyleProvider } from 'native-base'
import customVariables from '../theme/variables'

export default function Login() {
    return (
        <StyleProvider style={getTheme(customVariables)}>
            <Container style={{backgroundColor: '#282c34',}}>
            <Header>
                <Left />
                <Body>
                    <Title>Login</Title>
                </Body>
                <Right />
            </Header>
            <Content>
                <View style={{paddingTop: 40, justifyContent: 'center', alignItems: 'center'}}>
                    <Image
                    style={{width: 100, height: 100, resizeMode: 'center'}}
                    source={require('../assets/images/loga.png')}
                    />
                    <Label/>
                    <Label style={{color: '#fff', fontWeight: 'bold', fontSize: 26,}}>Musicfy</Label>
                </View>

                <Form style={{paddingHorizontal: 30, paddingVertical: 50,}}>
                    <Label style={{color: '#61dafb', fontWeight: 'bold', fontSize: 20,}}>
                        Usuario
                    <Icon name='person' />
                    </Label>
                    <Input style={{color: '#fff'}} placeholder='UserName123'/>
                    <Label/>
                    <Label style={{color: '#61dafb', fontWeight: 'bold', fontSize: 20,}}>
                        Contraseña
                    <Icon name='lock-closed' />
                    </Label>
                    <Input style={{color: '#fff'}} placeholder='**********'/>
                    <Label/>
                    <Button warning full rounded>
                        <Text>Login</Text>
                    </Button>
                </Form>
            </Content>
        </Container>
        </StyleProvider>
    );
}