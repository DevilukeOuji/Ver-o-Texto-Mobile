/**
 * @format
 */
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import Home from './screens/Home.js';
import Choose from './screens/ChooseLevel.js';
import Alpha from './screens/Alpha.js';
import Lesson from './screens/Lesson.js';
import Exercise from './screens/Exercise.js';
import Config from './screens/Config.js';
import About from './screens/About.js';
import {name as appName} from './app.json';
import React,{Component} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import ChooseActivity from './screens/ChooseActivity.js';
const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        headerMode = 'none'
        drawerContent={({navigation}) => (
          <Stack.Component navigation={navigation}/>
        )}>
        <Stack.Screen name = "Home" component = {Home}/>
        <Stack.Screen name = 'Config' component = {Config}/>
        <Stack.Screen name="ChooseAct" component={ChooseActivity} />
        <Stack.Screen name="Choose" component={Choose} />
        <Stack.Screen name = "Exercise2" component = {Exercise}/>
        <Stack.Screen name = 'Alpha' component = {Alpha}/>
        <Stack.Screen name = 'Lesson' component = {Lesson}/>
        <Stack.Screen name = 'About' component = {About}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
AppRegistry.registerComponent(appName, () => App);
