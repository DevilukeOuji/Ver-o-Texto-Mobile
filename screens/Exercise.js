import React, { useState } from 'react';
import { StyleSheet, View, Text,Image, TouchableOpacity} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faVolumeUp,faRedo, faArrowAltCircleLeft, faArrowAltCircleRight} from '@fortawesome/free-solid-svg-icons'
import { Overlay } from 'react-native-elements';
import {Model, BackButton,GetNew, Repeat} from './components/Model.js';
import {basic,merge, fisherYates} from './Exercises.js';

const right = require('../assets/img/certo.png');
const wrong = require('../assets/img/errado.png');

export default function Exercise({route,navigation}){
    const {rand} = route.params;
    const exercise_obj = basic[rand]

    const [Visible,setVisible] = useState('Parent')
    const [VisibleW, setVisibleW] = useState('Parent')

    return(
        <View style = {{flex:1,backgroundColor: '#F5956C', padding: '2%', alignItems:'center',justifyContent:'space-evenly'}}>
            <View style = {{flexDirection: 'row',width:'100%', justifyContent:'space-between'}}>
                <BackButton navigation = {navigation} screen = {'ChooseAct'} marginL = {'5%'}/>
                <GetNew navigation = {navigation} screen = {'Exercise2'} marginR = {'5%'}/>
            </View>    
            <View style = {{backgroundColor: '#FDD856', flexDirection: 'row',justifyContent: 'center' , width:'90%', height: '30%', borderRadius: 10, borderColor:'#FFE68D', borderWidth: 2}}>
                <Image source = {exercise_obj.image} style = {{width: 70, height:70, alignSelf: 'center'}}/> 
                <TouchableOpacity style={{alignSelf:'flex-end',marginBottom: '5%'}} onPress = {() => {exercise_obj.sound.play()}}>    
                    <FontAwesomeIcon style = {{color:'white'}} size = {32} icon={ faVolumeUp } />
                </TouchableOpacity>
            </View>
            <Model options = {fisherYates(merge(exercise_obj.spelled))} correct = {exercise_obj.spelled} 
            evaluate = {Visible => {
                if (Visible == true){
                    setVisible(Visible)
                }
                else if(Visible == false){
                    setVisibleW(!Visible)
                }
                }}/>
            <Overlay visible = {Visible} overlayStyle = {{width:'86%',height: '45%',backgroundColor: '#F5956C',alignItems: 'center', borderRadius:10, borderColor: '#FFC8B0', borderWidth:1.5}}>
                <Image source = {right} style = {{marginTop:'5%',width:90,height:90}}/>
                <Text style = {{marginVertical: '12%',color: 'white', fontSize:19, fontFamily: 'Capriola-Regular'}}>Você acertou, parabéns.</Text>
                <View style = {{width: '100%',flexDirection: 'row',justifyContent: 'space-around', marginBottom: '5%'}}>
                    <View>
                        <BackButton navigation = {navigation} screen = {'ChooseAct'} exercise = {true} closeOverlay = {() => {setVisible(false)
                    setVisibleW(false)}}/>
                    </View>
                    <View style = {{alignItems: 'center'}}>
                        <GetNew navigation = {navigation} screen = {'Exercise2'} exercise = {true} closeOverlay = {() => {setVisible(false)
                    setVisibleW(false)}}/>
                    </View>
                </View>
                <View style = {{width: '100%',flexDirection: 'row',justifyContent: 'space-around'}}>
                    <Text style = {{fontSize: 18, color: 'white',fontFamily: 'Capriola-Regular'}}>Voltar</Text>
                    <Text style = {{fontSize: 18, color: 'white',fontFamily: 'Capriola-Regular'}}>Próximo</Text>    
                </View>
             </Overlay>
             <Overlay visible = {VisibleW} overlayStyle = {{width:'86%',height: '45%',backgroundColor: '#F5956C',alignItems: 'center', borderRadius:10, borderColor: '#FFC8B0', borderWidth:1.5}}>
                <Image source = {wrong} style = {{marginTop:'5%',width:90,height:90}}/>
                <Text style = {{marginVertical: '12%',color: 'white', fontSize:19,fontFamily: 'Capriola-Regular'}}>Vamos tentar novamente?</Text>
                <View style = {{width: '100%',flexDirection: 'row',justifyContent: 'space-around', marginBottom: '5%'}}>
                    <View>
                        <Repeat navigation = {navigation} screen = {'Exercise2'} exercise = {true} closeOverlay = {() => {setVisible(false)
                    setVisibleW(false)}} rand = {rand}/>
                    </View>
                    <View style = {{alignItems: 'center'}}>
                        <GetNew navigation = {navigation} screen = {'Exercise2'} exercise = {true} closeOverlay = {() => {setVisible(false)
                    setVisibleW(false)}}/>
                    </View>
                </View>
                <View style = {{width: '100%',flexDirection: 'row',justifyContent: 'space-around'}}>
                    <Text style = {{fontSize: 18, color: 'white',fontFamily: 'Capriola-Regular'}}>Repetir</Text>
                    <Text style = {{fontSize: 18, color: 'white',fontFamily: 'Capriola-Regular'}}>Próximo</Text>    
                </View>
             </Overlay>
        </View>
    );
}