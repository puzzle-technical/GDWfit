import * as React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { dark, light, pink } from '../colors'


export default function Signup({ navigation }) {
  return <View style={styles.pageContainer}>
    <Image source={require('../assets/img/Logo-light.png')} style={styles.logo}></Image>
    <TextInput style={styles.input} placeholderTextColor={light} placeholder="Nome"></TextInput>
    <TextInput style={styles.input} placeholderTextColor={light} placeholder="Email" textContentType="emailAddress"></TextInput>
    <TextInput style={styles.input} placeholderTextColor={light} placeholder="Senha" textContentType="password"></TextInput>
    <TextInput style={styles.input} placeholderTextColor={light} placeholder="Confirmar senha" textContentType="password"></TextInput>
    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>CADASTRAR</Text>
    </TouchableOpacity>
    
    <TouchableOpacity onPress={() => { navigation.navigate('Login') }}>
      <Text style={styles.signup}>Já tem uma conta? Entrar</Text>
    </TouchableOpacity>
  </View>
}

const styles = StyleSheet.create({
  pageContainer: {
    height: '100%',
    backgroundColor: dark,
    padding: 40,
    alignItems: 'center'
  },
  logo: {
    marginVertical: 70
  },
  input: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: light,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginBottom: 20,
    fontSize: 20,
    width: '100%',
    color: light
  },
  button: {
    width: '100%',
    borderRadius: 5,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginBottom: 20,
    backgroundColor: pink
  },
  buttonText: {
    color: light,
    fontSize: 20,
    textAlign: 'center'
  },
  signup: {
    color: light,
    fontSize: 18,
    marginVertical: 20
  },
  forgottenPassword: {
    color: light,
  }
})