import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity,Image } from 'react-native';
import {basic,randNumber} from './Exercises.js';
import {BackButton} from './components/Model.js';

const alfabeto = require('../assets/img/alfabeto.png')
const ler = require('../assets/img/ler.png')
const escrever = require('../assets/img/escrever.png')

const arr = [
    {image:alfabeto, text: "Conhecer\no alfabeto", screen: 'Alpha',code: '#3DEE99', border: '#93FFCB'},
    {image: ler, text: 'Aprender',code: '#D06BFF', screen: 'Lesson', border:'#E09FFF'},
    {image: escrever, text: 'Exercitar',screen: 'Exercise2',code: '#FDD856', border:'#FFE68C'}
]

export default function ChooseActivity({route,navigation}){
  const {colored} = route.params;
  return (
    <View style = {{flex:1,backgroundColor:'#F5956C', alignItems:'center', justifyContent: 'center'}}>
      <BackButton marginT = {'-20%'} marginL = {'5%'} marginB = {'15%'} screen = {'Home'} navigation = {navigation}/>
      <View style = {{backgroundColor: '#FFB08E', width:'90%', height: '70%',padding:'2%', borderRadius: 10, borderColor:'#FFC8B0', borderWidth: 2, justifyContent: 'space-evenly'}}>
          {arr.map( (item,index) => {
              return  <TouchableOpacity  key = {index} onPress = {() =>{navigation.navigate(item.screen,{rand:randNumber(basic), colored:colored})}}
              style = {{flexDirection: 'row', padding: '8%', paddingVertical:'10%', alignItems: 'center',justifyContent: 'space-between', 
              backgroundColor:item.code, borderColor: item.border, borderWidth: 1.5, borderRadius: 5}}>
                          <Text style = {{color: 'white', fontSize:15, fontFamily: 'Capriola-Regular'}}>{item.text}</Text>
                          <Image source = {item.image} style = {{width: 80, height: 80}}/>
                      </TouchableOpacity>
          })}
      </View>
    </View>
    );
}