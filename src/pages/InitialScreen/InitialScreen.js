import { Pressable, View, StyleSheet, Image} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './styles'

export default function TelaInicial({ navigation }) {
  return(
    <View style={styles.container}>
      <View style={styles.containerlogo}>
        <Image style={styles.logo1} source={require('../../assets/Logo_1.png')} />
        <Image style={styles.sublogo} source={require('../../assets/sublogo-autismo-1.png')} />
      </View>
      <View style={styles.containerlogo}>
        <Pressable onPress={() => navigation.navigate('Login')}><Image style={styles.logo2} source={require('../../assets/Logo_2.png')} /></Pressable>
      </View>      
    </View>
  )}

