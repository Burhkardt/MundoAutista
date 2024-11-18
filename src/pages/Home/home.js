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

import back from '../../assets/Background.jpg';
import styles from './styles';
import calameao from '../../assets/Calameao.png'
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
            
            <SafeAreaView style={styles.contentBoxBox}>
              <SafeAreaView style={styles.contentBox}>
                <TouchableOpacity></TouchableOpacity>
              </SafeAreaView>
            </SafeAreaView>
            <SafeAreaView style={styles.navBoxBox}>
              <SafeAreaView style={styles.contentBox}>
                <SafeAreaView style={styles.navcontentBox}>
                  <SafeAreaView>
                    <TouchableOpacity onPress= {() => navigation.navigate('Temp')}>
                      <MaterialCommunityIcons
                        name="clipboard-text"
                        color="black"
                        size={50}
                      />
                    </TouchableOpacity>
                  </SafeAreaView>
                  <SafeAreaView>
                    <TouchableOpacity>
                      <MaterialCommunityIcons
                        name="volume-high"
                        color="black"
                        size={50}
                        onPress={()=>navigation.navigate('Com')}
                      />
                    </TouchableOpacity>
                  </SafeAreaView>
                  <SafeAreaView>
                    <TouchableOpacity>
                      <MaterialCommunityIcons
                        name="account"
                        color="black"
                        size={50}
                        onPress={()=>navigation.navigate('Profile')}
                      />
                    </TouchableOpacity>
                  </SafeAreaView>
                </SafeAreaView>
              </SafeAreaView>
            </SafeAreaView><Image source={calameao} style={styles.camale}/>
          </Animated.View>
        </KeyboardAvoidingView>
      </ImageBackground>
    </>
  );
}
