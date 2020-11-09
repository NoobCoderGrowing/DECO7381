import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import React,{ Component,useState,useEffect } from 'react';
import { FlatList,Platform,Alert,TouchableOpacity,TextInput,Dimensions,Image,ImageBackground, Text, StyleSheet, View, ImageStore,Animated} from 'react-native';
import {ScrollView } from 'react-native-gesture-handler';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TaskList from './task';
import AfterLogin from './afterLogin';
import Login from './login';

import teacherTaskDetail from './teacherTaskDetail';
import TaskDetail2 from "./Apphaizhao2";
import taskDeatail2 from './Apphaizhao2';





class echoTree extends Component{

    
    // const topvalue=useState(new Animated.Value(100))[0];
    constructor(props) {
        super(props);
        this.state = {
          topvalue:new Animated.Value(100),
          leftvalue:new Animated.Value(150),
          credit:20,
          display:"none",
          progressBar:0,
          source:require('./assets/images/tree/tree1.png'),
          source1:require('./assets/images/tree/tree1.png'),
          source2:require('./assets/images/tree/tree2.png'),
          source3:require('./assets/images/tree/tree3.png'),
          source4:require('./assets/images/tree/tree4.png'),
          source5:require('./assets/images/tree/tree5.png'),
          source6:require('./assets/images/tree/tree6.png'),
          source7:require('./assets/images/tree/tree7.png'),
        };
      }

   moveBall(){
       console.log("lllll");
        
        this.setState({
            display:'flex',
            
        });
        if(this.state.progressBar<=150){
            if(this.state.progressBar==150){
                this.setState({
                    progressBar:this.state.progressBar=160,    
                });
            }else{
                this.setState({
                    progressBar:this.state.progressBar+=30,    
                });
            }
            if(this.state.progressBar==160){
                this.changeTree(this.state.source);
            }
        }else{
            this.setState({
                progressBar:this.state.progressBar=0,    
            });  
        }

        Animated.timing(this.state.topvalue,{
            toValue:1000,
            duration:3000,
            useNativeDriver:false
        }).start();

        Animated.timing(this.state.leftvalue,{
            toValue:500,
            duration:3000,
            useNativeDriver:false
        }).start();

        // this.restore(this.state.topvalue,this.state.leftvalue,this.state.display)
    }


    // restore(top,left,display){
    //     this.setState({
    //         topValue: new Animated.Value(100),
    //     })
    // }

    changeTree(a){
        switch(a){
            case require('./assets/images/tree/tree1.png'):this.setState({
                source:this.state.source2,
            })
            break;

            case require('./assets/images/tree/tree2.png'):this.setState({
                source:this.state.source3,
            })
            break;

            case require('./assets/images/tree/tree3.png'):this.setState({
                source:this.state.source4,
            })
            break;

            case require('./assets/images/tree/tree4.png'):this.setState({
                source:this.state.source5,
            })
            break;

            case require('./assets/images/tree/tree5.png'):this.setState({
                source:this.state.source6,
            })
            break;

            case require('./assets/images/tree/tree6.png'):this.setState({
                source:this.state.source7,
            })
            break;

            case require('./assets/images/tree/tree7.png'):this.setState({
                source:this.state.source1,
            })
            break;
        }
    }


   

    render(){
    return(
    // Main container
    <View style={{flexDirection:"column",alignItems:'center'}}>
        <ImageBackground source={require('./assets/images/Group503.png')} style={{position:'relative',width:375,height:667}}>
            <Image style={{zIndex:2,position:'absolute',top:350,left:20}} source={require('./assets/images/needle/dew.png')}></Image>
            <Image style={{zIndex:1,position:'absolute',top:200,left:33,height:160}} source={require('./assets/images/needle/tube.png')}></Image>
            <View style={{zIndex:2,position:'absolute',top:335,left:20,width:30,height:20}}>
                <Image style={{zIndex:3,position:'absolute',alignSelf:'center',bottom:0,height:this.state.progressBar}} source={require('./assets/images/needle/tube2.png')}></Image>
            </View>
            {/* <View style={{width:20,height:20,position:"absolute",backgroundColor:'red',left:150,top:100}}>
                <Text>{this.state.credit}</Text>
            </View>
             */}
            
            <View style={{ position:'relative',width:280,height:400,alignSelf:'center',top:'25%'}}>
                <Image style={{zIndex:1,position:'absolute',alignSelf:'center',bottom:0}} source={this.state.source}></Image>
            </View>

            <Animated.View style={[
                 {zIndex:2,
                    position:'absolute',
                    top:'10%',
                    left:this.state.leftvalue}
                ]}>
                {/* <TouchableOpacity  onPress={()=>this.moveBall()}> */}
                    <Image source={require('./assets/images/tree/kettle.png')}></Image>
                {/* </TouchableOpacity> */}
            </Animated.View>
            <TouchableOpacity  onPress={()=>this.moveBall()}>  
            <View style={{height:50,width:50,left:300,top:-350}}>
                
            </View>
            </TouchableOpacity>  
            <Animated.View style={[
                 {zIndex:2,
                    position:'absolute',
                    alignSelf:'center',
                    top:this.state.topvalue,
                    display:this.state.display}
                ]}>
                <Image source={require('./assets/images/tree/water.png')}></Image>
            </Animated.View>
        </ImageBackground>

        
        

    </View>
      
  
    )
    }
   }




  export default echoTree;
  