import React,{ useState } from 'react';
import { ScrollView,Platform,Alert,TouchableOpacity,TextInput,Dimensions,Image,ImageBackground, Text, StyleSheet, View, ImageStore } from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';


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
   const [taskScore, setTaskScore] = useState(0);
   const [year, setYear] = useState(2020-1900);
   const [month, setMonth] = useState(11);
   const [day, setDay] = useState(31);
   const [taskDetail, setTaskDetail] = useState('');
   const [difficulty, setDifficulty] = useState(5);
   const [taskName, setTaskName] = useState('');
   const [tool, setTool] = useState('');
   const [image1, setimage1] = useState('');
   const [image2, setimage2] = useState('');
   const [image3, setimage3] = useState('');
   const [image4, setimage4] = useState('');
   const [education, setEducation] = useState('');

   const [img1, setImg1] = useState('https://github.com/NoobCoderGrowing/DECO7381/blob/master/4811603866811_.pic_hd.jpg?raw=true');

   

   const [img2, setImg2] = useState('https://github.com/NoobCoderGrowing/DECO7381/blob/master/4801603866781_.pic_hd.jpg?raw=true');



const uploadPic=()=>{
  ImagePicker.openPicker({
    width: 300,
    height: 400,
    cropping: true
  }).then(image => {
    setImg1(image.path);
  });
}

const uploadPic2=()=>{
  ImagePicker.openPicker({
    width: 300,
    height: 400,
    cropping: true
  }).then(image => {
    setImg2(image.path)
  });
}

const uploadPic3=()=>{
  ImagePicker.openPicker({
    width: 300,
    height: 400,
    cropping: true
  }).then(image => {
    image.path
  });
}

const uploadPic4=()=>{
  ImagePicker.openPicker({
    width: 300,
    height: 400,
    cropping: true
  }).then(image => {
    image.path
  });
}





const createTask=()=>{

  const task={
    taskScore:taskScore,
    year:year,
    month:month,
    day:day,
    taskDetail:taskDetail,
    difficulty:difficulty,
    taskName:taskName,
    tool:tool,
    image1:image1,
    image2:image2,
    image3:image3,
    image4:image4,
    education:education,
  }
  const taskJson=JSON.stringify(task);

    fetch('http://localhost:8080/task/save', {
    method: 'POST',
    headers:{
      'Conten-type':'application/json;charset=UTF-8'
    },
    body: taskJson
  }).then((response)=>{
    if(!response.ok){
      console.log('fail');
    }
  })
  .catch((error) => {
    console.error(error);
  });
}


// const getPhoto=()=>{

  
//   fetch('http://localhost:8080/controller/download', {
//     method: 'POST',
//   }).then((response)=>{
//     console.log(response)
//   })
//   .catch((error) => {
//     console.error(error);
//   });
//   };

 

  

  
  return (
    <ScrollView>
      <Text style={{fontWeight:"bold",fontSize:24,color:'rgb(8,54,3)',textAlign:'center', marginTop:windowHeight*28/947, marginBottom:windowHeight*18/947}}></Text>
      <TextInput
              style={{ height: 64, width:windowWidth/22*20, backgroundColor: 'rgb(251,253,247)', borderWidth: 1, marginLeft: windowWidth/22,
              marginRight: windowWidth/22 }}
              placeholder="please input the name of the task"
              onChangeText={taskName => setTaskName(taskName)}
      />
      <Text style={{textAlign:'center', marginLeft:windowWidth*27/375, marginRight:windowWidth*27/375, marginTop:windowHeight*28/947, color:'rgba(141,192,56,0.2)'}}>——————————————————————————————————</Text>

      <View style={{marginLeft:windowWidth*27/375, marginRight:windowWidth*18/375, marginBottom:windowWidth*30/947,
      flex:1, flexDirection: 'row', alignItems: 'center'}}>
        <Text style={{fontWeight:"bold", fontSize:16, color:'rgb(135,178,106)', width:windowWidth*80/375}}>Difficulty</Text>
        <Image source={{uri: 'https://github.com/NoobCoderGrowing/git_test/blob/master/Staryellow.png?raw=true'}} style={{ width:20, height:20, marginLeft:8}}/>
        <Image source={{uri: 'https://github.com/NoobCoderGrowing/git_test/blob/master/Staryellow.png?raw=true'}} style={{ width:20, height:20, marginLeft:8}}/>
        <Image source={{uri: 'https://github.com/NoobCoderGrowing/git_test/blob/master/Staryellow.png?raw=true'}} style={{ width:20, height:20, marginLeft:8}}/>
        <Image source={{uri: 'https://github.com/NoobCoderGrowing/git_test/blob/master/Staryellow.png?raw=true'}} style={{ width:20, height:20, marginLeft:8}}/>
        <Image source={{uri: 'https://github.com/NoobCoderGrowing/git_test/blob/master/Staryellow.png?raw=true'}} style={{ width:20, height:20, marginLeft:8}}/>
      </View>

      <View style={{marginLeft:windowWidth*27/375, marginRight:windowWidth*18/375, marginBottom:windowWidth*30/947,
            flex:1, flexDirection: 'row', alignItems: 'center'}}>
            <Text style={{fontWeight:"bold", fontSize:16, color:'rgb(135,178,106)', width:windowWidth*80/375}}>Tools</Text>
            <TextInput
                 style={{ height: windowHeight/947*38, backgroundColor: 'rgb(251,253,247)', borderWidth: 1, flex:1}}
                 placeholder="tools that required"
                 onChangeText={tool => setTool(tool)}
            />
      </View>

      <View style={{marginLeft:windowWidth*27/375, marginRight:windowWidth*18/375,
            flex:1, flexDirection: 'row', alignItems: 'center'}}>
            <Text style={{fontWeight:"bold", fontSize:16, color:'rgb(135,178,106)', width:windowWidth*80/375}}>Category</Text>

      </View>
      {/* Category */}
      <View style={styles.container}>
        <View>
          <Image source={{uri: 'https://github.com/NoobCoderGrowing/git_test/blob/master/cat1.png?raw=true'}} style={ styles.thumbnail }/>
          <Text style={{fontWeight:"bold",fontSize:16, color:'rgba(0,0,0,0.65)',marginLeft: windowWidth*0.026,marginRight: windowWidth*0.032}}>water</Text>
        </View>

        <View>
          <Image source={{uri: 'https://github.com/NoobCoderGrowing/git_test/blob/master/cat2.png?raw=true'}} style={ styles.thumbnail }/>
          <Text style={{fontWeight:"bold",fontSize:16, color:'rgba(0,0,0,0.65)',marginLeft: windowWidth*0.04,marginRight: windowWidth*0.03}}>reading</Text>
        </View>

        <View>
          <Image source={{uri: 'https://github.com/NoobCoderGrowing/git_test/blob/master/cat3.png?raw=true'}} style={ styles.thumbnail }/>
          <Text style={{fontWeight:"bold",fontSize:16, color:'rgba(0,0,0,0.65)',marginLeft: windowWidth*0.045,marginRight: windowWidth*0.025}}>carbon</Text>
        </View>

        <View>
          <Image source={{uri: 'https://github.com/NoobCoderGrowing/git_test/blob/master/cat4.png?raw=true'}} style={ styles.thumbnail }/>
          <Text style={{fontWeight:"bold",fontSize:16, color:'rgba(0,0,0,0.65)',marginLeft: windowWidth*0.03,marginRight: windowWidth*0.03}}>energy</Text>
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
           placeholder="please provide some guide for the task"
           onChangeText={taskDetail => setTaskDetail(taskDetail)}
      />

      <View style={{marginLeft:windowWidth*27/375, marginRight:windowWidth*18/375,
            flex:1, flexDirection: 'row', alignItems: 'center'}}>
            <Text style={{fontWeight:"bold", fontSize:16, color:'rgb(135,178,106)'}}>Educational content</Text>
      </View>

      <TextInput
         style={{ height: 64, width:windowWidth/22*20, backgroundColor: 'rgb(251,253,247)', borderWidth: 1, marginLeft: windowWidth/22,
         marginRight: windowWidth/22, marginBottom:windowHeight*30/947 }}
         placeholder="please provide some educational contents for the task"
         onChangeText={education => setEducation(education)}
      />

      {/* <View>
        <Image source={{url:'https://reactnative.dev/docs/assets/p_cat2.png'}} style={{height:windowHeight*190/947, width:windowWidth*150/375, marginBottom:windowHeight*30/947}}/>
      </View> */}

      <ScrollView horizontal={true}>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity onPress={uploadPic}>
              <Image source={{uri: img1}} style={{height:190,width:147, marginBottom:60,marginLeft:30}}/>
            </TouchableOpacity>

            <TouchableOpacity onPress={uploadPic2}>
              <Image source={{uri: img2}} style={{height:190,width:147, marginBottom:60,marginLeft:30}}/>
            </TouchableOpacity>

            {/* <TouchableOpacity onPress={uploadPic}>
              <Image source={{uri: 'https://reactnative.dev/docs/assets/p_cat2.png'}} style={{height:190,width:147, marginBottom:60,marginLeft:12.3}}/>
            </TouchableOpacity>

            <TouchableOpacity onPress={uploadPic}>
              <Image source={{uri: 'https://reactnative.dev/docs/assets/p_cat2.png'}} style={{height:190,width:147, marginBottom:60,marginLeft:12.3}}/>
            </TouchableOpacity> */}
          </View>
      </ScrollView>

      
      <View style={{width:windowWidth, alignItems: 'center'}}>
        <TouchableOpacity style={styles.signIn} onPress={createTask}>
              <Text style={{bottom:5,textAlign:"center",color:'rgb(135,178,106)',fontWeight:"bold"}}>Confirm</Text>
        </TouchableOpacity>
      </View>


    </ScrollView>
  );
}

export default taskDeatail2;
