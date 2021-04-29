import React, { useState } from 'react'
import { Image, StyleSheet, TouchableOpacity, Button } from 'react-native'
import { getTheme, StyleProvider } from 'native-base'
import { Container, Header, Content, Form, Input, Label, Left, Icon, Body, Title, Right, Text, View, Item } from 'native-base';
import customVariables from '../theme/variables'
import Axios from 'axios'

export default function SignUp() {
    const [nombre, setName] = useState('')
    const [userName, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [contrasena, setContrasena] = useState('')

    const handleSubmit = async () => {
        let formData = new FormData();
        formData.append('signup', 'signupQuery')
        formData.append('nombre', nombre)
        formData.append('userName', userName)
        formData.append('email', email)
        formData.append('contrasena', contrasena)

        await Axios({
            method: 'post',
            url: 'http://192.168.1.75/musicfy/database/api.php',
            data: formData,
            config: { headers: { 'Content-Type': 'multipart/form-data' } }
        })
            .then((response) => {
                if (response.data.insert == true) {
                    alert("Usuario Registrado")
                    console.log('Response Login', response)
                } else {
                    alert("Datos Incorrectos");
                }
            })
            .catch(error => {
                console.log('Error en el login', error)
            })
        console.log('props insert', userName)
    }

    return (
        <StyleProvider style={getTheme(customVariables)}>
            <Container style={styles.container}>
                <Content>
                    <Form style={styles.form}>
                        <Label style={styles.label}>
                            Nombre (s)
                        </Label>
                        <Input style={styles.input} placeholder='Tito Hrz' value={nombre} onChangeText={setName}/>
                        <Label />
                        <Label style={styles.label}>
                            Nombre de Usuario
                        </Label>
                        <Input style={styles.input} placeholder='UserName123' value={userName} onChangeText={setUserName}/>
                        <Label />
                        <Label style={styles.label}>
                            e-mail
                        </Label>
                        <Input style={styles.input} placeholder='tito@example.com' value={email} onChangeText={setEmail}/>
                        <Label style={styles.label}>
                            Contraseña
                        </Label>
                        <Input secureTextEntry={true} style={styles.input} placeholder='**********' value={contrasena} onChangeText={setContrasena}/>
                        <Label />
                        <Label />
                        <Button color='orange' title='Registrarse' onPress={handleSubmit} />
                        <Label />
                    </Form>
                </Content>
            </Container>
        </StyleProvider>
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