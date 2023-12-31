/* eslint-disable prettier/prettier */

/* eslint-disable prettier/prettier */
import { View, Text,StyleSheet,Pressable } from 'react-native';
import React from 'react';


const CustomButton = ({onPress,text,type="PRIMARY"}) => {
  return (
    <Pressable onPress={onPress} style={[styles.container, styles[`container_${type}`] ] }>
      <Text style={[styles.text, styles[`text_${type}`]]}>{text}</Text>
    </Pressable>
  );
};


const styles=StyleSheet.create({

    container:{

        padding:10,
        width: '80%',
        marginVertical:10,
        alignItems:'center',
        borderRadius:10,
        marginTop:50,


},
container_PRIMARY:{
  backgroundColor:'#243057',

},
container_TERTIARY:{
  
},
    text:{
        fontWeight:'bold',
        color:'white',
    },
    text_TERTIARY:{
      color:'gray'
    },

});
export default CustomButton;
