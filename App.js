import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text } from 'react-native'
import Constants from 'expo-constants'
import { dark } from './src/colors'

import Router from './src/router'

export default function App() {
  return (<>
      <StatusBar style="light" backgroundColor={dark}></StatusBar>
      <View style={{ flex: 1, paddingTop: Constants.statusBarHeight }}>
        <Router></Router>
      </View>
    </>
  );
}
