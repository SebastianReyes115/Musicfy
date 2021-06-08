import React from 'react'
import { Text, View, Button, FlatList, TouchableOpacity, ActivityIndicator, ScrollView, Alert, Modal, } from 'react-native'
import BleManager from 'react-native-ble-manager'
//import BluetoothSerial from 'react-native-bluetooth-serial'
import { GlobalStyles, Constants } from './assets'
import { ColorPicker, fromHsv } from 'react-native-color-picker'
import { useState } from 'react/cjs/react.development'
import { convertHexToRgbString } from './utils'

export default class Biblioteca extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      pairedDevices: [],
      connectedDevice: null,
      connecting: false,
      isModalVisible: false,
      selectedColor: null,
    }
  }

  sendStringToDevice = async data => {
    try {
      await BleManager.write(data)
      this.setState({
        selectedColor: null,
      })
    } catch (e) {
      console.log(e)
    }
  }

  handleColorChange = color => {
    const hexColor = fromHsv(color)
    this.setState({ selectedColor: hexColor })
    this.setColor(hexColor)
  }

  setColor = async color => {
    try {
      await BleManager.write(convertHexToRgbString(color))
    } catch (e) {
    }
  }

  render() {
    return (
      <View style={{ flex: 1, shadowOpacity: 0.1815, shadowRadius: 0.54, backgroundColor: '#282c34', shadowOffset: { height: 0.6, }, padding: 16,}} >
        <ColorPicker style={{ flex: 1 }} onColorChange={this.handleColorChange} color={this.state.selectedColor} />
        <TouchableOpacity style={{ height: 50, borderWidth: 4, alignItems: 'center', backgroundColor: 'orange', borderColor: '#282c34', }} onPress={() => this.sendStringToDevice('999,')}>
          <Text style={{ fontSize: 20, color: '#fff', }}>Prender LED</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ height: 50, borderWidth: 4, alignItems: 'center', backgroundColor: 'orange', borderColor: '#282c34', }} onPress={() => this.sendStringToDevice('998,')}>
          <Text style={{ fontSize: 20, color: '#fff', }}>Apagar LED</Text>
        </TouchableOpacity>
      </View>
    )
  }
}