import { StyleSheet } from 'react-native';


export default styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    opacity:1
  },

  containerLogo: {
    flex: 1.5,
    justifyContent: 'center'
  },

  logo: {
    width: 300,
    height: 195
  },


  form: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    paddingBottom: 25,
    marginTop: -200
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

  buttonSubmit: {
    backgroundColor: '#59BFFF',
    width: '245px',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100
  },

  submitText: {
    color: '#FFF',
    fontSize: 19
  },

  buttonRegister: {
    marginTop: 10
  },

  registerText: {
    color: '#FFF'
  },
  background: {
    position: 'absolute',
    backgroundColor: '#00FFFF',
    left: 0,
    right: 0,
    top: 0,
    height: '100%',
    width: '100%',
    },
  backicon: {
    position: 'absolute',
    top:'7%',
    left:'5%'
  }
    
});