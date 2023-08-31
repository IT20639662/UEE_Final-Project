/* eslint-disable prettier/prettier */
import { View, Text ,Image,StyleSheet,useWindowDimensions, TextInput, ScrollView} from 'react-native';
import React from 'react'
import { useNavigation } from '@react-navigation/native';

import CustomButton from '../../components/CustomButtons/CustomButton';
import LogTypeImg from  "../../../assets/images/jobType.png";
import postimg from  "../../../assets/images/post.png";

const UpdatePostProviderscreen = () => {

  const {Height} = useWindowDimensions();
  const navigation =useNavigation();

  const onUpdateProviderPressed= ()=>{
    console.warn("get started")
  
    alert("Successfully Updated")
    navigation.navigate('ProviderProfile');

  }

  return (
    <ScrollView>
    <View style={Styles.root}>
    <Text style={Styles.tittle}>Update Post</Text>
      <Image source={LogTypeImg} style={[Styles.logo  ,{Height:  Height*0.1}]} resizeMode="contain" />
      <Text style= {Styles.txt}>Title</Text>
      <TextInput
        style= {Styles.inputs}
        placeholder="Title"
        value='Software Engineering Intern'
      />
      <Text style= {Styles.txt}>Company</Text>
      <TextInput
        style= {Styles.inputs}
        placeholder="Company"
        value='LKJS Solutions'
      />
      <Text style= {Styles.txt}>Working Mode</Text>
      <TextInput
        style= {Styles.inputs}
        placeholder="Working Mode"
        value='On Site/Hybrid'
      />
      <Text style= {Styles.txt}>Job Type</Text>
      <TextInput
        style= {Styles.inputs}
        placeholder=""
        value='IT'
      />
      <Text style= {Styles.txt}>Location</Text>
      <TextInput
        style= {Styles.inputs}
        placeholder="Address"
        value='Colombo'
      />
      <Text style= {Styles.txt}>Description</Text>
      <TextInput
        style= {Styles.inputs}
        placeholder=""
        value='LKJS Solutions is the best........'
      />

     <Text style= {Styles.txt}>Job Advertisement</Text>
     <Image source={postimg} style={[Styles.postImg  ,{Height:  Height*0.1}]} resizeMode="contain" />
      

      <CustomButton text="Update" onPress={onUpdateProviderPressed}/>
    </View>
    </ScrollView>
  )
}

const Styles = StyleSheet.create({
  root: {
    backgroundColor:'white',
    alignItems: 'center',
  },
  logo: {
    marginTop:10,
    width: '60%',
    maxWidth:300,
    maxHeight:350,
  },
  postImg: {
    marginTop:10,
    width: '60%',
    maxWidth:400,
    maxHeight:400,
  },
  inputs: {
    padding:8,
    width: '80%',
    marginVertical:10,
    alignItems:'center',
    borderRadius:10,
    borderColor: '#3E4F88',
    borderWidth: 1,
    marginTop:10,
  },
  txt:{
    width: '80%',
    fontWeight:'bold',
    fontSize:15,
    marginTop:10,
    color:'grey'
  },
  tittle: {
    fontWeight: 'bold',
    fontSize: 16     ,
    color: '#3E4F88',
    width: '80%',
    marginVertical: 20
  },
})

export default UpdatePostProviderscreen