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
    top:'23%',
    left:'5%',
    backgroundColor:'#cccccc',
    borderRadius:50
  },
  contentBoxBox:{
    position: 'absolute',
    alignContent:'center',
    alignSelf:'center',
    alignItems:'center',
    backgroundColor:'#ffffff',
    flex:1,
    width:'95%',
    height:'60%',
    bottom:'13%', 
    borderRadius:50

  },
  contentBox:{
    
    backgroundColor:'#cccccc',
    flex:0.95,
    width:'95%',
    borderRadius:50,
    top:'3%',
    alignContent:'center',
    alignItems:'center',

  },
  navcontentBox:{
    flexDirection:'row',
    backgroundColor:'#cccccc',
    flex:1,
    borderRadius:50,
    alignItems:'center',
    alignContent:'center',
    justifyContent:'space-between',
    width:'75%'

  },
  navBoxBox:{
    position: 'absolute',
    alignContent:'center',
    alignSelf:'center',
    alignItems:'center',
    backgroundColor:'#ffffff',
    flex:1,
    width:'95%',
    height:'10%',
    bottom:'2%', 
    borderRadius:50

  },
  camale:{
    transform: [
    { scaleX: -1 }
  ],
    width:'35%',
    height:'15%',
    bottom: '-40%',
    left:'35%'
  }
    
});