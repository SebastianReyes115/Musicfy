import React, { useState } from 'react';
import { Container, Header, Button, Title, Content, Footer, FooterTab, Left, Right, Body, Icon, Text, Item, Input } from 'native-base';
import { getTheme, StyleProvider } from 'native-base'
import customVariables from '../theme/variables'
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native'

export default function Biblioteca() {
  return (
    <StyleProvider style={getTheme(customVariables)}>
      <Container style={styles.container}>
        <Header searchBar rounded>
          <Body>
            <Title style={{ fontSize: 30, fontWeight: 'bold' }}>Tu Libreria</Title>
          </Body>
        </Header>
        <Content>
          <View style={styles.listadoItem}>
            <TouchableOpacity style={styles.button} >
              <Text style={styles.textBody}>Canciones que te gustan</Text> 
              {/* Cambiar sobre la base de datos*/}
              <Text style={{ textAlign: 'right', fontSize: 10, color: 'grey', fontWeight: 'bold', paddingRight: 140, }}>no.Canciones Canciones</Text>
              <Image source={require('../assets/images/like.png')} style={{ width: 70, height: 70, position: 'absolute', left: 15, top: 10 }} />
            </TouchableOpacity>
          </View>
          {/* Cambiar sobre la base de datos que traiga todas sus listas de reproduccion*/}
          <View>
            <TouchableOpacity style={styles.button} >
              <Text style={styles.textBody}>Lista de reproduccion     </Text>
              {/* Cambiar sobre la base de datos*/}
              <Text style={{ textAlign: 'right', fontSize: 10, color: 'grey', fontWeight: 'bold', paddingRight: 140, }}>no.Canciones Canciones</Text>
              <Image source={require('../assets/images/like.png')} style={{ width: 70, height: 70, position: 'absolute', left: 15, top: 10 }} />
            </TouchableOpacity>
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
  button: {
    backgroundColor: "#2f2b3c",
    borderRadius: 15,
    width: 365,
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
  listadoItem: {
    flexBasis: '48%'
  },
})