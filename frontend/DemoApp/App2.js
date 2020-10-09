import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import React,{ Component,useState,useEffect } from 'react';
import { FlatList,Platform,Alert,TouchableOpacity,TextInput,Dimensions,Image,ImageBackground, Text, StyleSheet, View, ImageStore } from 'react-native';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import createTask from './task';


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

const styleOfTaskList = StyleSheet.create({
  starLeft:{
    paddingLeft:8,
  }
  
});

const TaskList = ({ route, navigation }) => {
  var taskNumber=route.params.data.number;
  // console.log(route.params.data.number);
  var task=new Array();
  var i=0;
  //  while(taskNumber>0){
  //    task[i]=createTask(route.params.data,i+1);
  //    taskNumber-=1;
  //    i++
  //  }

  return (
    <View>
    <ScrollView>
    <View style={{marginTop:5,flexDirection:"column",width:windowWidth,height:windowHeight,alignItems:"center"}}>
        <View style={{borderBottomColor:"rgba(141,192,56,0.2)",borderBottomWidth:1,flexDirection:'row',width:375,height:76,justifyContent:'center',alignItems:'center'}}>
            <View style={{flexDirection:"column",width:120,height:27,backgroundColor:'',justifyContent:'center'}}>
              <Text style={{fontWeight:"bold",fontSize:20,color:'black',textAlign:'center'}}>Tasks to Do</Text>
            </View>
        </View>
        <View style={{textAlign:"left",width:317,marginTop:20}}>
          <Text style={{textAlign:"left",fontWeight:"bold"}}>This week</Text>
        </View>
        
       <FlatList>
     
       </FlatList>
        <View style={{shadowRadius:15,shadowOpacity:0.5,shadowOffset:{width:0,height:5},shadowColor:"rgb(135,178,106)",backgroundColor:'#fff',marginTop:20,width:317,height:333,position:"relative",flexDirection:"column",alignItems:"center",borderColor:"rgb(255,255,255)",borderWidth:1,borderRadius:20}}>
          <Image source={require('./assets/images/recycle.png')} style={{zIndex:100,position:"absolute",right:-3,top:-3}}/>
              <View style={{height:60,justifyContent:"center",alignItems:"center"}}>
                <Text style={{fontSize:20,textAlign:"center",fontWeight:"bold",color:"rgb(135,178,106)"}}>{task.title}</Text>
              </View>
              <View style={{width:239,height:57,justifyContent:"center",alignItems:"center",}}>
                <Text style={{textAlign:"left",width:280,overflow:"scroll"}}>{task.description}</Text>
              </View>
              
          <View style={{top:6,borderBottomColor:"rgba(141,192,56,0.2)",borderBottomWidth:1.5,width:280,height:1}}></View>
              <View style={{backgroundColor:"",top:20,width:280,height:20,flexDirection:"row",justifyContent:"flex-start",}}>
                <View style={{justifyContent:'center',width:70}}>
                  <Text style={{color:"rgb(135,178,106)", fontWeight:"bold",fontSize:14}}>{task.difficulty}</Text>
                </View>
                <View style={{left:5,flexDirection:"row",}}>
                  <View style={styleOfTaskList.starLeft}>
                    <Image source={require('./assets/images/Star11.png')}/>
                  </View>
                  <View style={styleOfTaskList.starLeft}>
                    <Image source={require('./assets/images/Star11.png')}/>
                  </View>
                  <View style={styleOfTaskList.starLeft}>
                    <Image source={require('./assets/images/Star11.png')}/>
                  </View>
                  <View style={styleOfTaskList.starLeft}>
                    <Image source={require('./assets/images/Star8.png')}/>
                  </View>
                  <View style={styleOfTaskList.starLeft}>
                    <Image source={require('./assets/images/Star8.png')}/>
                  </View>
                </View>
              </View>

              <View style={{backgroundColor:"",marginTop:20,width:280,height:20,flexDirection:"row",justifyContent:"flex-start"}}>
                <View style={{justifyContent:'center',width:70}}>
                  <Text style={{color:"rgb(135,178,106)", fontWeight:"bold",fontSize:14}}>Tools</Text>
                </View>
                <View style={{left:10,flexDirection:"row",alignItems:"center"}}>
                  <Text style={{textAlign:"left"}}>A water box</Text>
                </View>
              </View>
          <View style={{postion:"relative",marginTop:20,borderBottomColor:"rgba(141,192,56,0.2)",borderBottomWidth:1,width:280,height:1}}></View>
          <View style={{setPassword:15,postion:"relative",marginTop:10,backgroundColor:"",width:280,height:90,flexDirection:"row",justifyContent:"flex-start",alignItems:"center"}}>
            <View style={{marginLeft:5,height:65,width:64,backgroundColor:"gray",borderRadius:10}}><Image source={require('./assets/images/Star11.png')}/></View>
            <View style={{marginLeft:5,height:65,width:64,backgroundColor:"gray",borderRadius:10}}><Image source={require('./assets/images/Star11.png')}/></View>
            <View style={{marginLeft:5,height:65,width:64,backgroundColor:"gray",borderRadius:10}}><Image source={require('./assets/images/Star11.png')}/></View>
            <View style={{marginLeft:5,height:65,width:64,backgroundColor:"gray",borderRadius:10}}><Image source={require('./assets/images/Star11.png')}/></View>
          </View>    
        </View>
        
    </View>
    </ScrollView>
      <Image source={require('./assets/images/Group400.png')} style={{position:'absolute',bottom:0,alignSelf:'flex-end'}}/>
    </View>
  );
}




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


//   const[days, setDays] = useState("");
//   useEffect(() => {
//     setDays(getDay(route));
//  })

  
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

const Login = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password,setPassword] = useState('');
  const user={
    username: username,
    password: password,
  };

  const submit=()=>{
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
  
  
  return (
    <View style={styles.container}>
      <ImageBackground source={require('./assets/images/indexMainBackground.png')} style={styles.containerSecondContainer}>
        <ImageBackground source={require('./assets/images/upperBackground.png')} style={styles.containerSecondContainerThirdContainer}>
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