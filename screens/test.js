import React from 'react'
import {View,Text} from 'react-native';

export default function tests({ route, navigation }) {
    /* 2. Get the param */
    const { name } = route.params;
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Text>{name}</Text>
      </View>
    );
  }