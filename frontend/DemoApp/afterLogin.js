import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import React,{ Component,useState,useEffect } from 'react';
import { FlatList,Platform,Alert,TouchableOpacity,TextInput,Dimensions,Image,ImageBackground, Text, StyleSheet, View, ImageStore } from 'react-native';
import {ScrollView } from 'react-native-gesture-handler';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TaskList from './task';


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



const AfterLogin = ({ route, navigation}) => {
    var user=route.params.user
   
   function getDay(route){
     var createdDate=route.params.data.createdDate;
     var date=new Date(createdDate);
     var date1=new Date();
     var getDay=parseInt((date1.getTime()-date.getTime())/(1000*60*60*24));
     return getDay;
   }
   
   var handleTask=()=>{
     fetch(
       'http://localhost:8080/task/getOneTaskDetail',{
         method:'POST',
         headers:{
           'Conten-type':'application/json;charset=UTF-8'
         },
         body: JSON.stringify(user)
       }
     ).then((response)=>response.json()).then(data=>{
       navigation.navigate('TaskList',{data});
     })
     .catch((error) => {
       console.error(error);
     });
   };
   
   
     
     return(
       <TouchableOpacity style={styles.container} onPress={handleTask}>
         <ImageBackground source={require('./assets/images/indexMainBackground.png')} style={styles.containerSecondContainer}>
           <ImageBackground source={require('./assets/images/upperBackground.png')} style={styles.containerSecondContainerThirdContainer}>
             <Image
             style={styles.thirdContainerProfile}
             source={require('./assets/images/profilePhoto.png')}
             />
             <View style={{width:0.8*windowWidth,height:windowHeight*0.2,overflow:'scroll',position:'absolute',top:windowHeight*0.5}}>
               <Text style={{textAlign:'center',color:'rgb(19,95,49)',fontSize:windowHeight*0.03}}>
               You have been saving the world for {getDay(route)} days!
               </Text>
             </View>
           </ImageBackground>
         </ImageBackground>
       </TouchableOpacity>
     );
   }


   export default AfterLogin;
