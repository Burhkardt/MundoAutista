import { StyleSheet } from 'react-native';


export default styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    opacity:1,
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
    width: '50%',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    alignSelf:'center',
    position:'relative',
    bottom:'25%',
    left:'25%'
    
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
    top:'23%',
    left:'5%',
    backgroundColor:'#cccccc',
    borderRadius:50,
  },
  contentBoxBox:{
    position: 'absolute',
    alignContent:'center',
    alignSelf:'center',
    alignItems:'center',
    backgroundColor:'#ffffff',
    flex:1,
    width:'95%',
    height:'70%',
    top:'29%', 
    borderRadius:50

  },
  contentBox:{
    backgroundColor:'#cccccc',
    flex:1,
    width:'95%',
    borderRadius:50,
    top:'3%',
    marginBottom:25,
    flexDirection:'row',
    justifyContent: 'space-around',
    flexWrap:'wrap',
    gap:20,
    position: 'relative',
    alignContent:'center',
    objectFit:'contain',

  },
  icons:{
    width:125,
    height: 125,
  },
  textBox:{fontSize:20, textAlign:'center', backgroundColor:'white', borderRadius:15, marginTop:7,}
    
});