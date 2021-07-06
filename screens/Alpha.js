import React, { Component } from 'react';
import { View, Text,TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faVolumeUp } from '@fortawesome/free-solid-svg-icons'
import {alfa} from './Exercises.js';
import {BackButton} from './components/Model.js';

export default function Alpha ({route,navigation}){

    return (
      <View style = {{flex:1,backgroundColor: '#F5956C', alignItems:'center', justifyContent:'space-evenly'}}> 
        <BackButton marginL = {'5%'} screen = {'ChooseAct'} navigation = {navigation}/>
        <View style = {{backgroundColor: '#3DEE99', flexDirection: 'row',alignItems: 'center', justifyContent: 'center' , width:'90%', height: '30%',padding:'2%', borderRadius: 10, borderColor:'#68F8B3', borderWidth: 2}}>
            <Text style = {{color: 'white',fontSize:70,fontFamily: 'Roboto-Medium'}}>{alfa[0].letter}</Text>
            <TouchableOpacity style={{alignSelf:'flex-end',marginBottom: '5%'}} onPress = {() => {alfa[0].sound.play()}}>    
                    <FontAwesomeIcon style = {{color:'white'}} size = {32} icon={ faVolumeUp } />
            </TouchableOpacity>
        </View>
        <View style = {{backgroundColor: '#FFB08E', width:'90%', height: '50%',padding:'2%', borderRadius: 10, borderColor:'#FFC8B0', borderWidth: 2, justifyContent: 'space-evenly'}}> 
            {alfa[0].related.map((item,index) =>{
                return <View key = {index} style = {{flexDirection: 'row', padding: '8%', paddingVertical:'10%', justifyContent: 'space-between', backgroundColor:'#3DEE99', borderColor: '#68F8B3', borderWidth: 1.5, borderRadius: 5}}>
                            <Text style = {{color: 'white', fontSize:20, fontFamily: 'Roboto-Medium'}}>{item.word}</Text>
                            <TouchableOpacity onPress = {() => {item.sound.play()}}> 
                              <FontAwesomeIcon style = {{color:'white'}} size = {32} icon={ faVolumeUp } />
                            </TouchableOpacity>
                        </View>
            })}
        </View>
      </View>
    );
}
