import React, { useState } from 'react';
import { Image, StyleSheet, TouchableOpacity, Button } from 'react-native'
import { Container, Header, Content, Form, Input, Label, Left, Icon, Body, Title, Right, Text, View, Item } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { getTheme, StyleProvider } from 'native-base'
import customVariables from '../theme/variables'
import Axios from 'axios'
import Intro from './Introduction'

function HomeScreen({ navigation }) {
    const [userName, setUserName] = useState('')
    const [contrasena, setContrasena] = useState('')
    const [validate, setValidate] = useState(false)

    const handleSubmit = async () => {
        let formData = new FormData();
        formData.append('login', 'loginQuery')
        formData.append('userName', userName)
        formData.append('contrasena', contrasena)

        await Axios({
            method: 'post',
            url: 'http://192.168.1.75/musicfy/database/api.php',
            data: formData,
            config: { headers: { 'Content-Type': 'multipart/form-data' } }
        })
            .then((response) => {
                if (response.data.login == true) {
                    alert("Logeado");
                    
                    navigation.navigate('Introduction')
                    console.log('Response Login', response)
                } else {
                    alert("Datos Incorrectos");
                }
            })
            .catch(error => {
                console.log('Error en el login', error)
            })
        console.log('props Login', userName)
    }
    return (
        <StyleProvider style={getTheme(customVariables)}>
            <Container style={styles.container}>
                <Content>
                    <View style={styles.viewContainer}>
                        <Image
                            style={styles.image}
                            source={require('../assets/images/loga.png')}
                        />
                        <Label />
                        <Label style={styles.title}>Musicfy</Label>
                    </View>
                    <Form style={styles.form}>
                        <Label style={styles.label}>
                            Usuario
                        <Icon name='person' />
                        </Label>
                        <Input style={styles.input} placeholder='UserName123' value={userName} onChangeText={setUserName} />
                        <Label />
                        <Left>
                            <Label style={styles.label}>
                                Contraseña
                            </Label>

                        </Left>
                        <Body />
                        <Right>
                            <Icon style={{ fontSize: 30, }} name='lock-closed' />
                        </Right>

                        <Input secureTextEntry={true} style={styles.input} placeholder='**********' value={contrasena} onChangeText={setContrasena} />

                        <Label />
                        <Button onPress={handleSubmit} title='Iniciar Sesión' />
                        <Label />
                        <TouchableOpacity>
                            <Text style={styles.forgot}>¿Eres nuevo? Registrate aqui!</Text>
                        </TouchableOpacity>
                    </Form>
                </Content>
            </Container>
        </StyleProvider>
    );
}
function IntroductionScreen({ navigation }) {
    return (
        alert("Hola")
    );
}
const Stack = createStackNavigator();
export default function Login() {
    return (

        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen}></Stack.Screen>
                <Stack.Screen name="Introduction" component={IntroductionScreen}></Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#282c34',
    },
    viewContainer: {
        paddingTop: 70,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: 100,
        height: 100,
        resizeMode: 'center'
    },
    title: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 26,
    },
    form: {
        paddingHorizontal: 30,
        paddingVertical: 50,
    },
    label: {
        color: '#61dafb',
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center',
        marginRight: 50
    },
    input: {
        color: '#fff'
    },
    forgot: {
        color: '#fff',
        textAlign: 'center'
    }
})