import React from 'react'
import { Container, Header, Body, Title, Content, } from 'native-base'
import { getTheme, StyleProvider } from 'native-base'
import customVariables from '../theme/variables'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'


export default function Albumn() {
    return (
        <StyleProvider style={getTheme(customVariables)}>
            <Container style={styles.container}>
                <Header searchBar rounded>
                    <Body>
                        <Title style={{ fontSize: 30, fontWeight: 'bold' }}>Nombre del Album</Title>
                    </Body>
                </Header>
                <Content>
                    <View style={styles.listado}>
                        <View style={styles.listadoItem}>
                            <TouchableOpacity style={styles.button} >
                                <Text style={styles.textBody}>Canciones que te gustan</Text>
                                <Image source={require('../assets/images/like.png')} style={{ width: 70, height: 70, position: 'absolute', left: 15, top: 10 }} />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.listadoItem}>
                            <TouchableOpacity style={styles.button} >
                                <Text style={styles.textBody}>Nuevo Album de Gorillaz</Text>
                                <Image source={require('../assets/images/GorillazAlbumn.png')} style={{ width: 70, height: 70, position: 'absolute', left: 15, top: 10 }} />
                            </TouchableOpacity>
                        </View>
                    </View>
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