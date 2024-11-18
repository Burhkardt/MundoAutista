import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Senha(props){
  return(
  <View style={{flexDirection:'row', justifyContent:'center',alignItems:'center'}}>
    <TextInput 
      style= {styles.input}
      placeholderTextColor= 'black'
      textContentType="password"
      autoCapitalize="none"
      autoCompleteType="password"
      autoCorrect={false}
      placeholder= {props.nome}
      secureTextEntry={props.senha}
      onChangeText={() => {}}
      />
      <MaterialCommunityIcons style={{marginBottom: 15, position: "absolute", left: '80%', top:'15%'}} size={30} name={props.logo?'eye-off':'eye'} onPress={props.clique} />
  </View>
  
  )}

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#FFF',
    objectFit:'cover',
    width: '90%',
    marginBottom: 15,
    color: '#222',
    fontSize: 22,
    borderRadius: 100,
    padding: 10,
  },
})