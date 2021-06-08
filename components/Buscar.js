import React from 'react';
import { StyleSheet, TouchableOpacity, View, Image } from "react-native";
import { Container, Header, Item, Input, Icon, Text, Content, Button } from 'native-base';
import { getTheme, StyleProvider } from 'native-base'
import customVariables from '../theme/variables'
import { useState, useEffect } from 'react/cjs/react.development';
import axios from 'axios'

export default function Buscar() {
    const [nombreCancion, setNombreCancion] = useState('')

    useEffect(() => {
        getCanciones()
    }, [])

    const getCanciones = async () => {
        let formData = new FormData();
        formData.append("option", "Buscar")
        formData.append("nombreCancion", nombreCancion)

        await axios({
            method: "post",
            url: 'http://192.168.1.75/musicfy/database/api.php',
            data: formData,
            config: { headers: { "Content-type": "multipart/form-data" } },
        })
            .then((response) => {
                setNombreCancion(response.data)
                console.log(response.data)
                //alert('Canción encontrada')
            })
            .catch((error) => {
                console.log("Error login", error);
                //alert("Cancion no encontrada");
            })
    }

    return (
        <StyleProvider style={getTheme(customVariables)}>
            <Container style={styles.container}>
                <Header searchBar rounded>
                    <Item>
                        <Icon name="musical-notes-outline" />
                        <Input value={nombreCancion} onChangeText={setNombreCancion} placeholder="Cancion, Artista" />
                        <Icon name="ios-search" onPress={getCanciones}/>

                    </Item>
                </Header>
                <Content>
                    <View>
                        <Text style={styles.textTitle}>Top generos</Text>
                    </View>
                    <View style={styles.listado}>
                        <View style={styles.listadoItem}>
                            <TouchableOpacity style={styles.buttonRock} >
                                <Text style={styles.textBody}>Rock</Text>
                                <Image source={require('../assets/images/rock.png')} style={{ height: 90, width: 90 }} />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.listadoItem}>
                            <TouchableOpacity style={styles.buttonPop} >
                                <Text style={styles.textBody}>Pop</Text>
                                <Image source={require('../assets/images/pop.png')} style={{ height: 90, width: 90 }} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View>
                        <Text style={styles.textTitle}>Todos los generos</Text>
                    </View>
                    <View style={styles.listado}>
                        <View style={styles.listadoItem}>
                            <TouchableOpacity style={styles.buttonRomance} >
                                <Text style={styles.textBody}>Romance</Text>
                                <Image source={require('../assets/images/romance.jpg')} style={{ height: 90, width: 90 }} />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.listadoItem}>
                            <TouchableOpacity style={styles.buttonBanda} >
                                <Text style={styles.textBody}>Banda</Text>
                                <Image source={require('../assets/images/banda.jpg')} style={{ height: 90, width: 90 }} />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.listadoItem}>
                            <TouchableOpacity style={styles.buttonJazz} >
                                <Text style={styles.textBody}>Jazz</Text>
                                <Image source={require('../assets/images/jazz.jpg')} style={{ height: 90, width: 90 }} />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.listadoItem}>
                            <TouchableOpacity style={styles.buttonCorridos} >
                                <Text style={styles.textBody}>Corridos</Text>
                                <Image source={require('../assets/images/corridos.jpg')} style={{ height: 90, width: 90 }} />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.listadoItem}>
                            <TouchableOpacity style={styles.buttonCumbias} >
                                <Text style={styles.textBody}>Cumbias</Text>
                                <Image source={require('../assets/images/cumbias.jpg')} style={{ height: 90, width: 90 }} />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.listadoItem}>
                            <TouchableOpacity style={styles.buttonRB} >
                                <Text style={styles.textBody}>R&B</Text>
                                <Image source={require('../assets/images/rb.png')} style={{ height: 90, width: 90 }} />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.listadoItem}>
                            <TouchableOpacity style={styles.buttonMetall} >
                                <Text style={styles.textBody}>Metall</Text>
                                <Image source={require('../assets/images/metall.jpg')} style={{ height: 90, width: 90 }} />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.listadoItem}>
                            <TouchableOpacity style={styles.buttonSleep} >
                                <Text style={styles.textBody}>Sleep</Text>
                                <Image source={require('../assets/images/sleep.jpg')} style={{ height: 90, width: 90 }} />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.listadoItem}>
                            <TouchableOpacity style={styles.buttonSountracks} >
                                <Text style={styles.textBody}>Sountracks</Text>
                                <Image source={require('../assets/images/rapture.jpg')} style={{ height: 90, width: 90 }} />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.listadoItem}>
                            <TouchableOpacity style={styles.buttonChill} >
                                <Text style={styles.textBody}>Chill</Text>
                                <Image source={require('../assets/images/chill.jpg')} style={{ height: 90, width: 90 }} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </Content>
            </Container>
        </StyleProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        backgroundColor: '#151c22'
    },
    textTitle: {
        fontSize: 23,
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'left'
    },
    buttonRock: {
        alignItems: "center",
        backgroundColor: "#8c67ac",
        borderRadius: 15,
        width: '100%',
        height: 150,
        marginVertical: 5,
        marginHorizontal: 2,
        padding: 10
    },
    buttonPop: {
        alignItems: "center",
        backgroundColor: "#e51e31",
        borderRadius: 15,
        width: '100%',
        height: 150,
        marginVertical: 5,
        marginHorizontal: 2,
        padding: 10
    },
    buttonRomance: {
        alignItems: "center",
        backgroundColor: "#477d95",
        borderRadius: 15,
        width: '100%',
        height: 150,
        marginVertical: 5,
        marginHorizontal: 2,
        padding: 10
    },
    buttonBanda: {
        alignItems: "center",
        backgroundColor: "#e13300",
        borderRadius: 15,
        width: '100%',
        height: 150,
        marginVertical: 5,
        marginHorizontal: 2,
        padding: 10
    },
    buttonJazz: {
        alignItems: "center",
        backgroundColor: "#8b1932",
        borderRadius: 15,
        width: '100%',
        height: 150,
        marginVertical: 5,
        marginHorizontal: 2,
        padding: 10
    },
    buttonCorridos: {
        alignItems: "center",
        backgroundColor: "#1e3264",
        borderRadius: 15,
        width: '100%',
        height: 150,
        marginVertical: 5,
        marginHorizontal: 2,
        padding: 10
    },
    buttonCumbias: {
        alignItems: "center",
        backgroundColor: "#777777",
        borderRadius: 15,
        width: '100%',
        height: 150,
        marginVertical: 5,
        marginHorizontal: 2,
        padding: 10
    },
    buttonRB: {
        alignItems: "center",
        backgroundColor: "#27856a",
        borderRadius: 15,
        width: '100%',
        height: 150,
        marginVertical: 5,
        marginHorizontal: 2,
        padding: 10
    },
    buttonMetall: {
        alignItems: "center",
        backgroundColor: "#4f374f",
        borderRadius: 15,
        width: '100%',
        height: 150,
        marginVertical: 5,
        marginHorizontal: 2,
        padding: 10
    },
    buttonSleep: {
        alignItems: "center",
        backgroundColor: "#477d95",
        borderRadius: 15,
        width: '100%',
        height: 150,
        marginVertical: 5,
        marginHorizontal: 2,
        padding: 10
    },
    buttonChill: {
        alignItems: "center",
        backgroundColor: "#e8125c",
        borderRadius: 15,
        width: '100%',
        height: 150,
        marginVertical: 5,
        marginHorizontal: 2,
        padding: 10
    },
    buttonSountracks: {
        alignItems: "center",
        backgroundColor: "#158a08",
        borderRadius: 15,
        width: '100%',
        height: 150,
        marginVertical: 5,
        marginHorizontal: 2,
        padding: 10
    },
    textBody: {
        textAlign: 'center',
        fontSize: 25,
        color: '#fff',
        fontWeight: 'bold'
    },
    textBodyName: {
        textAlign: 'center',
        fontSize: 16,
        color: '#5a636e',
        fontWeight: 'bold'
    },
    listado: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between'
    },
    listadoItem: {
        flexBasis: '48%'
    }
});