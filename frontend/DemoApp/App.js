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
import Start from './start';
import teacher from './handleTeacher';
import student from './handleStudent';
import studentTaskDtail from './studentTaskDetail'



const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Base" component={Start} options={{ title: 'Start' }}/>
        <Stack.Screen name="Register" component={Register} options={{ title: 'Register' }}/>
        <Stack.Screen name="Login" component={Login} options={{ title: 'Login' }}/>
        <Stack.Screen name="TaskList" component={TaskList} />
        <Stack.Screen name="teacher" component={teacher} />
        <Stack.Screen name="student" component={student} />  
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function finalApp(){
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Base" component={Start} />
        <Tab.Screen name="Register" component={Register} />
        <Tab.Screen name="MyProfile" component={MyProfile} />
        <Tab.Screen name="Login" component={Login} />
        <Tab.Screen name="HelloUser" component={AfterLogin} />
        <Tab.Screen name="TaskList" component={TaskList} />
        <Tab.Screen name="TaskDetail" component={teacherTaskDetail} />
        <Tab.Screen name="TaskDetail2" component={taskDeatail2} />
        <Tab.Screen name="Leaderboard" component={Leaderboard} />
        <Tab.Screen name="urTree" component={echoTree} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}


function teacherApp(){
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Base" component={Start} />
        <Tab.Screen name="Register" component={Register} />
        <Tab.Screen name="Login" component={Login} />
        <Tab.Screen name="HelloUser" component={AfterLogin} />
        <Tab.Screen name="MyProfile" component={MyProfile} />
        <Tab.Screen name="TaskList" component={TaskList} />
        <Tab.Screen name="TaskDetail" component={teacherTaskDetail} />
        <Tab.Screen name="EditTask" component={taskDeatail2} />
        <Tab.Screen name="Leaderboard" component={Leaderboard} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}


function studentApp(){
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Base" component={Start} />
        <Tab.Screen name="Register" component={Register} />
        {/* <Tab.Screen name="MyProfile" component={MyProfile} /> */}
        <Tab.Screen name="Login" component={Login} />
        <Tab.Screen name="HelloUser" component={AfterLogin} />
        <Tab.Screen name="TaskList" component={TaskList} />
        {/* <Tab.Screen name="Leaderboard" component={Leaderboard} /> */}
        <Tab.Screen name="TaskDetail" component={studentTaskDtail} />
        <Tab.Screen name="urTree" component={echoTree} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

// the default version of this app is teacher version
// to use teacher version uncomment the next line and comment studentApp
// teacher username  is "wenjun", password is  "123"
// export default teacherApp;

// to use student version uncomment the next line and comment teacherApp
// student username is "chengjiao", password is "123"
export default studentApp;



