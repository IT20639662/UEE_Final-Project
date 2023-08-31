/* eslint-disable prettier/prettier */
import { View, Text ,Image,StyleSheet,useWindowDimensions, TextInput, TouchableOpacity} from 'react-native';
import React from 'react'
import { useNavigation } from '@react-navigation/native';

import CustomButton from '../../components/CustomButtons/CustomButton';
import LogTypeImg from  "../../../assets/images/jobType.png";

const MyPostsProviderscreen = () => {

  const {Height} = useWindowDimensions();
  const navigation =useNavigation();

  const onAddProviderPressed= ()=>{
    console.warn("get started")
  
  navigation.navigate('ProviderAddPosts');
  
  }

  const toUpdate= ()=>{
    console.warn("get started")
  
  navigation.navigate('ProviderUpdatePosts');
  
  }

  
  return (
    <View style={Styles.root}>

<Text style={Styles.tittle}>My Posts</Text>
     
     <TouchableOpacity style={Styles.card} onPress={toUpdate}>
      <View  >
        <Text style={Styles.titleText}>Software Engineering - Intern</Text>  
        <Text style={Styles.cntText}>LKJS Solutions</Text>
        <Text style={Styles.cntText}>On Site/Hybrid/Remote</Text>
      </View>
      </TouchableOpacity>

      <TouchableOpacity style={Styles.card} onPress={toUpdate}>
      <View  >
        <Text style={Styles.titleText}>QA Enginnering - Intern</Text>  
        <Text style={Styles.cntText}>LKJS Solutions</Text>
        <Text style={Styles.cntText}>On Site/Hybrid/Remote</Text>
      </View>
      </TouchableOpacity>

      <TouchableOpacity style={Styles.card} onPress={toUpdate}>
      <View  >
        <Text style={Styles.titleText}>DevOps Engineer  </Text>  
        <Text style={Styles.cntText}>LKJS Solutions</Text>
        <Text style={Styles.cntText}>On Site/Hybrid/Remote</Text>
      </View>
      </TouchableOpacity>
      <CustomButton text="Add Posts" onPress={onAddProviderPressed}/>
    </View>
  )
}

const Styles = StyleSheet.create({
  root: {
    alignItems: 'center',
  },
  tittle: {
    fontWeight: 'bold',
    fontSize: 16     ,
    color: '#3E4F88',
    width: '90%',
    marginTop: 20
  },
  card: {
    borderRadius: 8,
    backgroundColor: 'white',
    padding:10,
    width: '90%',
    alignItems: 'flex-start',
    marginTop: 20
  },
  titleText: {
    fontWeight: 'bold',
    fontSize:17,
    width: '80%',
    color:'#3E4F88'
  },
  cntText: {
    color: '#3E4F88'
  }
  })

export default MyPostsProviderscreen