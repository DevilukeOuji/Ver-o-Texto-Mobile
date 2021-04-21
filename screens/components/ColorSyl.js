import React from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity,
  FlatList
} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faVolumeUp } from '@fortawesome/free-solid-svg-icons'
import {colors} from '../Exercises'

function ColorSyl(props){

    return(
        <View style = {{flexDirection: 'row', padding: '8%', paddingVertical:'10%', justifyContent: 'space-between', backgroundColor:'#D06BFF', borderColor: '#E09EFF', borderWidth: 1.5, borderRadius: 5}}>
            <FlatList
            data = {props.exercise.spelled}
            renderItem = {({item,index}) =>(
                <View key = {index}>
                    <Text style = {{color: props.colored ? 'white' : colors[index].code, fontSize:20,fontFamily: 'Roboto-Medium'}}>{item.syl}</Text>
                    <Text style = {{color: props.colored ? 'white' : colors[index].code, fontSize:20,fontFamily: 'Capriola-Regular'}}>{item.syl}</Text>
                </View>
            )}
            horizontal = {true}
            keyExtractor = {item => item.id.toString()}
            />
            <TouchableOpacity onPress = {() => {props.exercise.sound.play()}}>  
                <FontAwesomeIcon style = {{color:'white'}} size = {32} icon={ faVolumeUp } />
            </TouchableOpacity>
        </View>
    );
}

export {ColorSyl}