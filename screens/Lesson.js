import React from 'react';
import { View, Text, Image,TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faVolumeUp } from '@fortawesome/free-solid-svg-icons'
import {basic} from './Exercises.js';
import {ColorSyl} from './components/ColorSyl.js';
import {BackButton, GetNew} from './components/Model.js';

export default function Lesson({route,navigation}){
  const {rand,colored} = route.params;
  const exercise_obj = basic[rand]

  return (
      <View style = {{flex:1,backgroundColor: '#F5956C', alignItems:'center', justifyContent:'space-evenly'}}>
        <View style = {{flexDirection: 'row',width:'100%', justifyContent:'space-between'}}>
          <BackButton marginL = {'5%'} screen = {'ChooseAct'} navigation = {navigation}/>
          <GetNew marginR = {'5%'} screen = {'Lesson'} navigation = {navigation} />
        </View>
        <View style = {{backgroundColor: '#D06BFF', flexDirection: 'row',alignItems: 'center', justifyContent: 'center' , width:'90%', height: '30%',padding:'2%', borderRadius: 10, borderColor:'#E09EFF', borderWidth: 2}}>
            <Image source = {exercise_obj.image} style = {{width: 70, height:70}}/> 
            <TouchableOpacity style = {{alignSelf:'flex-end',marginBottom: '5%'}} onPress = {() => {exercise_obj.sound.play()}}>  
              <FontAwesomeIcon style = {{color:'white'}} size = {32} icon={ faVolumeUp } />
            </TouchableOpacity>
        </View>
        <View style = {{backgroundColor: '#FFB08E', width:'90%', height: '50%',padding:'2%', borderRadius: 10, borderColor:'#FFC8B0', borderWidth: 2, justifyContent: 'space-evenly'}}> 
            <ColorSyl colored = {true} exercise = {exercise_obj}/>
            <ColorSyl colored = {colored} exercise = {exercise_obj}/>
        </View>
      </View>
    );
}
