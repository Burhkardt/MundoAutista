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
    backgroundColor: '#fff',
    width: '65%',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    alignSelf:'center',
    margin:10,
    transform: [{rotateZ:'2deg'}],
  },
  buttonSubmitA: {
    backgroundColor: '#fff',
    width: '65%',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    alignSelf:'center',
    margin:10,
    transform: [{rotateZ:'-1deg'}],
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
    flex:0.95,
    width:'95%',
    borderRadius:50,
    top:'3%',
    alignItems:'center',
    alignContent:'center',

  },
  profile:{
    backgroundColor:'#7ec3de',
    width:'70%',
    height:'70%',
    position:'absolute',
    top:'25%',
    borderRadius:25,
    alignContent:'center',
    alignItems:'center',
  },
  toptext:{
    fontSize:30,
    alignSelf:'start',
    top:'10%',
    left:'15%'
  },
  bottomtext:{
    fontSize:15,
    alignSelf:'start',
    left:'15%',
    top:'10%',
    width:'50%'
  },
  elefalante:{
    objectFit:'contain',
    width:75,
    bottom:'37%',
    right:'15%',
    position:'absolute'
  }
    
});