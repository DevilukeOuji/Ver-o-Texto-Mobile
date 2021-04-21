import React, {useState} from 'react';
import { View, Text, Image, TouchableOpacity,Switch} from 'react-native';
import {BackButton} from './components/Model.js';

export default function Config({route,navigation}){

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    console.log(isEnabled)
    return (
        <View style = {{flex:1,backgroundColor: '#F5956C', alignItems:'center', justifyContent:'space-evenly'}}>
            <BackButton marginT = {'-15%'} marginL = {'5%'} marginB = {'-10%'} screen = {'Home'} navigation = {navigation} colored = {isEnabled}/> 
            <View style = {{backgroundColor: '#FFB08E', width:'90%', height: '70%',padding:'2%', borderRadius: 10, borderColor:'#FFC8B0', borderWidth: 2, justifyContent: 'space-evenly'}}>
                <View style = {{flexDirection: 'row', padding: '8%', paddingVertical:'10%', justifyContent: 'space-between', backgroundColor:'#D06BFF', borderColor: '#E09EFF', borderWidth: 1.5, borderRadius: 5}}>
                    <Text style = {{fontSize: 14, color: 'white', fontFamily: 'Capriola-Regular'}}>Separação por cores</Text>
                    <Switch
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    thumbColor={"#fff"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                    />
                </View>
            </View>
        </View>
    );
}