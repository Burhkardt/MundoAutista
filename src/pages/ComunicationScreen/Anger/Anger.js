import React, { useState, useEffect } from 'react';
import {
  KeyboardAvoidingView,
  ScrollView,
  Text,
  ImageBackground,
  Image,
  TextInput,
  TouchableOpacity,
  Animated,
  Keyboard,
  SafeAreaView,
} from 'react-native';
import * as Speech from 'expo-speech';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import imgTempo from '../../../assets/temporary-rubber-stamp-over-white-background-86664158.png';
import back from '../../../assets/Background.jpg';
import Butao from '../../../Utility/Genericbutton'


import styles from './styles';

export default function App({ navigation }) {
  const [offset] = useState(new Animated.ValueXY({ x: 0, y: 80 }));
  const [opacity] = useState(new Animated.Value(0));
  const [logo] = useState(new Animated.ValueXY({ x: 170, y: 195 }));
  const [texto, setTexto] = useState('')
  function fala() { Speech.speak('Raiva di' + texto, {language:'pt-BR'});}

  useEffect(() => {
    keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      keyboardDidShow
    );

    keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      keyboardDidHide
    );

    // Animações em paralelo
    Animated.parallel([
      // Fornece um modelo de física básico (efeito mola/estilingue)
      Animated.spring(offset.y, {
        toValue: 0,
        speed: 5,
        bounciness: 20,
      }),

      // Anima um valor ao longo do tempo
      Animated.timing(opacity, {
        toValue: 1,
        duration: 200,
      }),
    ]).start();
  });

  function keyboardDidShow() {
    Animated.parallel([
      Animated.timing(logo.x, {
        toValue: 95,
        duration: 100,
      }),

      Animated.timing(logo.y, {
        toValue: 105,
        duration: 100,
      }),
    ]).start();
  }

  function keyboardDidHide() {
    Animated.parallel([
      Animated.timing(logo.x, {
        toValue: 170,
        duration: 100,
      }),

      Animated.timing(logo.y, {
        toValue: 195,
        duration: 100,
      }),
    ]).start();
  }

  return (
    <>
      <ImageBackground
        style={{ flex: 1, backgroundColor: '#42bff5' }}
        source={back}
        resizeMode="cover">
        <KeyboardAvoidingView style={styles.container}>
          <Animated.View
            style={[
              styles.form,
              {
                opacity: opacity,
                transform: [
                  {
                    translateY: offset.y,
                  },
                ],
              },
            ]}>
            <TouchableOpacity
            style={styles.backicon}
            onPress={() => navigation.navigate('Com')}>
            <MaterialCommunityIcons
              name="arrow-left-circle-outline"
              color="black"
              size={50}
            />
          </TouchableOpacity>
            <SafeAreaView style={styles.contentBoxBox}>
              <SafeAreaView style={styles.contentBox} horizontal={true}>
                <TouchableOpacity onPress={()=>Speech.speak('Raiva de papai')}><Image style={styles.icons} source={imgTempo}/><Text style={styles.textBox}>Papai</Text></TouchableOpacity>
                <TouchableOpacity onPress={()=>Speech.speak('Raiva de mamãe')}><Image style={styles.icons} source={imgTempo}/><Text style={styles.textBox}>Mamãe</Text></TouchableOpacity>
                <TouchableOpacity onPress={()=>Speech.speak('Raiva de professor')}><Image style={styles.icons} source={imgTempo}/><Text style={styles.textBox}>Professor</Text></TouchableOpacity>
                <TouchableOpacity onPress={()=>Speech.speak('Raiva de amigo')}><Image style={styles.icons} source={imgTempo}/><Text style={styles.textBox}>Amigo</Text></TouchableOpacity>
                <TextInput style={styles.input} value={texto} onChangeText={e=>setTexto(e)}></TextInput>
                <Butao estilo={styles.buttonSubmit} nome='Falar' press={fala}/>
              </SafeAreaView>
            </SafeAreaView>
          </Animated.View>
        </KeyboardAvoidingView>
      </ImageBackground>
    </>
  );
}
