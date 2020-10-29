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

import teacherTaskDetail from './teacherTaskDetail';
import TaskDetail2 from "./Apphaizhao2";
import taskDeatail2 from './Apphaizhao2';
import Leaderboard from './leaderboard';
import echoTree from './echoTree';
import MyProfile from './myProfile';
import Register from './register';



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

function student(){
  return (
      <Tab.Navigator>
        <Tab.Screen name="TaskList" component={TaskList} />
        <Tab.Screen name="MyProfile" component={MyProfile} />
        <Tab.Screen name="TaskDetail" component={teacherTaskDetail} />
        <Tab.Screen name="Leaderboard" component={Leaderboard} />
        <Tab.Screen name="urTree" component={echoTree} />
      </Tab.Navigator>
  );
}


export default student;