import React, { useState, useEffect } from 'react'
import DateTimePicker  from '@react-native-community/datetimepicker'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { light, yellow } from '../colors'

import moment from 'moment';
import 'moment/locale/pt-br';
moment.locale('pt-br')

export default function Datepicker ({ defaultValue, onChange = () => {} }) {
  const [date, setDate] = useState(defaultValue)
  const [show, setShow] = useState(false)
  const [label, setlabel] = useState('')

  useEffect(() => {
    setlabel(date ? moment(date).format('DD/MM/YYYY') : 'ESCOLHER DATA')
  }, [date])

  const pickDate = () => {
    if (!date) setDate(new Date())
    setShow(true)
  }

  const onDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || date
    setShow(false)
    setDate(currentDate)
    onChange(currentDate)
  }

  return <View>
    <TouchableOpacity onPress={pickDate}>
      <View style={styles.button}>
        <Text style={styles.label}>{label}</Text>
      </View>
    </TouchableOpacity>
    {show && (
      <DateTimePicker
        testID="dateTimePicker"
        value={date}
        mode="date"
        is24Hour={true}
        display="default"
        onChange={onDateChange}
      />
    )}
  </View>
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: yellow,
    paddingVertical: 10,
    paddingHorizontal: 60,
    borderRadius: 5,
    marginVertical: 30
  },
  label: {
    color: light,
    fontSize: 20
  }
})