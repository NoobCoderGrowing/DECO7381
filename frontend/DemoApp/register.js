import React,{Component} from 'react';
import {useState} from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Picker,Dimensions,Text, StyleSheet, View, ImageBackground, Image,TouchableOpacity} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';


const windowWidth=Dimensions.get('window').width;
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
      top:windowHeight*0.65,
      borderColor:'rgb(164,202,99)',
      borderWidth:4,
      borderRadius:50
    }
  
  })

  


const Register = ({route, navigation}) =>{
    /*注册界面*/
    const [username, setUsername] = useState('');
    const[userType,setUserType] = useState('');
    const [password,setPassword] = useState('');
    const[ConfirmPassword,setConfirmPassword] = useState('');

    const user={
      username: username,
      password: password,
      userType: userType,
    };

    const signUp=()=>{
      fetch(
        'http://localhost:8080/user/save',{
          method:'POST',
          headers:{
            'Conten-type':'application/json;charset=UTF-8'
          },
          body: JSON.stringify(user)
        }
      ).then((response)=>{
        if(!response.ok){
          console.log("成功")
        }
      })
      .catch((error) => {
        console.error(error);
      });
    }






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
            <Text style={{fontSize:16,color:"rgb(11,61,31)"}}>User Type</Text>
            <TextInput 
            style={{height: 19,width:152,position:'absolute',top:30,borderBottomColor:'black',borderBottomWidth:1}}
            placeholder= "student or teacher"
            onChangeText={accountNumber => setAccountNumber(accountNumber)}>
            </TextInput>
          </View>

        




          <View style ={{position:"absolute",top:284,left:107}}>
            <Text style={{fontSize:16,color:"rgb(11,61,31)"}}>Password</Text>
            <TextInput 
            style={{height: 19,width:152,position:'absolute',top:30,borderBottomColor:'black',borderBottomWidth:1}}
            placeholder= "number and digit"
            onChangeText={password=> setPassword(password)}
            secureTextEntry={true}>
            </TextInput>
          </View>
          <View style ={{position:"absolute",top:349,left:107}}>
            <Text style={{fontSize:16,color:"rgb(11,61,31)"}}>Confirm Password</Text>
            <TextInput 
            style={{height: 19,width:152,position:'absolute',top:30,borderBottomColor:'black',borderBottomWidth:1}}
            placeholder= "input password again"
            onChangeText={ConfirmPassword=> setConfirmPassword(ConfirmPassword)}
            secureTextEntry={true}>
            </TextInput>
          </View>

          <TouchableOpacity style={styles.signIn} onPress={signUp}>
            <Text style={{bottom:5,textAlign:"center",color:'white',fontWeight:"bold"}}>Sign Up</Text>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    )
  };

  export default Register;