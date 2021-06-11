import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { dark, light } from '../colors'
import fakeAPI from '../../fakeAPI'
import Header from '../components/Header'
import ActivityBox from '../components/ActivityBox';
import DatePicker from '../components/DatePicker'

import moment from 'moment';
import 'moment/locale/pt-br';
moment.locale('pt-br')

export default function Home({ navigation }) {
  const [atividades, setAtividades] = useState([])
  
  const [date, setDate] = useState()

  useEffect(() => {
    setAtividades(fakeAPI.getAtividades(date))
  }, [date])

  return <View style={styles.wrapper}>
    <Header navigation={navigation}></Header>
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.pageContainer}>
        <Text style={styles.text}>Buscar atividades pela data</Text>
        <DatePicker onChange={setDate}></DatePicker>
        {
          atividades.map((el, index) => {
            return <ActivityBox atividade={el.atividade} tempo={el.tempo} key={index}/>
          })
        }
      </View>
  </ScrollView>
  </View>
}

const styles = StyleSheet.create({
  wrapper: {
    position: 'relative',
    backgroundColor: '#f44',
    flex: 1
  },
  pageContainer: {
    backgroundColor: dark,
    alignItems: 'center',
    paddingHorizontal: 30,
    paddingBottom: 30,
    height: '100%',
  },
  text: {
    marginTop: 30,
    fontSize: 24,
    color: light
  },
})