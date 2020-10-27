import React,{Component} from 'react';
import {useState} from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Dimensions,Text, StyleSheet, View, ImageBackground, Image,TouchableOpacity} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';




const windowHeight=Dimensions.get('window').height;

const styles = StyleSheet.create ({
    container:{
      width:375,
      height: 637,
      paddingRight: 0,
      paddingLeft: 0,
      left: 0,
      right: 0,
      marginLeft: 0,
      marginRight: 0,
      flex: 1,
      flexDirection: "row",
      top: 30,
      justifyContent: "center"
    },
    
    SecondContainer:{
      flex: 1,
      flexDirection: "row",
      resizeMode: "cover",
      justifyContent: "center"
    },
    thirdContainer:{
      flex: 1,
      position:"absolute",
      top:275,
      width:375,
      height:412,
      flexDirection:"row"
    },
    Button:{
      position:"absolute",
      top:265,
      left:131,
      width:104,
      height:104,
    },
    ProfileContainer:{
      flex:1,
      position:"absolute",
      top:50,
      width:375,
      height:187.2
    },
    iconTo:{
      position:"absolute",
      top:434,
      left:150,
      width: 10,
        height: 10,
        borderColor:'#666',
        borderTopWidth:2,
        borderRightWidth:2,
        transform:[{rotate: '45deg'}],
    },
    signIn:{
      height:90,
      width:90,
      backgroundColor:'rgb(96,160,48)',
      borderRadius:50,
      justifyContent:"center",
      alignItems:"center",
      position:'absolute',
      top:windowHeight*0.41,
      borderColor:'rgb(164,202,99)',
      borderWidth:4,
      borderRadius:50
    }
  
  })


  const Start =({route, navigation})=>{
    /* 最开始的界面*/
   return(
     <View style = {styles.container}>
       <ImageBackground source = {require('./assets/images/Background.png')} style = {styles.SecondContainer}>
         <View style={{position:"absolute", left:84,top:63}}>
           <Text style = {{fontSize:24, color:'rgb(19,95,49)',lineHeight:40, fontWeight:"500"}}> Welcome to</Text>
         </View>
         <View style = {{position:"absolute",left:77,top:106}}>
           <Text style = {{fontSize:48,color:'rgb(19,95,49)',fontWeight:"600"}}> EcoAssit</Text>
         </View>
       </ImageBackground>
       <ImageBackground source = {require("./assets/images/BackgroundLower.png")} style = {styles.thirdContainer}></ImageBackground>

      
       
        <TouchableOpacity style={styles.signIn} onPress={()=>{navigation.navigate('Login');}}>
            <Text style={{bottom:5,textAlign:"center",color:'white',fontWeight:"bold"}}>Sign In</Text>
        </TouchableOpacity>


       <TouchableOpacity style ={{position:"absolute",left:125,top:390}} onPress={()=>{navigation.navigate('Register');}}>
         <View>
           <Text style ={{fontSize:18,color:"rgb(255,187,55)",textDecorationLine:"underline"}}>create account</Text>
         </View>
       </TouchableOpacity>
     </View>
     )
 };

 export default Start;