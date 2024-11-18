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
import Senha from '../../Utility/InputSenha';
import Username from '../../Utility/InputLogin';
import GenericButton from '../../Utility/Genericbutton';
import Upbar from '../../Utility/Upbar';
import back from '../../assets/Background.jpg';
import efalante from '../../assets/Efalante.png';

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
      <ImageBackground style={{ flex: 1, backgroundColor:'#42bff5'}} source={back} resizeMode="cover">
        <KeyboardAvoidingView style={styles.container}>
          <TouchableOpacity
            style={styles.backicon}
            onPress={() => navigation.navigate('Login')}>
            <MaterialCommunityIcons
              name="arrow-left-circle-outline"
              color="white"
              size={50}
            />
          </TouchableOpacity>
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
            <Username nome="Nome da criança" />
            <Username nome="Responsável" />
            <Username nome="Email" />
            <Senha
              nome="Senha"
              clique={trocaMostrarSenha1}
              senha={!mostrarSenha1}
              logo={mostrarSenha1}
            />
            <Senha
              nome="Repetir Senha"
              clique={trocaMostrarSenha2}
              senha={!mostrarSenha2}
              logo={mostrarSenha2}
            />
            <GenericButton nome="Criar Conta" estilo={{backgroundColor: '#ffffff',
    width: '90%',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,}} />
          </Animated.View>
        </KeyboardAvoidingView>
      </ImageBackground>
    </>
  );
}
