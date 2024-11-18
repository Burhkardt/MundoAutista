import React, { useState, useEffect } from 'react';
import {
  KeyboardAvoidingView,
  View,
  Text,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Animated,
  Keyboard,
  SafeAreaView,
  Image,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Username from '../../Utility/InputLogin';
import Senha from '../../Utility/InputSenha';
import GenericButton from '../../Utility/Genericbutton';
import balao from '../../assets/Balao.png';
import efalante from '../../assets/Efalante.png';

import styles from './styles';

export default function App({ navigation }) {
  const [offset] = useState(new Animated.ValueXY({ x: 0, y: 80 }));
  const [opacity] = useState(new Animated.Value(0));
  const [logo] = useState(new Animated.ValueXY({ x: 170, y: 195 }));
  const trocaMostrarSenha1 = () => defMostrarSenha1(!mostrarSenha1);
  const [mostrarSenha1, defMostrarSenha1] = useState(false);
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
      <SafeAreaView style={{ flex: 1, backgroundColor: '#42bff5' }}>
        <Image
          source={balao}
          style={{
            resizeMode: 'contain',
            width: 300,
            position: 'absolute',
            top: '-82%',
            right: '40%',
            transform: [{ rotate: '25deg' }],
          }}
        />
        <Image
          source={efalante}
          style={{
            position: 'absolute',
            width: 200,
            top: '55%',
            right: '-10%',
            resizeMode: 'contain',
          }}
        />
        <KeyboardAvoidingView style={styles.container}>
          <View style={styles.containerLogo}>
            <Animated.Image
              style={{
                width: 150,
                height: 150,
              }}
              source={require('../../assets/Logo_ofc.jpg')}
            />
          </View>

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
            <Username nome="Login" />

            <Senha
              nome="Senha"
              clique={trocaMostrarSenha1}
              senha={!mostrarSenha1}
              logo={mostrarSenha1}
            />

            <TouchableOpacity style={styles.buttonRegister}>
              <Text style={styles.registerText}>Esqueceu a senha?</Text>
            </TouchableOpacity>

            <SafeAreaView style={styles.buttonsBox}>
              <GenericButton
                estilo={styles.buttonSubmit}
                nome="Iniciar"
                press={() => navigation.navigate('Home')}
              />
              <GenericButton
                estilo={styles.buttonSubmit}
                press={() => navigation.navigate('Signup')}
                nome="Cadastro"
              />
            </SafeAreaView>
          </Animated.View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </>
  );
}
