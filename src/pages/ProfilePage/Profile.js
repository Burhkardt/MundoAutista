import React, { useState, useEffect } from 'react';
import {
  KeyboardAvoidingView,
  View,
  Text,
  ImageBackground,
  Image,
  TextInput,
  TouchableOpacity,
  Animated,
  Keyboard,
  SafeAreaView,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import GenericButton from '../../Utility/Genericbutton';
import Efalante from '../../assets/Efalante.png';
import back from '../../assets/Background.jpg';


import styles from './styles';

export default function App({ navigation }) {
  const [offset] = useState(new Animated.ValueXY({ x: 0, y: 80 }));
  const [opacity] = useState(new Animated.Value(0));
  const [logo] = useState(new Animated.ValueXY({ x: 170, y: 195 }));
  const [mostrarSenha1, defMostrarSenha1] = useState(false);

  const trocaMostrarSenha1 = () => defMostrarSenha1(!mostrarSenha1);
  const [mostrarSenha2, defMostrarSenha2] = useState(false);

  const trocaMostrarSenha2 = () => defMostrarSenha2(!mostrarSenha2);

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
            onPress={() => navigation.navigate('Home')}>
            <MaterialCommunityIcons
              name="arrow-left-circle-outline"
              color="black"
              size={50}
            />
          </TouchableOpacity>
            <SafeAreaView style={styles.contentBoxBox}>
              <SafeAreaView style={styles.contentBox}>
              <Text style={styles.toptext}>Nomeaqui</Text>
              <Text style={styles.bottomtext}>apenasumteste@gmail.com</Text>
              <Image source={Efalante} style={styles.elefalante} />
                <SafeAreaView style={styles.profile}>
                  <SafeAreaView style={{flex:1, width:'100%', height:'100%', alignItems:'center', top:80}}>
                    <GenericButton
                    nome='configuração'
                    estilo={styles.buttonSubmit}
                    />
                    <GenericButton
                    nome='Suporte técnico'
                    estilo={styles.buttonSubmitA}
                    />
                    <GenericButton
                    nome='Sobre nós'
                    estilo={styles.buttonSubmit}
                    />
                    <GenericButton
                    nome='Sair'
                    estilo={styles.buttonSubmitA}
                    />
                    
                  </SafeAreaView>
                </SafeAreaView>
              </SafeAreaView>
            </SafeAreaView>
          </Animated.View>
        </KeyboardAvoidingView>
      </ImageBackground>
    </>
  );
}
