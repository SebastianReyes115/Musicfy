import React, { useState } from 'react';
import { Image, StyleSheet, TouchableOpacity, Button } from 'react-native'
import { Container, Header, Content, Form, Input, Label, Left, Icon, Body, Title, Right, Text, View, Item } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { getTheme, StyleProvider } from 'native-base'
import customVariables from '../theme/variables'
import Axios from 'axios'
import Home from './Home'

function LoginScreen({ navigation }) {
    const [userName, setUserName] = useState('')
    const [contrasena, setContrasena] = useState('')

    const handleSubmit = async () => {
        let formData = new FormData();
        formData.append('login', 'loginQuery')
        formData.append('userName', userName)
        formData.append('contrasena', contrasena)

        await Axios({
            method: 'post',
            url: 'http://192.168.0.15/musicfy/database/api.php',
            data: formData,
            config: { headers: { 'Content-Type': 'multipart/form-data' } }
        })
            .then((response) => {
                if (response.data.login == true) {
                    navigation.navigate('Home')
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
                        <Label style={styles.label}>
                            Contraseña
                                <Icon style={{ fontSize: 30, }} name='lock-closed' />
                        </Label>
                        <Input secureTextEntry={true} style={styles.input} placeholder='**********' value={contrasena} onChangeText={setContrasena} />
                        <Label />
                        <Button color='orange' onPress={handleSubmit} title='Iniciar Sesión' />
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

function HomeScreen({ navigation }) {
    return (
        <Home />
    )
}

const Stack = createStackNavigator()

export default function Login() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false}}></Stack.Screen>
                <Stack.Screen name="Home" component={HomeScreen} options={{ title: "Bienvenido ", headerStyle: { backgroundColor: "black" }, headerTintColor: "white" }}></Stack.Screen>
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
        //textAlign: 'center',
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