import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { graydark, light, green } from '../colors'
import { Ionicons } from '@expo/vector-icons';

export default function ActivityBox ({ atividade, tempo }) {

  return <View style={styles.box}>
    <View style={styles.boxInfo}>
      <Text style={styles.boxText}>{atividade}</Text>
      <Text style={styles.boxText}>{tempo}</Text>
    </View>
    <Ionicons color={green} size={35} name="checkmark"></Ionicons>
  </View>
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: graydark,
    borderRadius: 5,
    padding: 20,
    marginBottom: 20,
    width: '100%',
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