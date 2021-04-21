import React, {useState} from 'react';
import { View, Text, Image, TouchableOpacity} from 'react-native';
import {BackButton} from './components/Model.js';
const logo = require('../assets/img/logo.png');

export default function About({route,navigation}){

    return (
        <View style = {{flex:1,backgroundColor: '#F5956C', alignItems:'center', justifyContent:'space-evenly'}}>
            <BackButton marginT = {'-15%'} marginL = {'5%'} marginB = {'-10%'} screen = {'Home'} navigation = {navigation}/> 
            <View style = {{backgroundColor: '#FFB08E', width:'90%', height: '70%',padding:'2%', borderRadius: 10, borderColor:'#FFC8B0', borderWidth: 2, alignItems: 'center',justifyContent: 'flex-start'}}>
                <Image source = {logo} style = {{width: 120, height: 120, marginTop:'4%'}}/>
                <Text style = {{fontSize: 24, color: 'white', marginTop: '10%', fontFamily: 'Capriola-Regular'}}>O ver o texto</Text>
                <Text style = {{fontSize: 20, color: 'white', marginTop: '10%', fontFamily: 'Roboto-Light'}}>O ver o texto foi criado em um projeto de pesquisa com o objetivo de ...</Text>
            </View>
        </View>
    );
}