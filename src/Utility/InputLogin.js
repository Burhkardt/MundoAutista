import React from 'react';
import { View, Text, TextInput, SafeAreaView, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Username(props) {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <TextInput
        style={styles.input}
        placeholder={props.nome}
        keyboardType="default"
        textContentType="username"
        autoCapitalize="none"
        placeholderTextColor="black" 
        autoCompleteType="username"
        autoCorrect={true}
        onChangeText={() => {}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#FFF',
    objectFit: 'cover',
    width: '90%',
    marginBottom: 15,
    color: '#0',
    fontSize: 22,
    borderRadius: 100,
    padding: 10,
    
  },
});
