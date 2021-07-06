import React, { Component } from 'react';
import { ImageBackground } from 'react-native';
import { View, Text, Image, TouchableOpacity, StatusBar,StyleSheet } from 'react-native';
import {FlatGrid} from 'react-native-super-grid';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faBook,faTrophy,faCog,faQuestionCircle } from '@fortawesome/free-solid-svg-icons'
const logo = require('../assets/img/logo.png')
const back = require('../assets/img/back.png')
export default function Home ({route,navigation}){
  
  var {colored} = false;
  colored = route.params;

  const items = [
    { name: 'Iniciar',screen: 'ChooseAct',code: '#D06BFF', border:'#E09FFF',icon:faBook},
    { name: 'Troféus', screen: 'Home',code: '#FDD856', border:'#FFE68C', icon:faTrophy},
    { name: 'Configurar', screen: 'Config',code: '#3DEE99', border: '#93FFCB', icon:faCog},
    { name:'Sobre', screen: 'About',code: '#5FE3EC', border: '#9DF9FF', icon:faQuestionCircle},
  ]
  
  return (
    <View style={{flex:1, alignItems: 'center',backgroundColor:'#F5956C'}}>
      <StatusBar barStyle = 'dark-content' backgroundColor="#F5956C" />
      <View style = {{alignItems:'center', marginTop: '10%'}}> 
        <Image source = {logo} style = {{width: 120, height: 120}}/>
        <Text style = {{color: 'white', fontSize: 30, marginTop: '8%', fontFamily: 'Capriola-Regular'}}>Ver o Texto</Text>
      </View>
      <View style = {{width: '100%', height: '50%', alignItems: 'center', marginTop:'10%'}}>
        <FlatGrid
          itemDimension={120}
          data={items}
          style={{flex:1}}
          //horizontal = {true}
          // staticDimension={300}
          fixed
          spacing={40}
          renderItem={({ item }) => (
              <View style = {{justifyContent:'center',alignItems:'center'}}> 
                <TouchableOpacity style={[styles.itemContainer, { backgroundColor: item.code, borderColor: item.border }]} onPress={()=> navigation.navigate(item.screen, {colored:colored})}>
                  <FontAwesomeIcon style = {{color:'white'}} size = {32} icon={item.icon} />
                  <Text style = {{fontSize: 16,color: 'white', marginTop: 20,fontFamily: 'Capriola-Regular'}}>{item.name}</Text>
                </TouchableOpacity>
                
              </View>
          )}
          />  
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    borderWidth: 1.5,
    padding: 10,
    height: 120,
    width: '108%'
  },
  itemName: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
  },
  itemCode: {
    fontWeight: '600',
    fontSize: 12,
    color: '#fff',
  },
});
