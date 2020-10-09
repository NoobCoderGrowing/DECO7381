import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import React,{ Component,useState,useEffect } from 'react';
import { FlatList,Platform,Alert,TouchableOpacity,TextInput,Dimensions,Image,ImageBackground, Text, StyleSheet, View, ImageStore } from 'react-native';
import {ScrollView } from 'react-native-gesture-handler';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TaskList from './task';
import AfterLogin from './afterLogin';
import Login from './login';



const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options={{ title: 'Login' }}/>
        <Stack.Screen name="HelloUser" component={AfterLogin} options={{ title: 'Hello'}} />
        <Stack.Screen name="TaskList" component={TaskList} options={{ title: 'TaskList'}} />  
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function App1(){
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Login" component={Login} />
        <Tab.Screen name="HelloUser" component={AfterLogin} />
        <Tab.Screen name="TaskList" component={TaskList} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}


export default App1;