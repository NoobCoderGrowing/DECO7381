import React,{Component} from 'react';
import {useState} from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Text, StyleSheet, View, ImageBackground, Image,TouchableOpacity} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';



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
      <ImageBackground source = {require("./assets/images/Button.png")} style = {styles.Button}>
        <View style ={{position:"absolute", top:40,left:28}}>
          <Text style ={{fontSize:18,color:"rgb(255,255,255)"}}>Log in</Text>
        </View>
      </ImageBackground>
      <TouchableOpacity style ={{position:"absolute",left:122,top:390}} onPress ={()=> this.props.navigation.navigate('Register')}>
        <View>
          <Text style ={{fontSize:18,color:"rgb(255,187,55)",textDecorationLine:"underline"}}>create account</Text>
        </View>
      </TouchableOpacity>
    </View>
    )
};


const Register = ({route, navigation}) =>{
  /*注册界面*/
  const [username, setUsername] = useState('');
  const[accountNumber,setAccountNumber] = useState('');
  const [password,setPassword] = useState('');
  const[ConfirmPassword,setConfirmPassword] = useState('');
  const user={
    username: username,
    accountNumber:accountNumber,
    password: password,
    ConfirmPassword:ConfirmPassword,
  };
  return(
    <View style ={styles.container}>
      <ImageBackground source ={require('./assets/images/BackgroundOther.png')} style = {styles.SecondContainer}>
        <View style ={{position:"absolute",top:72,left:84}}>
          <Text style ={{fontSize:24,lineHeight:40,color:'rgb(19,95,49)'}}>Welcome to</Text>
        </View>
        <View style ={{position:"absolute",top:101,left:84}}>
          <Text style={{fontSize:36,color:"rgb(19,95,49)"}}>EcoAssit</Text>
        </View>
        <View style={{position:"absolute",top:154,left:108}}>
          <Text style ={{fontSize:16,color:"rgb(11,61,31)"}}>User Name</Text>
          <TextInput 
          style={{height: 19,width:152,position:'absolute',top:30,borderBottomColor:'black',borderBottomWidth:1}}
          placeholder= "less than four words"
          onChangeText={username => setUsername(username)}>
          </TextInput>
        </View>
        <View style ={{position:"absolute",top:219,left:107}}>
          <Text style={{fontSize:16,color:"rgb(11,61,31)"}}>Account Number</Text>
          <TextInput 
          style={{height: 19,width:152,position:'absolute',top:30,borderBottomColor:'black',borderBottomWidth:1}}
          placeholder= "student number"
          onChangeText={accountNumber => setAccountNumber(accountNumber)}>
          </TextInput>
        </View>
        <View style ={{position:"absolute",top:284,left:107}}>
          <Text style={{fontSize:16,color:"rgb(11,61,31)"}}>Password</Text>
          <TextInput 
          style={{height: 19,width:152,position:'absolute',top:30,borderBottomColor:'black',borderBottomWidth:1}}
          placeholder= "number and digit"
          onChangeText={password=> setPassword(password)}>
          </TextInput>
        </View>
        <View style ={{position:"absolute",top:349,left:107}}>
          <Text style={{fontSize:16,color:"rgb(11,61,31)"}}>Confirm Password</Text>
          <TextInput 
          style={{height: 19,width:152,position:'absolute',top:30,borderBottomColor:'black',borderBottomWidth:1}}
          placeholder= "input password again"
          onChangeText={ConfirmPassword=> setConfirmPassword(ConfirmPassword)}>
          </TextInput>
        </View>
        <ImageBackground source = {require("./assets/images/Button.png")} style = {{position:"absolute",top:429.6,left:148,width:78.9,height:78.9}}>
        <View style ={{position:"absolute", top:30,left:15}}>
          <Text style ={{fontSize:14,color:"rgb(255,255,255)"}}>Sign Up</Text>
        </View>
        </ImageBackground>
      </ImageBackground>
    </View>
  )
};


const MyProfile = ({route, navigation}) =>{
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
        <Text style = {{position:"absolute",left:-140,top:354,fontSize:16,color:"rgb(11,61,31)"}}>Name</Text>
        <Text style = {{position:"absolute",left:60,top:354,fontSize:16,color:"rgb(11,61,31)",textAlign:"right"}}>Zella Hope</Text>
      </View>
      <View style = {{flexDirection:"row"}}>
        <Text style = {{position:"absolute",left:-140,top:394,fontSize:16,color:"rgb(11,61,31)"}}>AccountNumber</Text>
        <Text style = {{position:"absolute",left:60,top:393,fontSize:16,color:"rgb(11,61,31)",textAlign:"right"}}>123456</Text>
      </View>
      <View style = {{flexDirection:"row"}}>
        <Text style = {{position:"absolute",left:-140,top:434,fontSize:16,color:"rgb(11,61,31)"}}>Reset Password</Text>
        <View style = {styles.iconTo}></View>
      </View>
      <View style = {{flexDirection:"row"}}>
        <Text style = {{position:"absolute",left:-140,top:474,fontSize:16,color:"rgb(11,61,31)"}}>Group ID</Text>
        <Text style = {{position:"absolute",left:60,top:474,fontSize:16,color:"rgb(11,61,31)",textAlign:"right"}}>54321</Text>
      </View>
      <ImageBackground
      source = {require('./assets/images/ProfileSignout.jpg')}
      style = {{width:310,height:48,position:"absolute",top:520,left:32,right:33}}></ImageBackground>
      <View>
        <Text style={{color:"rgb(124,174,99)",fontSize:16,position:"absolute",top:530,left:-35}}>
          Sign Out
        </Text>
      </View>
    </View>
  )
};
const Reset= ({route, navigation}) =>{
  /*重置密码页*/
  const [currentPassword, setCurrentPassword] = useState('');
  const[newPassword,setNewPassword] = useState('');
  const[confirmNewPassword,setConfirmNewPassword] = useState('');
  const user={
    currentPassword: currentPassword,
    newPassword:newPassword,
    confirmNewPassword: confirmNewPassword,
  };
  return(
    <View style = {styles.container}>
      <Image
      source ={require('./assets/images/ProfileButton.jpg')}
      style = {{width:20,height:50,position:"absolute",left:27,top:30}}></Image>
      <View style = {{position:"absolute",top:36,left:96}}>
        <Text style = {{fontSize:24,color:"rgb(8,54,3)"}}>Reset Password</Text>
      </View>
      <View style ={{position:"absolute",top:117,left:90}}>
        <Text style={{fontSize:16,color:"rgb(11,61,31)"}}>Current Password</Text>
          <TextInput 
          style={{height: 19,width:152,position:'absolute',top:30,borderBottomColor:'rgb(141,164,104)',borderBottomWidth:1}}
          placeholder= "currentPassword"
          onChangeText={currentPassword => setCurrentPassword(currentPassword)}>
          </TextInput>
        </View>
        <View style ={{position:"absolute",top:221,left:90}}>
        <Text style={{fontSize:16,color:"rgb(11,61,31)"}}>New Password</Text>
          <TextInput 
          style={{height: 19,width:152,position:'absolute',top:30,borderBottomColor:'rgb(141,164,104)',borderBottomWidth:1}}
          placeholder= "newPassword"
          onChangeText={newPassword => setNewPassword(newPassword)}>
          </TextInput>
        </View>
        <View style ={{position:"absolute",top:325,left:90}}>
        <Text style={{fontSize:16,color:"rgb(11,61,31)"}}>Confirm New Password</Text>
          <TextInput 
          style={{height: 19,width:152,position:'absolute',top:30,borderBottomColor:'rgb(141,164,104)',borderBottomWidth:1}}
          placeholder= "confirmNewPassword"
          onChangeText={confirmNewPassword => setConfirmNewPassword(confirmNewPassword)}>
          </TextInput>
        </View>
        <ImageBackground
        source = {require('./assets/images/ResetButton.jpg')}
        style = {{width:310,height:48,position:"absolute",top:439,left:32,right:33}}></ImageBackground>
        <View>
          <Text style={{color:"rgb(246,173,31)",fontSize:16,position:"absolute",top:450,left:-67}}>Update Password</Text>
        </View>
        
    </View>
  )
};
const ResetDone= ({route, navigation}) =>{
  /*重置密码显示成功*/
  return(
  <View style = {styles.container}>
    <Image
      source ={require('./assets/images/ProfileButton.jpg')}
      style = {{width:20,height:50,position:"absolute",left:27,top:30}}></Image>
    <View style = {{position:"absolute",top:36,left:96}}>
      <Text style = {{fontSize:24,color:"rgb(8,54,3)"}}>Reset Password</Text>
    </View>
    <Image
    source ={require('./assets/images/ResetDone.png')}
    style ={{width:258,height:331,position:"absolute",top:88,left:66}}></Image>
    <View style = {{position:"absolute",top:435,left:96}}>
      <Text style = {{fontSize:24,color:"rgb(8,54,3)"}}>Password Reset</Text>
    </View>
    <View style = {{position:"absolute",top:470,left:69}}>
      <Text style = {{fontSize:12,color:"rgb(0,0,0)",fontWeight:"100"}}>
      Your password has been resut successfully
      </Text>
    </View>
    <ImageBackground
    source = {require('./assets/images/ResetButton.jpg')}
    style = {{width:310,height:48,position:"absolute",top:528,left:32,right:33}}></ImageBackground>
    <View>
      <Text style={{color:"rgb(246,173,31)",fontSize:16,position:"absolute",top:540,left:-62}}>Back to Profile</Text>
    </View>
        
  </View>
  )
}


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

export default Start;


