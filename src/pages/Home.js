import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { graydark, dark, light, green } from '../colors'
import fakeAPI from '../../fakeAPI'
import { Ionicons } from '@expo/vector-icons';
import Header from '../components/Header'

import moment from 'moment';
import 'moment/locale/pt-br';
moment.locale('pt-br')

export default function Home({ navigation }) {
  const hoje = moment()
  const dia = hoje.format('dddd')
  const data = hoje.format('DD [de] MMMM [de] YYYY')

  const [atividades, setAtividades] = useState([])

  useEffect(() => {
    setAtividades(fakeAPI.getAtividades())
  }, [])

  return <View style={styles.pageContainer}>
    <Header></Header>
    
    <Text style={styles.dia}>{dia}</Text>
    <Text style={styles.data}>{data}</Text>

    {
      atividades.map((el, id) => {
        return <View key={id} style={styles.box}>
          <View style={styles.boxInfo}>
            <Text style={styles.boxText}>{el.atividade}</Text>
            <Text style={styles.boxText}>{el.tempo}</Text>
          </View>
          <Ionicons color={green} size={35} name="checkmark"></Ionicons>
        </View>
      })
    }
  </View>
}

const styles = StyleSheet.create({
  pageContainer: {
    height: '100%',
    backgroundColor: dark,
    alignItems: 'center',
    position: 'relative'
  },
  dia: {
    marginTop: 50,
    fontSize: 40,
    color: light
  },
  data: {
    fontSize: 24,
    color: light,
    marginBottom: 30
  },
  box: {
    backgroundColor: graydark,
    borderRadius: 5,
    padding: 20,
    marginBottom: 20,
    width: '85%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  boxInfo: {},
  boxText: {
    fontSize: 18,
    color: light,
    marginBottom: 5
  }
})