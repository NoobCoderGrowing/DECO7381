import React,{Component} from 'react';
import {useState} from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Text, StyleSheet, View, ImageBackground, Image,TouchableOpacity} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';






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
    }
  
  })

  const MyProfile=()=>{
    /*profile第一页*/
    return(
      <View style = {styles.container}> 
        <View style = {{position:"absolute", top:28, left:129}}> 
          <Text style = {{fontSize:24,color:"rgb(8,54,3)"}}> My Profile</Text>
        </View>
        <ImageBackground 
        source = {require('./assets/images/ProfileBackground.png')} 
        style ={styles.ProfileContainer}>
          <Image 
          source = {require('./assets/images/UserProfile.png')}
          style = {{width:95,height:95,position:"absolute",top:50,left:144}}
          ></Image>
          <Image
          source = {require('./assets/images/Fix.png')}
          style = {{position:"absolute",top:122,left:208}}>
  
          </Image>
          <Text style = {{position:"absolute",top:170,left:132,fontSize:22,color:"rgb(11,61,31)"}}>Zella Hope</Text>
        </ImageBackground>
        <View style = {{flexDirection:"row"}}>
          <ImageBackground
          source ={require('./assets/images/Task.jpg')}
          style = {{width:100,height:80,position:"absolute",right:67,top:250}}
          ></ImageBackground>
          <ImageBackground
          source ={require('./assets/images/Star.jpg')} 
          style = {{width:100,height:80,position:"absolute",right:-47,top:250}}></ImageBackground>
          <ImageBackground
          source = {require('./assets/images/Days.jpg')}
          style = {{width:100,height:80,position:"absolute",right:-167,top:250}}></ImageBackground>
        </View>
        <View style = {{position:"absolute",top:269,left:60}} >
          <Text style = {{fontSize:24,color:"rgb(8,54,3)"}}>6</Text>
          <Text style = {{fontSize:12,color:"rgba(0,0,0,0.65)"}}>Tasks</Text>
        </View>
        <View style = {{position:"absolute",top:269,left:175}} >
          <Text style = {{fontSize:24,color:"rgb(8,54,3)"}}>20</Text>
          <Text style = {{fontSize:12,color:"rgba(0,0,0,0.65)"}}>Stars</Text>
        </View>
        <View style = {{position:"absolute",top:269,left:295}} >
          <Text style = {{fontSize:24,color:"rgb(8,54,3)"}}>35</Text>
          <Text style = {{fontSize:12,color:"rgba(0,0,0,0.65)"}}>Days</Text>
        </View>
        <View style = {{flexDirection:"row"}}>
          <Text style = {{position:"absolute",left:-140,top:384,fontSize:16,color:"rgb(11,61,31)"}}>Name</Text>
          <Text style = {{position:"absolute",left:60,top:384,fontSize:16,color:"rgb(11,61,31)",textAlign:"right"}}>Zella Hope</Text>
        </View>
        <View style = {{flexDirection:"row"}}>
          <Text style = {{position:"absolute",left:-140,top:454,fontSize:16,color:"rgb(11,61,31)"}}>AccountNumber</Text>
          <Text style = {{position:"absolute",left:60,top:454,fontSize:16,color:"rgb(11,61,31)",textAlign:"right"}}>123456</Text>
        </View>
        {/* <View style = {{flexDirection:"row"}}>
          <Text style = {{position:"absolute",left:-140,top:434,fontSize:16,color:"rgb(11,61,31)"}}>Reset Password</Text>
          <View style = {styles.iconTo}></View>
        </View> */}
        {/* <View style = {{flexDirection:"row"}}>
          <Text style = {{position:"absolute",left:-140,top:474,fontSize:16,color:"rgb(11,61,31)"}}>Group ID</Text>
          <Text style = {{position:"absolute",left:60,top:474,fontSize:16,color:"rgb(11,61,31)",textAlign:"right"}}>54321</Text>
        </View> */}
        {/* <ImageBackground
        source = {require('./assets/images/ProfileSignout.jpg')}
        style = {{width:310,height:48,position:"absolute",top:520,left:32,right:33}}></ImageBackground>
        <View>
          <Text style={{color:"rgb(124,174,99)",fontSize:16,position:"absolute",top:530,left:-35}}>
            Sign Out
          </Text>
        </View> */}
      </View>
    )
  };




  export default MyProfile;