import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  iconContainer: {
    flexDirection: 'row',
    backgroundColor: '#622CBB',
    justifyContent: 'flex-end',
    height: 85,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  iconStyle: {
    width: 25,
    height: 25,
    marginLeft: 20,
    marginTop: 10,
  },
  navBtnsContainer: {
    flexDirection: 'row',
    width: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5, 
  },
  navBtns: {
    flex: 1, 
    padding: 15,
    borderWidth: 1,
    borderColor: '#ddd',
    height: 50,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  navBtnsText: {
    color: '#622CBB',
    fontWeight: '400',
    fontSize: 16,
  },
  freteContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: 20,
    gap:10,
    alignItems:"center",
    padding:20,
    shadowColor: '#000',
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 1, 
  },
  freteBtnLocalizacao: {
    width:"50%", 
    borderRadius: 30,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    justifyContent:"center",
    backgroundColor:"rgba(232,156,12,0.2)"
    
  },
  freteBtn:{
    width:"50%", 
    borderRadius: 30,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    justifyContent:"center",
    borderWidth:1,

  },
  freteBtnText: {
    color: '#333',
    fontSize: 13,
    fontWeight: '400',
    color:"orange",
    padding:5
  },
  iconStyleFrete:{
    width:30,
    height:30,
  },
  freteBtnTransport:{
    padding:5
  },
  publicidadeContainer:{
    padding:15,
    borderColor:"#ddd",
    borderTopColor:"#ddd",
   
    
  },
  puplicidadeText:{
    backgroundColor:"#ddd",
    padding:20,
    textAlign:"center"
  },
  productsContainer:{
    flex:1,
    flexDirection:"row",
    borderWidth:1,
    borderRadius:10,
    marginBottom:5,
    borderColor:"#ddd",
    marginTop:10,
  },
  productImg:{
      width:135,
      height:140,
      borderTopLeftRadius:10,
      borderBottomLeftRadius:10
  },
  productsTextContainer:{
    height:"90%",
    justifyContent:"space-between",
    marginLeft:20,
    marginBottom:3,
    marginTop:3,
  },
  textProducts:{
    fontSize:14,
    width:190,
    
  },
  productsTextPrice:{
    fontWeight:"bold"
  },
  footerImgContainer:{
    height:60,
    flexDirection:"row",
    borderWidth:1,
    justifyContent:"space-evenly",
    alignItems:"center",
    borderEndWidth:0.2,
    borderColor:"#ddd"
  },
  footerImage:{
    width:25,
    height:25
  },





inputContainer:{
  flex:1,
 flexDirection:"row",
 marginTop:20,
 backgroundColor:"blue"
  },
  inputStyle:{
   width:300,
    borderColor:"#622CBB",
    borderWidth:2,
    borderRadius:10,
    height:50,
    backgroundColor:"red"
    
  },
  headerInputImg:{
    backgroundColor:"yellow",
    width:25,
    height:25,
    
  }
});
