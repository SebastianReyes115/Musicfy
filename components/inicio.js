import React, { useState } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Left, Right, Body, Icon, Text } from 'native-base';
import { getTheme, StyleProvider, TouchableOpacity, Image } from 'native-base'
import customVariables from '../theme/variables'
import { View, Button } from 'react-native'
import { Audio } from 'expo-av';

export default function inicio(){
    const [sound, setSound] = React.useState();

  async function playSound() {
    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync(
       require('../assets/like.mp3')
    );
    setSound(sound);

    console.log('Playing Sound');
    await sound.playAsync(); }

  React.useEffect(() => {
    return sound
      ? () => {
          console.log('Unloading Sound');
          sound.unloadAsync(); }
      : undefined;
  }, [sound]);
async function pauseSound(){
    await sound.pauseAsync();
}
  return (
    <View>
      <Button title="Play Sound" onPress={playSound} />
      <Button title="Pause" onPress={pauseSound}></Button>
    </View>
  )
}