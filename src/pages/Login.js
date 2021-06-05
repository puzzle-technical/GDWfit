import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { dark, light, pink } from '../colors'

export default function Login({ navigation }) {

  const [email, setemail] = useState('')
  const [senha, setsenha] = useState('')

  const login = () => {
    let loginData = {
      email,
      senha
    }
    console.log(loginData)
    let response = true
    if (response) navigation.navigate('Main', { screen: 'Home' })
  }

  return <View style={styles.pageContainer}>
    <Image source={require('../assets/img/Logo-light.png')} style={styles.logo}></Image>

    <TextInput style={styles.input}
      placeholderTextColor={light} 
      placeholder="Email"
      onChangeText={setemail}
      textContentType="emailAddress">
    </TextInput>

    <TextInput style={styles.input}
      placeholderTextColor={light}
      placeholder="Senha"
      onChangeText={setsenha}
      secureTextEntry={true}
      textContentType="password">
    </TextInput>

    <TouchableOpacity style={styles.button} onPress={login}>
      <Text style={styles.buttonText}>ENTRAR</Text>
    </TouchableOpacity>

    <TouchableOpacity onPress={() => { navigation.navigate('Signup') }}>
      <Text style={styles.signup}>Cadastre-se</Text>
    </TouchableOpacity>
    
    <TouchableOpacity>
      <Text style={styles.forgottenPassword}>Esqueci minha senha</Text>
    </TouchableOpacity>

    <Text style={styles.footer}>© {new Date().getFullYear()}</Text>
  </View>
}

const styles = StyleSheet.create({
  pageContainer: {
    height: '100%',
    backgroundColor: dark,
    padding: 40,
    alignItems: 'center',
    position: 'relative'
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
  },
  footer: {
    position: 'absolute',
    bottom: 40,
    color: light
  }
})