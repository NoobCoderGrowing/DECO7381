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





class Leaderboard extends Component{

    constructor(props) {
      super(props);
      this.state = {
          data:[1],
          backgroundColor1:null,
          backgroundColor2:null,
          backgroundColor3:null,
      };
    }
  

    changeColor=(a)=>{

        switch(a){
            case'week':this.setState({
                backgroundColor1:"rgb(164,202,99)",
                backgroundColor2:null,
                backgroundColor3:null,
            })
            break;

            case'month':this.setState({
                backgroundColor2:"rgb(164,202,99)",
                backgroundColor1:null,
                backgroundColor3:null,
            })
            break;

            case'year':this.setState({
                backgroundColor3:"rgb(164,202,99)",
                backgroundColor1:null,
                backgroundColor2:null,
            })
            break;
        }
        
    };

    
  
  render(){
    return(
    // Main container
    <View style={{flexDirection:"column",alignItems:'center'}}>

        <View style={{marginTop:50,width:152,height:30}}>
            <Text style={{fontSize:24,color:'rgb(8,54,3)'}}>
                Leaderboard
            </Text>
        </View>

        {/* Timeline */}
        <View style={{marginTop:30,width:306,height:30,backgroundColor:'rgba(164,202,99,0.2)',flexDirection:"row",justifyContent:"space-between",alignItems:"center",borderRadius:10}}>

            <TouchableOpacity style={{width:100,borderRadius:10,backgroundColor:this.state.backgroundColor1}} onPress={()=>this.changeColor('week')}>
              <Text style={{textAlign:'center',lineHeight:30}}>Week</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{width:100,borderRadius:10,backgroundColor:this.state.backgroundColor2}} onPress={()=>this.changeColor('month')}>
              <Text style={{textAlign:'center',lineHeight:30}}>Month</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{width:100,borderRadius:10,backgroundColor:this.state.backgroundColor3}} onPress={()=>this.changeColor('year')}>
              <Text style={{textAlign:'center',lineHeight:30}}>Year</Text>
            </TouchableOpacity>

        </View>
        {/* Podium */}
        <View style={{width:340,height:127}}>
            <ImageBackground source={require('./assets/images/group490.png')} style={{width:340,height:127,flexDirection:"row",justifyContent:'space-around',alignItems:'center'}}>

                <View>
                    <ImageBackground source = {require('./assets/images/UserProfile.png')} style={{position:'relative',width:60,height:60,backgroundColor:"red",borderRadius:30}}>
                        <View style={{position:'absolute',top:50,left:18,backgroundColor:"rgb(252,102,129)",width:20,height:20,borderRadius:10}}>
                            <Text style={{textAlign:'center'}}>1</Text>
                        </View>
                    </ImageBackground>
                </View>

                <View>
                    <ImageBackground source = {require('./assets/images/UserProfile.png')} style={{position:'relative',width:90,height:90,backgroundColor:"red",borderRadius:45}}>
                        <View style={{position:'absolute',top:80,left:35,backgroundColor:"rgb(255,208,55)",width:20,height:20,borderRadius:10}}>
                            <Text style={{textAlign:'center'}}>2</Text>
                        </View>
                    </ImageBackground>
                </View>

                <View>
                    <ImageBackground source = {require('./assets/images/UserProfile.png')} style={{position:'relative',width:60,height:60,backgroundColor:"red",borderRadius:30}}>
                        <View style={{position:'absolute',top:50,left:18,backgroundColor:"rgb(164,202,99)",width:20,height:20,borderRadius:10}}>
                            <Text style={{textAlign:'center'}}>3</Text>
                        </View>
                    </ImageBackground>
                </View>
            </ImageBackground>
        </View>

        {/* rank list */}
        <View  style={{marginTop:30,width:340,height:320,flexDirection:"column",justifyContent:'space-around'}}>
            <View style={{marginTop:5,width:350,height:60,backgroundColor:'rgba(255,208,55,0.7)',borderRadius:20,flexDirection:'row',alignItems:'center'}}>
                <Text style={{marginLeft:20,fontWeight:'bold',fontSize:16}}>1</Text>
                <Image source = {require('./assets/images/UserProfile.png')} style={{marginLeft:20,backgroundColor:'red',width:36,height:36,borderRadius:18}}></Image>
                <Text style={{marginLeft:20,width:136,textAlign:"left",lineHeight:20,fontSize:16,fontWeight:'bold'}}>James Smith</Text>
                <Image style={{marginLeft:20,width:25,height:25}} source={require('./assets/images/Starwhite.png')}></Image>
                <Text style={{marginLeft:20,fontWeight:'bold',fontSize:16}}>20</Text>
            </View>

            <View style={{marginTop:5,width:350,height:60,backgroundColor:'rgba(252,102,129,0.45)',borderRadius:20,flexDirection:'row',alignItems:'center'}}>
                <Text style={{marginLeft:20,fontWeight:'bold',fontSize:16}}>1</Text>
                <Image source = {require('./assets/images/UserProfile.png')} style={{marginLeft:20,backgroundColor:'red',width:36,height:36,borderRadius:18}}></Image>
                <Text style={{marginLeft:20,width:136,textAlign:"left",lineHeight:20,fontSize:16,fontWeight:'bold'}}>Michael Smith</Text>
                <Image style={{marginLeft:20,width:25,height:25}} source={require('./assets/images/Starwhite.png')}></Image>
                <Text style={{marginLeft:20,fontWeight:'bold',fontSize:16}}>17</Text>
            </View>

            <View style={{marginTop:5,width:350,height:60,backgroundColor:'rgba(164,202,99,0.7)',borderRadius:20,flexDirection:'row',alignItems:'center'}}>
                <Text style={{marginLeft:20,fontWeight:'bold',fontSize:16}}>1</Text>
                <Image source = {require('./assets/images/UserProfile.png')} style={{marginLeft:20,backgroundColor:'red',width:36,height:36,borderRadius:18}}></Image>
                <Text style={{marginLeft:20,width:136,textAlign:"left",lineHeight:20,fontSize:16,fontWeight:'bold'}}>Robert Smith</Text>
                <Image style={{marginLeft:20,width:25,height:25}} source={require('./assets/images/Starwhite.png')}></Image>
                <Text style={{marginLeft:20,fontWeight:'bold',fontSize:16}}>15</Text>
            </View>

            <View style={{marginTop:5,width:350,height:60,backgroundColor:'rgb(244,250,237)',borderRadius:20,flexDirection:'row',alignItems:'center'}}>
                <Text style={{marginLeft:20,fontWeight:'bold',fontSize:16}}>1</Text>
                <Image source = {require('./assets/images/UserProfile.png')} style={{marginLeft:20,backgroundColor:'red',width:36,height:36,borderRadius:18}}></Image>
                <Text style={{marginLeft:20,width:136,textAlign:"left",lineHeight:20,fontSize:16,fontWeight:'bold'}}>Maria Garcia</Text>
                <Image style={{marginLeft:20,width:25,height:25}} source={require('./assets/images/Staryellow.png')}></Image>
                <Text style={{marginLeft:20,fontWeight:'bold',fontSize:16}}>13</Text>
            </View>


            <View style={{marginTop:5,width:350,height:60,backgroundColor:'rgb(244,250,237)',borderRadius:20,flexDirection:'row',alignItems:'center'}}>
                <Text style={{marginLeft:20,fontWeight:'bold',fontSize:16}}>1</Text>
                <Image source = {require('./assets/images/UserProfile.png')} style={{marginLeft:20,backgroundColor:'red',width:36,height:36,borderRadius:18}}></Image>
                <Text style={{marginLeft:20,width:136,textAlign:"left",lineHeight:20,fontSize:16,fontWeight:'bold'}}>David Smith</Text>
                <Image style={{marginLeft:20,width:25,height:25}} source={require('./assets/images/Staryellow.png')}></Image>
                <Text style={{marginLeft:20,fontWeight:'bold',fontSize:16}}>9</Text>
            </View>

        </View>
        

    </View>
      
  
    )
   }

  }

  export default Leaderboard;
  