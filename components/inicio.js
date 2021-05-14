import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native'
import { Container, Header, Title, Content, Right, Body, Icon, Text, Button } from 'native-base';
import { getTheme, StyleProvider } from 'native-base'
import customVariables from '../theme/variables'
import { createStackNavigator } from '@react-navigation/stack'
import Album from './Album'

function AlbumScreen({ navigation }) {
  return (
    <Album />
  )
}

function InicioScreen({ navigation }) {
  return (
    <StyleProvider style={getTheme(customVariables)}>
      <Container style={styles.container}>
        <Header searchBar rounded>
          <Body>
            <Title style={{ fontSize: 30, fontWeight: 'bold' }}>Bienvenido!</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name="settings-outline" />
            </Button>
          </Right>
        </Header>
        <Content>
          <View style={styles.listado}>
            <View style={styles.listadoItem}>
              <TouchableOpacity onPress={() => navigation.navigate('album')} style={styles.button} >
                <Text style={styles.textBody}>Canciones que te gustan</Text>
                <Image source={require('../assets/images/like.png')} style={{ width: 70, height: 70, position: 'absolute', left: 15, top: 10 }} />
              </TouchableOpacity>
            </View>
            <View style={styles.listadoItem}>
              <TouchableOpacity onPress={() => navigation.navigate('album')} style={styles.button} >
                <Text style={styles.textBody}>Nuevo Album de Gorillaz</Text>
                <Image source={require('../assets/images/GorillazAlbumn.png')} style={{ width: 70, height: 70, position: 'absolute', left: 15, top: 10 }} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ flexDirection: 'row', paddingTop: 20 }}>
            <Image source={require('../assets/images/billie.jpg')} style={{ height: 90, width: 90, borderRadius: 90 / 2 }} />
            <View style={{ paddingLeft: 20, paddingTop: 10 }}>
              <Text style={{ color: '#7b7b7b', fontSize: 20 }}>Más de</Text>
              <Text style={{ color: '#fff', fontSize: 40 }}>Billie Eilish</Text>
            </View>
          </View>
          <ScrollView horizontal={true} style={{ paddingTop: 25 }}>
            <TouchableOpacity onPress={() => navigation.navigate('album')}>
              <Image source={require('../assets/images/pop.png')} style={{ height: 250, width: 250, marginRight: 20 }} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('album')}>
              <Image source={require('../assets/images/billiA1.jpg')} style={{ height: 250, width: 250, marginRight: 20 }} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('album')}>
              <Image source={require('../assets/images/billiA2.jpg')} style={{ height: 250, width: 250, marginRight: 20 }} />
            </TouchableOpacity>
          </ScrollView>
          <View style={{ flexDirection: 'row', paddingTop: 20 }}>
            <Image source={require('../assets/images/rapture.jpg')} style={{ height: 90, width: 90, borderRadius: 90 / 2 }} />
            <View style={{ paddingLeft: 20, paddingTop: 10 }}>
              <Text style={{ color: '#7b7b7b', fontSize: 20 }}>Sountrack</Text>
              <Text style={{ color: '#fff', fontSize: 40 }}>BioShock</Text>
            </View>
          </View>
          <ScrollView horizontal={true} style={{ paddingTop: 25 }}>
            <TouchableOpacity onPress={() => navigation.navigate('album')}>
              <Image source={require('../assets/images/bioshockA1.jpg')} style={{ height: 250, width: 250, marginRight: 20 }} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('album')}>
              <Image source={require('../assets/images/bioshockA2.jpg')} style={{ height: 250, width: 250, marginRight: 20 }} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('album')}>
              <Image source={require('../assets/images/bioshockA3.jpg')} style={{ height: 250, width: 250, marginRight: 20 }} />
            </TouchableOpacity>
          </ScrollView>
        </Content>
      </Container>
    </StyleProvider>
  );
}

const Stack = createStackNavigator()

export default function InicioNavigation() {
  return (
    <Stack.Navigator initialRouteName="inicio">
      <Stack.Screen name="inicio" component={InicioScreen} options={{ headerShown: false }}></Stack.Screen>
      <Stack.Screen name="album" component={AlbumScreen} options={{ headerShown: false }}></Stack.Screen>
    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 10,
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
  listado: {
    flexDirection: 'column',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },
  listadoItem: {
    flexBasis: '48%'
  }
});