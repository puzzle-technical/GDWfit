import React from 'react'
import { StyleSheet, View, TouchableOpacity, Image } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';
import { graydark, light } from '../colors'

export default function Header ({ navigation }) {
  return <View style={styles.header}>
    <TouchableOpacity onPress={() => { navigation.openDrawer() }}>
      <MaterialIcons name="menu" color={light} size={40}/>
    </TouchableOpacity>
    <Image source={require('../assets/img/Logo-light.png')}></Image>
  </View>
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    backgroundColor: graydark,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 5,
    paddingHorizontal: 30,
  }
})