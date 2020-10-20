import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import React,{ Component,useState,useEffect } from 'react';
import { FlatList,Platform,Alert,TouchableOpacity,TextInput,Dimensions,Image,ImageBackground, Text, StyleSheet, View, ImageStore } from 'react-native';
import {ScrollView } from 'react-native-gesture-handler';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TaskList from './task';
import AfterLogin from './afterLogin';


const windowWidth=Dimensions.get('window').width;
const windowHeight=Dimensions.get('window').height;


const styles = StyleSheet.create({
  container: {
  width:windowWidth,
  height:windowHeight,
  paddingRight:0,
  paddingLeft:0,
  left:0,
  right:0,
  marginLeft:0,
  marginRight:0,
   flex: 1,
   flexDirection:"row",
   top:30,
   justifyContent:"center"
  },
  containerSecondContainer: {
    flex:1,
    flexDirection:"row",
    resizeMode: "cover",
    justifyContent:"center"
  },
  containerSecondContainerThirdContainer: {
    flex:1,
    flexDirection:"column",
    resizeMode: "cover",
    justifyContent:"center",
    alignItems:"center",
    position:"relative"
  },
  thirdContainerProfile: {
    resizeMode: "cover",
    position:"absolute",
    height:windowHeight*0.23,
    width:windowHeight*0.23,
    top:windowHeight*0.1,
  },
  signIn:{
    height:90,
    width:90,
    backgroundColor:'rgb(96,160,48)',
    borderRadius:50,
    justifyContent:"center",
    alignItems:"center",
    position:'absolute',
    top:windowHeight*0.57,
    borderColor:'rgb(164,202,99)',
    borderWidth:4,
    borderRadius:50
  }
});



const Login = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password,setPassword] = useState('');
  const user={
    username: username,
    password: password,
  };

  const submit1=()=>{
    fetch(
      'http://localhost:8080/user/getUserDetail',{
        method:'POST',
        headers:{
          'Conten-type':'application/json;charset=UTF-8'
        },
        body: JSON.stringify(user)
      }
    ).then((response)=>response.json()).then(data=>{
      navigation.navigate('HelloUser', {data,user});
    })
    .catch((error) => {
      console.error(error);
    });
  };

  const submit=()=>{
    fetch(
      'http://localhost:8080/user/',{
        method:'POST',
      }
    ).then((response)=>{
      console.log(response)
    })
    .catch((error) => {
      console.error(error);
    });
    };
  
  
  return (
    <View style={styles.container}>
      <ImageBackground source={require('./assets/images/login.png')} style={styles.containerSecondContainer}>
        <ImageBackground source={require('./assets/images/login.png')} style={styles.containerSecondContainerThirdContainer}>
          <View style={{position:"absolute",left:0.2*windowWidth,top:0.15*windowHeight}}>
            <Text style={{textAlign:"left",color:'rgb(19,95,49)',fontSize:windowHeight*0.03}}>Welcome to</Text>
            <Text style={{textAlign:"left",color:'rgb(19,95,49)',fontSize:windowHeight*0.05,fontWeight:'bold'}}>EcoAssist</Text>
          </View>
          <View style={{position:"relative",bottom:0.15*windowHeight,right:0.2*windowWidth}}>
            <Text style={{position:"relative",textAlign:"left",color:'rgb(19,95,49)',fontSize:windowHeight*0.03}}>Username
            </Text>
            <TextInput
              style={{height: 40,width:180,position:'absolute',top:20,borderBottomColor:'black',borderBottomWidth:1}}
              placeholder="Here to input ur username"
              onChangeText={username => setUsername(username)}
              // defaultValue={username}
            /> 

            <Text style={{position:"absolute",top:80,textAlign:"left",color:'rgb(19,95,49)',fontSize:windowHeight*0.03}}>Password
            </Text>
            <TextInput
              style={{height: 40,width:180,position:'absolute',top:100}}
              placeholder="Here to input ur password"
              secureTextEntry={true}
              onChangeText={password => setPassword(password)}
              // defaultValue={password}
            /> 
          </View>

          <TouchableOpacity style={styles.signIn} onPress={submit}>
            <Text style={{bottom:5,textAlign:"center",color:'white',fontWeight:"bold"}}>Sign In</Text>
          </TouchableOpacity>
          {/*<View style={{position:"absolute",top:windowHeight*0.57,height:91,width:91,borderColor:'rgb(164,202,99)',borderWidth:3,borderRadius:50}}>
          </View>*/}        
        </ImageBackground>
      </ImageBackground>
    </View>
  );
}

export default Login;