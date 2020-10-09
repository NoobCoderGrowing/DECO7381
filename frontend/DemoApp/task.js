import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import React,{ Component,useState,useEffect } from 'react';
import { FlatList,Platform,Alert,TouchableOpacity,TextInput,Dimensions,Image,ImageBackground, Text, StyleSheet, View, ImageStore } from 'react-native';
import {ScrollView } from 'react-native-gesture-handler';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import createTask from './task';

const windowWidth=Dimensions.get('window').width;
const windowHeight=Dimensions.get('window').height;


const styleOfTaskList = StyleSheet.create({
  starLeft:{
    paddingLeft:8,
  },

  secondFlat:{
    flexDirection:"row"
  }
  
});


class TaskList extends Component{

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    // console.log(this.props)
  }

render(){
  return(
    <View>
    {/* <ScrollView> */}
      <View style={{marginTop:5,flexDirection:"column",width:windowWidth,height:windowHeight,alignItems:"center"}}>
        <View style={{borderBottomColor:"rgba(141,192,56,0.2)",borderBottomWidth:1,flexDirection:'row',width:375,height:76,justifyContent:'center',alignItems:'center'}}>
            <View style={{flexDirection:"column",width:120,height:27,backgroundColor:'',justifyContent:'center'}}>
              <Text style={{fontWeight:"bold",fontSize:20,color:'black',textAlign:'center'}}>Tasks to Do</Text>
            </View>
        </View>
        <View style={{textAlign:"left",width:317,marginTop:20}}>
          <Text style={{textAlign:"left",fontWeight:"bold"}}>This week</Text>
        </View>
        
        <List
          data={this.props}
        />

      </View>
    {/* </ScrollView> */}
      <Image source={require('./assets/images/Group400.png')} style={{position:'absolute',bottom:0,alignSelf:'flex-end'}}/>
    </View>

  )
 }
}










class List extends Component{
  constructor(props) {
    super(props);
    this.state = {
      data:{},
      loaded: false
    };
  }

    componentDidMount() {
      this.setState({
        // data:this.state.data=this.props.data.route.params.data.tasks,
        data:this.state.data=Object.keys(this.props.data.route.params.data.tasks).map(key=>({key,...this.props.data.route.params.data.tasks[key]})),
        loaded:true,
      })
      
    }

  render(){
    if (!this.state.loaded) {
      return this.renderLoadingView();
    }

    return (
      <FlatList
        data={this.state.data}
        renderItem={this.renderCard}
        style={styleOfTaskList.starLeft}
        keyExtractor={(item) => item.key}
      />
    );
  }


  renderCard({ item }){
    return (
        <View style={{shadowRadius:15,shadowOpacity:0.5,shadowOffset:{width:0,height:5},shadowColor:"rgb(135,178,106)",backgroundColor:'#fff',marginTop:20,width:317,height:333,position:"relative",flexDirection:"column",alignItems:"center",borderColor:"rgb(255,255,255)",borderWidth:1,borderRadius:20}}>
          <Image source={require('./assets/images/recycle.png')} style={{zIndex:100,position:"absolute",right:-3,top:-3}}/>
              <View style={{height:60,justifyContent:"center",alignItems:"center"}}>
                <Text style={{fontSize:20,textAlign:"center",fontWeight:"bold",color:"rgb(135,178,106)"}}>{item.taskname}</Text>
              </View>
              <View style={{width:239,height:57,justifyContent:"center",alignItems:"center",}}>
                <Text style={{textAlign:"left",width:280,overflow:"scroll"}}>{item.task_detail}</Text>
              </View>
              
          <View style={{top:6,borderBottomColor:"rgba(141,192,56,0.2)",borderBottomWidth:1.5,width:280,height:1}}></View>
              <View style={{backgroundColor:"",top:20,width:280,height:20,flexDirection:"row",justifyContent:"flex-start",}}>
                <View style={{justifyContent:'center',width:70}}>
                  <Text style={{color:"rgb(135,178,106)", fontWeight:"bold",fontSize:14}}>Difficulty</Text>
                </View>
                <View style={{left:5,flexDirection:"row",}}>
                  <Stars
                    data={item.difficulty}
                  />
                </View>
              </View>

              <View style={{backgroundColor:"",marginTop:20,width:280,height:20,flexDirection:"row",justifyContent:"flex-start"}}>
                <View style={{justifyContent:'center',width:70}}>
                  <Text style={{color:"rgb(135,178,106)", fontWeight:"bold",fontSize:14}}>Tools</Text>
                </View>
                <View style={{left:10,flexDirection:"row",alignItems:"center"}}>
                  <Text style={{textAlign:"left"}}>{item.tools}</Text>
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
      
  );
  }


  renderLoadingView() {
    return (
      <View>
        <Text>Loading task list..</Text>
      </View>
    );
  }
}



class Stars extends Component{
  constructor(props) {
    super(props);
    this.state = {
      data:[],
    };
  }

    componentDidMount(){
      var starNum=this.props.data;
      var a=[]
      for(var i=1;i<=starNum;i++){
        a.push(i);
      }
      this.setState(
          {data:this.state.data=a,}
      )
      
      // console.log(a);
      // console.log(this.props)
      // console.log(this.state.data);
    }

    render(){
      return (
        <FlatList
          data={this.state.data}
          renderItem={this.renderStars}
          style={styleOfTaskList.secondFlat}
          keyExtractor={(index)=>index.toString()}
        />
      );
    }

    renderStars({ item }){
      return (
        <View style={styleOfTaskList.starLeft}>
            <Image source={require('./assets/images/Star11.png')}/>
        </View> 
      );
    }
}






export default TaskList;