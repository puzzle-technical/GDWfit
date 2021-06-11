import React, { useState } from 'react'
import { Modal, StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import { TextInput } from 'react-native-gesture-handler'
import { gray, green, light } from '../colors'

const AddActivityModal = ({ active, onClose, onAdd }) => {

  const [atividade, setAtividade] = useState()
  const [tempo, setTempo] = useState()

  return <Modal
    animationType="fade"
    transparent
    onRequestClose={onClose}
    visible={active}>
    <View style={modalStyle.modal}>
      <View style={modalStyle.form}>
        <View style={modalStyle.header}>
          <Text style={modalStyle.headerTitle}>Adicionar atividade</Text>
          
          <TouchableOpacity onPress={onClose}>
            <MaterialIcons name="close" size={30}></MaterialIcons>
          </TouchableOpacity>
        </View>
        <TextInput multiline={true}
          numberOfLines={4}
          style={modalStyle.input}
          placeholder="Atividade"
          onChangeText={text => setAtividade(text)}></TextInput>

        <TextInput style={modalStyle.input}
          placeholder="Tempo decorrido"
          onChangeText={text => setTempo(text)}></TextInput>

        <TouchableOpacity onPress={() => { onAdd(atividade, tempo); onClose() }}>
          <View style={modalStyle.button}>
            <Text style={modalStyle.buttonLabel}>ADICIONAR</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  </Modal>
}

export default function AddActivityButton ({ onAdd }) {
  const [show, setShow] = useState(false)

  return <View>
    <TouchableOpacity style={buttonStyle.button} onPress={() => setShow(true)}>
      <MaterialIcons name="add" size={40} color={light}></MaterialIcons>
    </TouchableOpacity>
    
    <AddActivityModal onAdd={onAdd} active={show} onClose={() => setShow(false)}></AddActivityModal>
  </View>
}



const modalStyle = StyleSheet.create({
  modal: {
    padding: 30,
    backgroundColor: '#00000055',
    height: '100%',
    justifyContent: 'center',
  },
  form: {
    marginTop: -100,
    backgroundColor: light,
    padding: 20,
    borderRadius: 5

  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10
  },
  headerTitle: {
    fontSize: 24,
  },
  input: {
    fontSize: 20,
    borderWidth: 1,
    borderColor: gray,
    borderRadius: 5,
    marginVertical: 10,
    padding: 15,
    textAlignVertical: 'top'
  },
  button: {
    backgroundColor: green,
    padding: 15,
    marginVertical: 10,
    width: '100%',
    borderRadius: 5,
    alignItems: 'center'
  },
  buttonLabel: {
    fontSize: 20,
    color: light
  }
})

const buttonStyle = StyleSheet.create({
  button: {
    position: 'absolute',
    bottom: 30,
    right: 30,
    backgroundColor: green,
    padding: 15,
    borderRadius: 100,
    elevation: 5
  }
})