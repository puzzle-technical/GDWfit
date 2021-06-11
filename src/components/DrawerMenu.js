import React from 'react'
import { SafeAreaView, Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { yellow, light, dark, graylight } from '../colors'

export default function DrawerMenu ({ navigation }) {
  const user = {
    nome: 'Fulano da Silva',
    email: 'gab.fan.sou@gmail.com'
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <TouchableOpacity onPress={() => { navigation.closeDrawer() }}>
        <View style={styles.header}>
          <MaterialIcons name="arrow-back" color={light} size={30}></MaterialIcons>
          <Text style={styles.headerTitle}>Menu</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.userInfo}>
        <View style={styles.userPic}>
          <Text style={styles.userInitial}>{user.nome.slice(0, 1).toUpperCase()}</Text>
        </View>
        <View style={styles.userText}>
          <Text style={styles.userName}>{user.nome}</Text>
          <Text style={styles.userEmail}>{user.email}</Text>
        </View>
      </View>
      <DrawerContentScrollView>
        <DrawerItem label="Atividades de hoje"
          labelStyle={styles.label}
          icon={() => <MaterialIcons name="assignment" size={25} color={dark}/>}
          onPress={() => { navigation.navigate('Home') }}></DrawerItem>
        <DrawerItem label="Atividades por data"
          labelStyle={styles.label}
          icon={() => <MaterialIcons name="event" size={25} color={dark}/>}
          onPress={() => { navigation.navigate('Search') }}></DrawerItem>
        <DrawerItem label="Sair"
          labelStyle={styles.label}
          icon={() => <MaterialIcons name="logout" size={25} color={dark}/>}
          onPress={() => { navigation.navigate('Login') }}></DrawerItem>
      </DrawerContentScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1
  },
  header: {
    backgroundColor: yellow,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 15
  },
  headerTitle: {
    color: light,
    fontSize: 30,
    marginLeft: 20
  },
  userInfo: {
    backgroundColor: graylight,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  userPic: {
    backgroundColor: dark,
    width: 60,
    height: 60,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 20
  },
  userInitial: {
    fontSize: 30,
    fontWeight: 'bold',
    color: light
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  label: {
    marginLeft: -20,
    fontSize: 20
  }
})