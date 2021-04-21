import React from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity,
  FlatList
} from 'react-native';
import {colors} from '../Exercises'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faArrowAltCircleLeft, faArrowAltCircleRight, faArrowCircleRight, faRedo } from '@fortawesome/free-solid-svg-icons'
import {basic,randNumber,validate} from '../Exercises.js';

function Model(props){
  var answer = []
  var count = 0
  return (
        <View style = {{backgroundColor: '#FDD856', flexDirection: 'row', width:'90%', height: '50%',padding:'2%', borderRadius: 10, borderColor:'#FFE68D', borderWidth: 2}}>
          <FlatList
            data={props.options}
            renderItem={({ item,index }) => (
              <TouchableOpacity onPress = {() =>{
                item.syl_sound.play()
                count++
                answer.push({syl:item.syl})
                console.log(answer)
                if (count == props.correct.length){
                  const valid = validate(props.correct,answer)
                  console.log(valid)
                  props.evaluate(valid);
                }
              }} key = {index}
              style = {{backgroundColor: colors[index].code,justifyContent: 'center',alignItems: 'center',borderRadius: 5,borderWidth: 1,borderColor: 'white',height: 105,width: 105, marginRight: '3%', marginTop:'15%'}}>
                <Text style = {{color: 'white', fontSize: 18, fontFamily: 'Roboto-Bold'}}>{item.syl}</Text>
              </TouchableOpacity>
            )}
            //Setting the number of column
            numColumns={3}
            horizontal = {false}
            keyExtractor = {item => item.id}
          />
        </View>
    );
}

function BackButton(props){
  return(
    <TouchableOpacity style = {{alignSelf: 'flex-start',marginLeft: props.marginL, marginTop: props.marginT, marginBottom: props.marginB}} onPress = {()=>{
      if (props.exercise){
        props.closeOverlay();
      }
      props.navigation.navigate(props.screen,{colored:props.colored})
      }}>
      <FontAwesomeIcon style = {{color:'white'}} size = {36} icon={ faArrowAltCircleLeft }/>
    </TouchableOpacity>
  );
}

function GetNew(props){
  return(
    <TouchableOpacity style = {{marginRight: props.marginR, marginTop: props.marginT, marginBottom: props.marginB}} onPress = {()=>{
      if (props.exercise){
        props.closeOverlay();
      }
      props.navigation.navigate(props.screen,{rand:randNumber(basic)})
      }}>
      <FontAwesomeIcon style = {{color:'white'}} size = {36} icon={ faArrowAltCircleRight }/>
    </TouchableOpacity>
  );
}

function Repeat(props){
  return(
    <TouchableOpacity style = {{marginRight: props.marginR, marginTop: props.marginT, marginBottom: props.marginB}} onPress = {()=>{
      if (props.exercise){
        props.closeOverlay();
      }
      props.navigation.navigate(props.screen,{rand:props.rand})
      }}>
      <FontAwesomeIcon style = {{color:'white'}} size = {36} icon={ faRedo }/>
    </TouchableOpacity>
  )
}

export {Model,BackButton, GetNew, Repeat};
