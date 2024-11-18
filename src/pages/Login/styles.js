import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  containerLogo: {
    flex: 1,
    justifyContent: 'center',
    top:'15%'
  },

  logo: {
    width: 170,
    height: 195
  },


  form: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    paddingBottom: 100
  },

  input: {
    backgroundColor: '#FFF',
    width: '90%',
    marginBottom: 15,
    color: '#222',
    fontSize: 22,
    borderRadius: 100,
    padding: 10
  },
  buttonsBox:{
    flexDirection:'row',
    alignContent:'center',
    alignItems:'center',
    justifyContent:'center',
    textAlign:'center',
    position:'relative',
    columnGap: 25
  },
  buttonSubmit: {
    backgroundColor: '#ffffff',
    width: 152,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
  },

  submitText: {
    color: '#FFF',
    fontSize: 19
  },

  buttonRegister: {
    marginTop: -15,
    right:'-25%',
    marginBottom: 10
  },

  registerText: {
    color: '#FFF'
  },
    background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '100%',
    width: '100%',
    },
});