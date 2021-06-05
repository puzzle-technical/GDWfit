import * as React from 'react';
// import { StyleSheet } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Search from './pages/Search';

import DrawerMenu from './components/DrawerMenu'

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const MainNavigation = ({ navigation }) => {
  return <Drawer.Navigator initialRouteName="Home" drawerStyle={{ width: '80%' }} drawerContent={(props) => <DrawerMenu {...props}/>}>
    <Drawer.Screen name="Home" component={Home}/>
    <Drawer.Screen name="Search" component={Search} />
  </Drawer.Navigator>
}

export default function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Main" component={MainNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

