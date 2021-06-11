import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Alert } from 'react-native';
import { dark, light } from '../colors'
import fakeAPI from '../../fakeAPI'
import Header from '../components/Header'
import ActivityBox from '../components/ActivityBox';
import AddActivityButton from '../components/AddActivityButton';

import moment from 'moment';
import 'moment/locale/pt-br';
moment.locale('pt-br')

export default function Search ({ navigation }) {
  const capitalize = string => string.slice(0, 1).toUpperCase() + string.slice(1)

  const hoje = moment()
  const dia = capitalize(hoje.format('dddd'))
  const data = hoje.format('DD [de] MMMM [de] YYYY')

  const [atividades, setAtividades] = useState([])

  useEffect(() => {
    setAtividades(fakeAPI.getAtividades(moment()))
  }, [])

  const addActivity = (atividade, tempo) => {
    let activity = {
      atividade,
      tempo,
      data: moment().format('YYYY-MM-DD')
    }
    Alert.alert('Sucesso', `Atividade adicionada com sucesso!\n\n${JSON.stringify(activity)}`)
  }

  return <View style={styles.wrapper}>
    <Header navigation={navigation}></Header>
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.pageContainer}>
        <Text style={styles.dia}>{dia}</Text>
        <Text style={styles.data}>{data}</Text>
        {
          atividades.map((el, index) => {
            return <ActivityBox atividade={el.atividade} tempo={el.tempo} key={index}/>
          })
        }
      </View>
    </ScrollView>
    <AddActivityButton onAdd={addActivity}/>
  </View>
}

const styles = StyleSheet.create({
  wrapper: {
    position: 'relative',
    backgroundColor: dark,
    flex: 1
  },
  pageContainer: {
    backgroundColor: dark,
    alignItems: 'center',
    paddingHorizontal: 30,
    paddingBottom: 30,
    height: '100%',
  },
  dia: {
    marginTop: 30,
    fontSize: 40,
    color: light
  },
  data: {
    fontSize: 24,
    color: light,
    marginBottom: 30
  }
})