import React from 'react';
import { ScrollView,Platform,Alert,TouchableOpacity,TextInput,Dimensions,Image,ImageBackground, Text, StyleSheet, View, ImageStore } from 'react-native';

const windowWidth=Dimensions.get('window').width;
const windowHeight=Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20
  },
  thumbnail: {
    width: 60,
    height: 60,
    margin: windowWidth*0.02
  },
  signIn:{
    height:90,
    width:90,
    justifyContent:"center",
    alignItems:"center",
  }
});


  

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

const taskDeatail2 = () => {
   //const link=require('./assets/images/db_hover.png');



// const submit2=()=>{
//   const xhr=new XMLHttpRequest();
//   const formData=new FormData();
  
//   formData.append('image',{
//     uri:link,
//     type:"image/png",
//     name:"photo.png",
//   });
//   // xhr.upload.addEventListener('progress',handleProgress);
//   // xhr.addEventListener('load',()=>{
//   //   setUploadProgress(100);
//   //   setResponse(xhr.response);
//   // });
//   xhr.open('POST','http://localhost:8080/controller/upload');
//   // xhr.setRequestHeader('Authorization',UPLOAD_PROGRESS_HEADER);
//   xhr.send(formData);
// };

// const submit2=()=>{
// var data = new FormData()
// data.append('file', 'https://reactnative.dev/docs/assets/p_cat2.png')
// // data.append('user', 'hubot')

// fetch('http://localhost:8080/controller/upload', {
//   method: 'POST',
//   headers:{
//     'Conten-type':"image/png"
//   },
//   body: data
// }).then((response)=>{
//   console.log(response)
// })
// .catch((error) => {
//   console.error(error);
// });
// };

const submit2=()=>{
const form = new FormData();

form.append('image', {
  uri: "https://reactnative.dev/docs/assets/p_cat2.png",
  type: 'image/png',
  name: 'image.png',
});

fetch('http://localhost:8080/controller/upload', {
  method: 'POST',
  body: form
}).then((response)=>{
    console.log(response)
  })
  .catch((error) => {
    console.error(error);
  });
  };





const getPhoto=()=>{

  
  fetch('http://localhost:8080/controller/download', {
    method: 'POST',
  }).then((response)=>{
    console.log(response)
  })
  .catch((error) => {
    console.error(error);
  });
  };

  
  return (
    <ScrollView>
      <Text style={{fontWeight:"bold",fontSize:24,color:'rgb(8,54,3)',textAlign:'center', marginTop:windowHeight*28/947, marginBottom:windowHeight*18/947}}>Less Plastic Bottle!</Text>
      <TextInput
              style={{ height: 64, width:windowWidth/22*20, backgroundColor: 'rgb(251,253,247)', borderWidth: 1, marginLeft: windowWidth/22,
              marginRight: windowWidth/22 }}
              defaultValue="please input short description of the task"
      />
      <Text style={{textAlign:'center', marginLeft:windowWidth*27/375, marginRight:windowWidth*27/375, marginTop:windowHeight*28/947, color:'rgba(141,192,56,0.2)'}}>——————————————————————————————————</Text>

      <View style={{marginLeft:windowWidth*27/375, marginRight:windowWidth*18/375, marginBottom:windowWidth*30/947,
      flex:1, flexDirection: 'row', alignItems: 'center'}}>
        <Text style={{fontWeight:"bold", fontSize:16, color:'rgb(135,178,106)', width:windowWidth*80/375}}>Difficulty</Text>
        <Image source={{uri: 'https://reactnative.dev/docs/assets/p_cat2.png'}} style={{ width:36, height:36, marginLeft:8}}/>
        <Image source={{uri: 'https://reactnative.dev/docs/assets/p_cat2.png'}} style={{ width:36, height:36, marginLeft:8}}/>
        <Image source={{uri: 'https://reactnative.dev/docs/assets/p_cat2.png'}} style={{ width:36, height:36, marginLeft:8}}/>
        <Image source={{uri: 'https://reactnative.dev/docs/assets/p_cat2.png'}} style={{ width:36, height:36, marginLeft:8}}/>
        <Image source={{uri: 'https://reactnative.dev/docs/assets/p_cat2.png'}} style={{ width:36, height:36, marginLeft:8}}/>
      </View>

      <View style={{marginLeft:windowWidth*27/375, marginRight:windowWidth*18/375, marginBottom:windowWidth*30/947,
            flex:1, flexDirection: 'row', alignItems: 'center'}}>
            <Text style={{fontWeight:"bold", fontSize:16, color:'rgb(135,178,106)', width:windowWidth*80/375}}>Tools</Text>
            <TextInput
                 style={{ height: windowHeight/947*38, backgroundColor: 'rgb(251,253,247)', borderWidth: 1, flex:1}}
                 defaultValue="tools that required"
            />
      </View>

      <View style={{marginLeft:windowWidth*27/375, marginRight:windowWidth*18/375,
            flex:1, flexDirection: 'row', alignItems: 'center'}}>
            <Text style={{fontWeight:"bold", fontSize:16, color:'rgb(135,178,106)', width:windowWidth*80/375}}>Category</Text>

      </View>
      {/* Category */}
      <View style={styles.container}>
        <View>
          <Image source={{uri: 'https://reactnative.dev/docs/assets/p_cat2.png'}} style={ styles.thumbnail }/>
          <Text style={{fontWeight:"bold",fontSize:16, color:'rgba(0,0,0,0.65)',marginLeft: windowWidth*0.026,marginRight: windowWidth*0.032}}>recycle</Text>
        </View>

        <View>
          <Image source={{uri: 'https://reactnative.dev/docs/assets/p_cat2.png'}} style={ styles.thumbnail }/>
          <Text style={{fontWeight:"bold",fontSize:16, color:'rgba(0,0,0,0.65)',marginLeft: windowWidth*0.04,marginRight: windowWidth*0.03}}>water</Text>
        </View>

        <View>
          <Image source={{uri: 'https://reactnative.dev/docs/assets/p_cat2.png'}} style={ styles.thumbnail }/>
          <Text style={{fontWeight:"bold",fontSize:16, color:'rgba(0,0,0,0.65)',marginLeft: windowWidth*0.045,marginRight: windowWidth*0.025}}>energy</Text>
        </View>

        <View>
          <Image source={{uri: 'https://reactnative.dev/docs/assets/p_cat2.png'}} style={ styles.thumbnail }/>
          <Text style={{fontWeight:"bold",fontSize:16, color:'rgba(0,0,0,0.65)',marginLeft: windowWidth*0.03,marginRight: windowWidth*0.03}}>reading</Text>
        </View>
    
      </View>

    

      <Text style={{textAlign:'center', marginLeft:windowWidth*27/375, marginRight:windowWidth*27/375, marginTop:windowHeight*28/947, color:'rgba(141,192,56,0.2)'}}>——————————————————————————————————</Text>

      <View style={{marginLeft:windowWidth*27/375, marginRight:windowWidth*18/375,
            flex:1, flexDirection: 'row', alignItems: 'center'}}>
            <Text style={{fontWeight:"bold", fontSize:16, color:'rgb(135,178,106)', width:windowWidth*67/375}}>Guide</Text>
      </View>

      <TextInput
           style={{ height: 64, width:windowWidth/22*20, backgroundColor: 'rgb(251,253,247)', borderWidth: 1, marginLeft: windowWidth/22,
           marginRight: windowWidth/22, marginBottom:windowHeight*20/947 }}
           defaultValue="please provide some guide for the task"
      />

      <View style={{marginLeft:windowWidth*27/375, marginRight:windowWidth*18/375,
            flex:1, flexDirection: 'row', alignItems: 'center'}}>
            <Text style={{fontWeight:"bold", fontSize:16, color:'rgb(135,178,106)'}}>Educational content</Text>
      </View>

      <TextInput
         style={{ height: 64, width:windowWidth/22*20, backgroundColor: 'rgb(251,253,247)', borderWidth: 1, marginLeft: windowWidth/22,
         marginRight: windowWidth/22, marginBottom:windowHeight*30/947 }}
         defaultValue="please provide some educational contents for the task"
      />

      <View>
        <Image source={{url:'https://reactnative.dev/docs/assets/p_cat2.png'}} style={{height:windowHeight*190/947, width:windowWidth*150/375, marginBottom:windowHeight*30/947}}/>
      </View>

      
      <View style={{width:windowWidth, alignItems: 'center'}}>
        <TouchableOpacity style={styles.signIn} onPress={submit2}>
              <Text style={{bottom:5,textAlign:"center",color:'rgb(135,178,106)',fontWeight:"bold"}}>Confirm</Text>
        </TouchableOpacity>
      </View>


    </ScrollView>
  );
}

export default taskDeatail2;
