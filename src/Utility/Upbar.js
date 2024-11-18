import react from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image
} from 'react-native';
import Foto from '../assets/images.jpg';

export default function Upbar() {
  return (
    <View style={styles.fundo}><Image source={Foto} style={{objectFit:'cover', flex:1,}}></Image></View>
  )
}

const styles = StyleSheet.create({
  fundo:{
    backgroundColor: 'white',
    flex:0.2,
    textAlign: 'start',
    justifyContent: 'start',
    alignContent:'start',
    paddingStart:'50%',
    paddingEnd:'50%',
    position:'fixed'
    
  },
})