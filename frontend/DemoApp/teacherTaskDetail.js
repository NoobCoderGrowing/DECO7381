import React from 'react';
import { Button, ScrollView,Platform,Alert,TouchableOpacity,TextInput,Dimensions,Image,ImageBackground, Text, StyleSheet, View, ImageStore } from 'react-native';

const windowWidth=Dimensions.get('window').width;
const windowHeight=Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  thumbnail: {
    width: 60,
    height: 60,
    margin: windowWidth*0.02
  },
  signIn:{
    height:50,
    width:50,
    backgroundColor:'rgb(96,160,48)',
    borderRadius:50,
    justifyContent:"center",
    alignItems:"center",
    borderColor:'rgb(164,202,99)',
    borderWidth:4,
    borderRadius:50,
    position:'absolute',
    right:0,
    top:40

  }
});

const teacherTaskDetail = () => {
  return (
    <View style={{position:"relative"}}>
    <ScrollView>
      <View style={{position:'relative'}}>
        <Text style={{fontWeight:"bold",fontSize:24,color:'rgb(8,54,3)',textAlign:'center', marginTop:50, marginBottom:windowHeight*18/947}}>Less Plastic Bottle!</Text>
        <TouchableOpacity style={styles.signIn}>
              <Text style={{bottom:5,textAlign:"center",color:'white',fontWeight:"bold"}}>Edit</Text>
        </TouchableOpacity>
      </View>

      
      <Text style={{marginTop:10,fontSize:16,color:'rgba(0,0,0,0.65)',marginLeft:windowWidth*27/375,marginRight:windowWidth*27/375,lineHeight:24}}>Using reusable water bottle instead of plasctic bottle to save the generate less plastic waste! Can this attempt last for a week?</Text>

      <Text style={{textAlign:'center', marginLeft:windowWidth*27/375, marginRight:windowWidth*27/375, marginTop:windowHeight*28/947, color:'rgba(141,192,56,0.2)'}}>——————————————————————————————————</Text>

      <View style={{marginLeft:windowWidth*27/375, marginRight:windowWidth*18/375, marginBottom:windowWidth*30/947,
      flex:1, flexDirection: 'row', alignItems: 'center'}}>
        <Text style={{fontWeight:"bold", fontSize:14, color:'rgb(135,178,106)', width:windowWidth*67/375}}>Difficulty</Text>
        <Image source={{uri: 'https://reactnative.dev/docs/assets/p_cat2.png'}} style={{ width:25, height:25, marginLeft:8}}/>
        <Image source={{uri: 'https://reactnative.dev/docs/assets/p_cat2.png'}} style={{ width:25, height:25, marginLeft:8}}/>
        <Image source={{uri: 'https://reactnative.dev/docs/assets/p_cat2.png'}} style={{ width:25, height:25, marginLeft:8}}/>
        <Image source={{uri: 'https://reactnative.dev/docs/assets/p_cat2.png'}} style={{ width:25, height:25, marginLeft:8}}/>
        <Image source={{uri: 'https://reactnative.dev/docs/assets/p_cat2.png'}} style={{ width:25, height:25, marginLeft:8}}/>
      </View>

      <View style={{marginLeft:windowWidth*27/375, marginRight:windowWidth*18/375, marginBottom:windowWidth*30/947,
            flex:1, flexDirection: 'row', alignItems: 'center'}}>
            <Text style={{fontWeight:"bold", fontSize:14, color:'rgb(135,178,106)', width:windowWidth*67/375}}>Tools</Text>
            <Text style={{fontSize:16,color:'rgba(0,0,0,0.65)',marginLeft:windowWidth*17/375,marginRight:windowWidth*27/375,lineHeight:24}}>a water bottle</Text>
      </View>

      <View style={{marginLeft:windowWidth*27/375, marginRight:windowWidth*18/375,
            flex:1, flexDirection: 'row', alignItems: 'center'}}>
            <Text style={{fontWeight:"bold", fontSize:14, color:'rgb(135,178,106)', width:windowWidth*67/375}}>Category</Text>
            <Image source={{uri: 'https://reactnative.dev/docs/assets/p_cat2.png'}} style={{ width:138, height:40, marginLeft:8}}/>
      </View>

      <Text style={{textAlign:'center', marginLeft:windowWidth*27/375, marginRight:windowWidth*27/375, marginTop:windowHeight*28/947, color:'rgba(141,192,56,0.2)'}}>——————————————————————————————————</Text>

      <View style={{marginLeft:windowWidth*27/375, marginRight:windowWidth*18/375,
            flex:1, flexDirection: 'row', alignItems: 'center'}}>
            <Text style={{fontWeight:"bold", fontSize:14, color:'rgb(135,178,106)', width:windowWidth*67/375}}>Guide</Text>
      </View>

      <View style={{width:windowWidth,height:144,flexDirection:"column",alignItems:"center"}}>
        <View style={{width:320,height:144,}}>
          <Text style={{fontSize:14,color:'rgba(0,0,0,0.65)',lineHeight:24}}>Pay attention to where you use plastic bags, is it neccesary to use it? And how many plastic bags you use it everyday. Record and think: How you will do to reduce using plastic bags? Submit it as pictures.</Text>
        </View>
      </View>
      

      <View style={{marginLeft:windowWidth*27/375, marginRight:windowWidth*18/375,
            flex:1, flexDirection: 'row', alignItems: 'center'}}>
            <Text style={{fontWeight:"bold", fontSize:14, color:'rgb(135,178,106)'}}>Educational content</Text>
      </View>

      <View style={{width:windowWidth,height:144,flexDirection:"column",alignItems:"center"}}>
        <View style={{width:320,height:144,}}>
          <Text style={{fontSize:14,color:'rgba(0,0,0,0.65)',lineHeight:24}}>It is common for using plastic bag in daily life. However,  most people won’t remember how many plastic bags they use everyday. This task is let students have a good habit to record the use of plastic.</Text>
        </View>
      </View>

    
      <ScrollView horizontal={true}>
          <View style={{flexDirection: 'row'}}>
            <Image source={{uri: 'https://reactnative.dev/docs/assets/p_cat2.png'}} style={{height:190,width:147, marginBottom:60,marginLeft:12.3}}/>
            <Image source={{uri: 'https://reactnative.dev/docs/assets/p_cat2.png'}} style={{height:190,width:147, marginBottom:60,marginLeft:12.3}}/>
            <Image source={{uri: 'https://reactnative.dev/docs/assets/p_cat2.png'}} style={{height:190,width:147, marginBottom:60,marginLeft:12.3}}/>
            <Image source={{uri: 'https://reactnative.dev/docs/assets/p_cat2.png'}} style={{height:190,width:147, marginBottom:60,marginLeft:12.3}}/>
          </View>
      </ScrollView>

    </ScrollView>
    <Image source={require('./assets/images/Group394.png')} style={{height:windowHeight*67.3/947, width:windowWidth*68/375,marginLeft:windowWidth*307/375,position:'absolute',bottom:10}}/>
    </View>
  );
}

export default teacherTaskDetail;