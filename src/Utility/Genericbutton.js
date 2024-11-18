import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';

export default function GenericButton(props) {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'start',
        alignItems: 'start',
      }}>
      <TouchableOpacity style={props.estilo} onPress={props.press}>
        <Text style={{
    color: '#0',
    fontSize: 19,
  }}>{props.nome}</Text>
      </TouchableOpacity>
    </View>
  );
}

