import React, { useState } from 'react'
import { Container, Header, Body, Title, Content, Left, List, ListItem, Right, Text } from 'native-base'
import { getTheme, StyleProvider } from 'native-base'
import customVariables from '../theme/variables'
import { View, StyleSheet, TouchableOpacity, Image, FlatList } from 'react-native'
import { useEffect } from 'react'
import axios from 'axios'


export default function Albumn(props) {

    const [canciones, setCanciones] = useState([])

    useEffect(() => {
        getCanciones()
    }, [])

    const getCanciones = async () => {
        let formData = new FormData();
        formData.append("option", "Todos")

        await axios({
            method: "post",
            url: 'http://192.168.1.75/musicfy/database/api.php',
            data: formData,
            config: { headers: { "Content-type": "multipart/form-data" } },
        })
            .then((response) => {
                setCanciones(response.data)
                console.log(response.data)
                if (response.data.login == true) {
                    alert("hola")
                }
            })
            .catch((error) => {
                console.log("Error login", error);
                alert("Algo salió mal, ingresa de nuevo tus datos");
            })
    }

    return (
        <StyleProvider style={getTheme(customVariables)}>
            <Container style={styles.container}>
                <Header searchBar rounded>
                    <Body>
                        <Title style={{ fontSize: 30, fontWeight: 'bold' }}>Gorillaz</Title>
                    </Body>
                </Header>
                <Content>
                <FlatList
                        rounded
                        data={canciones}
                        keyExtractor={(item) => item.id_cancion}
                        renderItem={({ item }) => (
                            <List style={{backgroundColor: "#2f2b3c", }} >
                                <ListItem
                                    avatar
                                    bottomDivider
                                    button
                                    style={{paddingRight: 50, backgroundColor: "#2f2b3c", }} >
                                    <Left />
                                    <Body>
                                        <TouchableOpacity>
                                            <Text style={{
                                                textAlign: 'left', backgroundColor: "#2f2b3c",
                                                fontSize: 20,
                                                color: '#fff',
                                                fontWeight: 'bold',
                                                paddingRight: 20,
                                                paddingTop: 30
                                            }}>{item.nombreCancion}</Text>
                                        </TouchableOpacity>
                                    </Body>
                                    <Right />
                                </ListItem>

                            </List>
                        )}
                    />
                </Content>
            </Container>
        </StyleProvider>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#282c34',
    },
    button: {
        backgroundColor: "#2f2b3c",
        borderRadius: 15,
        width: 400,
        height: 90,
        marginVertical: 5,
        marginHorizontal: 2,
    },
    textBody: {
        textAlign: 'right',
        fontSize: 20,
        color: '#fff',
        fontWeight: 'bold',
        paddingRight: 20,
        paddingTop: 30
    },
    listado: {
        flexDirection: 'column',
        flexWrap: 'wrap',
        justifyContent: 'space-between'
    },
    listadoItem: {
        flexBasis: '48%'
    }
})